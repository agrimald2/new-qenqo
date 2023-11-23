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
    <div v-if="checkedRows.length" class="p-3 bg-purple-600">
        <span v-for="checkedRow in checkedRows" :key="checkedRow.id"
            class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-300">
            {{ checkedRow.name }}
        </span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        <div v-for="(item, index) in itemsPaginated" :key="item.id" class="rounded-lg shadow-lg bg-black p-4">
            <div class="flex justify-between items-center mb-4">
                <h5 class="text-lg font-bold text-gray-800 secondary-font yellow-qenqo-text">Clase #{{ index + 1 }}</h5>
                <PillTag :color="item.status === 'Confirmado' ? 'green' : item.status === 'Finalizado' ? 'blue' : 'red'"
                    class="main-font" :label="item.status" />
            </div>
            <div class="mb-2">
                <div class="text-sm text-gray-600">Fecha:</div>
                <div class="text-sm font-semibold">{{ getDayOfWeekInSpanish(item.date) }}</div>
            </div>
            <div class="mb-2">
                <div class="text-sm text-gray-600">Hora:</div>
                <div class="text-sm font-semibold">{{ item.start_time.slice(0, -3) }} - {{ item.end_time.slice(0, -3) }}
                </div>
            </div>
            <div class="flex justify-end mt-4">
                <BaseButton color="info" :icon="mdiEye" small :color="'purple'" class="bg-purple-500"
                    :href="'/students/showAppointment/' + item.id" />
            </div>
        </div>
    </div>
    <!-- 
        <div class="flex justify-center p-3 lg:px-6 border-t border-gray-100 mt-5">
            <BaseLevel>
                <BaseButtons>
                    <BaseButton v-for="page in pagesList" :key="page" :active="page === currentPage" :label="page + 1"
                    :color="page === currentPage ? 'purple' : 'gray'" small @click="currentPage = page" />
                </BaseButtons>
                <small class="text-white">Página {{ currentPageHuman }} de {{ numPages }}</small>
            </BaseLevel>
        </div>
    -->
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