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
import PillTag from "@/Components/PillTag.vue";

const props = defineProps({
    checkable: Boolean,
    appointments: Array
});
const rateToDelete = ref(null);

let items = ref([]);

watchEffect(() => {
    items.value = props.appointments;
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
                <th />
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
                <th>Acciones</th>
                <th />
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in itemsPaginated" :key="item.id">
                <td class="border-b-0 lg:w-6 before:hidden">
                    #{{ index + 1 }}
                </td>
                <td data-label="Name">
                    {{ getDayOfWeekInSpanish(item.date) }}
                </td>
                <td data-label="Celular">
                    {{ item.start_time.slice(0, -3) }} - {{ item.end_time.slice(0, -3) }}
                </td>
                <td data-label="DNI">
                    <PillTag
                        :color="item.status === 'Confirmado' ? 'warning' : item.status === 'Finalizado' ? 'success' : 'danger'"
                        :label="item.status" :small="pillsSmall" :outline="pillsOutline" :icon="pillsIcon" />
                </td>
                <td class="before:hidden lg:w-1 whitespace-nowrap">
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <BaseButton color="info" :icon="mdiEye" small :href="'/activePlanAppointments/' + item.id" />
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
<script>
//import Create from "./Create.vue";
import Table from "./AppointmentsTable.vue";
import axios from 'axios';

export default {
    data() {
        return {

        }
    },
    components: [],
    methods: {
        getDayOfWeekInSpanish(dateString) {
            const dateParts = dateString.split("-");
            const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
            const dayOfWeek = new Intl.DateTimeFormat('es-ES', { weekday: 'long' }).format(date);
            const dayOfMonth = date.getDate();
            return `${dayOfWeek} ${dayOfMonth}`;
        }
    },
    mounted() {
    },
}
</script>