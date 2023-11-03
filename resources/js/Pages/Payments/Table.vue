<script setup>
import { computed, ref, watchEffect } from "vue";
import axios from 'axios';
import { useMainStore } from "@/Stores/main";
import { mdiEye, mdiTrashCan, mdiDrawPen } from "@mdi/js";
import CardBoxModal from "@/Components/CardBoxModal.vue";
import TableCheckboxCell from "@/Components/TableCheckboxCell.vue";
import BaseLevel from "@/Components/BaseLevel.vue";
import BaseButtons from "@/Components/BaseButtons.vue";
import BaseButton from "@/Components/BaseButton.vue";
import UserAvatar from "@/Components/UserAvatar.vue";

const props = defineProps({
    checkable: Boolean,
    payments: Array
});
const rateToDelete = ref(null);

let items = ref([]);

watchEffect(() => {
    items.value = props.payments;
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

</script>


<template>
    <CardBoxModal v-model="isModalDangerActive" title="Eliminar Alumno" button="danger" buttonLabel="Eliminar" has-cancel
        @confirm="deleteRate">
        <p>Are you sure you want to delete this student?</p>
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
                <th>Fecha</th>
                <th>Pagado</th>
                <th>Plan</th>
                <th>Forma de Pago</th>
                <th>Nombre</th>
                <th />
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in itemsPaginated" :key="item.id">
                <td data-label="Name">
                    {{ new Date(item.created_at).toLocaleDateString() }}
                </td>
                <td data-label="Celular">
                    S/{{ item.total_payed }}
                </td>
                <td data-label="Celular">
                    {{ item.total_payed }}
                </td>
                <td data-label="Celular">
                    {{ item.payment_method }}
                </td>
                <td data-label="Celular">
                    {{ item.student.user.name }}
                </td>
                <td class="before:hidden lg:w-1 whitespace-nowrap">
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <BaseButton color="warning" :icon="mdiDrawPen" small :href="'user/' + item.user_id" />
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
