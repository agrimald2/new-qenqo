<script setup>
import { computed, ref, watchEffect } from "vue";
import axios from 'axios';
import { useMainStore } from "@/Stores/main";
import { mdiEye, mdiTrashCan } from "@mdi/js";
import CardBoxModal from "@/Components/CardBoxModal.vue";
import TableCheckboxCell from "@/Components/TableCheckboxCell.vue";
import BaseLevel from "@/Components/BaseLevel.vue";
import BaseButtons from "@/Components/BaseButtons.vue";
import BaseButton from "@/Components/BaseButton.vue";
import UserAvatar from "@/Components/UserAvatar.vue";
import PillTag from "@/Components/PillTag.vue";

const props = defineProps({
    checkable: Boolean,
    activePlans: Array
});
const rateToDelete = ref(null);

let items = ref([]);

watchEffect(() => {
    items.value = props.activePlans;
});

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);

const checkedRows = ref([]);

const itemsPaginated = computed(() =>
    items.value.slice(
        perPage.value * currentPage.value,
        perPage.value * (currentPage.value + 1)
    )
);

const numPages = computed(() => Math.ceil(items.value.length / perPage.value));

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
    const pagesList = [];

    for (let i = 0; i < numPages.value; i++) {
        pagesList.push(i);
    }

    return pagesList;
});

const remove = (arr, cb) => {
    const newArr = [];

    arr.forEach((item) => {
        if (!cb(item)) {
            newArr.push(item);
        }
    });

    return newArr;
};

const checked = (isChecked, item) => {
    if (isChecked) {
        checkedRows.value.push(item);
    } else {
        checkedRows.value = remove(
            checkedRows.value,
            (row) => row.id === item.id
        );
    }
};

const fetchRates = () => {
    axios.get('/api/rates')
        .then(response => {
            items.value = response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

const openDeleteModal = (rate) => {
    rateToDelete.value = rate;
    isModalDangerActive.value = true;
};

const deleteRate = () => {
    axios.delete(`/api/rates/${rateToDelete.value.id}`)
        .then(() => {
            // handle success, e.g. remove the rate from the rates array
            fetchRates();
        })
        .catch(error => {
            // handle error, e.g. show an error message
        });
};
</script>


<template>
    <CardBoxModal v-model="isModalDangerActive" title="Eliminar Tarifa" button="danger" buttonLabel="Eliminar" has-cancel
        @confirm="deleteRate">
        <p>Are you sure you want to delete this rate?</p>
    </CardBoxModal>
    <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
        <span v-for="checkedRow in checkedRows" :key="checkedRow.id"
            class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700">
            {{ checkedRow.name }}
        </span>
    </div>
    <table>
        <thead>
            <tr>
                <th v-if="checkable" />
                <th>Nombre Grupo</th>
                <th>Tarifa</th>
                <th>Inicio</th>
                <th>Fin</th>
                <th>Monto</th>
                <th>Progreso</th>
                <th>Estado</th>
                <th>Acciones</th>
                <th />
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in itemsPaginated" :key="item.id">
                <td data-label="Name">
                    {{ item.name }}
                </td>
                <td data-label="Company">
                    {{ item.rate_name }} <br>
                    {{ item.rate_sessions_number }} Sesiones
                </td>
                <td data-label="City">
                    {{ item.start_date }}
                </td>
                <td data-label="Progress" class="lg:w-32">
                    {{ item.end_date }}
                </td>
                <td data-label="Created" class="lg:w-1 whitespace-nowrap">
                    S/{{ item.total_payed }} de S/{{ item.total }}
                </td>
                <td data-label="Created" class="lg:w-1 whitespace-nowrap">
                    <progress class="flex w-2/5 self-center lg:w-full" 
                        :max="Math.floor((new Date(item.end_date) - new Date(item.start_date)) / (1000 * 60 * 60 * 24))" 
                        :value="Math.floor((new Date() - new Date(item.start_date)) / (1000 * 60 * 60 * 24))">
                    </progress>
                </td>
                <td data-label="City">
                    <PillTag color="success" label="En curso" :small="pillsSmall" :outline="pillsOutline"
                        :icon="pillsIcon" />
                </td>
                <td class="before:hidden lg:w-1 whitespace-nowrap">
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <BaseButton color="info" :icon="mdiEye" small :href="'/activePlans/'+item.id"/>
                        <BaseButton color="danger" :icon="mdiTrashCan" small @click="() => openDeleteModal(item)" />
                    </BaseButtons>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <BaseLevel>
            <BaseButtons>
                <BaseButton v-for="page in pagesList" :key="page" :active="page === currentPage" :label="page + 1"
                    :color="page === currentPage ? 'lightDark' : 'whiteDark'" small @click="currentPage = page" />
            </BaseButtons>
            <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
        </BaseLevel>
    </div>
</template>
