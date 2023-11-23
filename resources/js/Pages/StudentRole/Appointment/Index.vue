<script setup>
import SectionMain from "@/Components/SectionMain.vue";
import StudentsLayout from "@/Layouts/StudentsLayout.vue";
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue";
import { Head } from "@inertiajs/vue3";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiPlusCircle } from "@mdi/js"; import CardBoxWidget from "@/Components/CardBoxWidget.vue";
import CardBox from "@/Components/CardBox.vue";
import FormField from "@/Components/FormField.vue";
import FormControl from "@/Components/FormControl.vue";
import PillTag from "@/Components/PillTag.vue";
</script>
<template>
    <StudentsLayout>

        <Head title="Clases Agendadas" />
        <SectionMain>
            <h2 class="text-2xl font-semibold mb-4 text-white text-center main-font">Mis Clases</h2>

            <div class="grid grid-cols-4 gap-4 mb-2">
                <div>
                    <BaseButton @click="goTo('/students/scheduleAppointment')" :icon="mdiPlusCircle" label="Nueva Clase"
                        :color="'purple'" class="bg-black text-white hover:bg-purple-700 transition duration-200 main-font"
                        rounded-full />
                </div>
            </div>
            <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 mb-6 bg-black pb-2 rounded">
                <div class="text-white p-2 rounded-lg shadow-lg text-center px-4">
                    <label for="startDate" class="block text-sm font-medium mb-1 main-font">Fecha Inicio</label>
                    <FormControl id="startDate" :icon="mdiCalendar" type="date" v-model="filter.startDate"
                        @change="fetchAppointments" class="text-black bg-purple-600 rounded-md" />
                </div>
                <div class="text-white p-2 rounded-lg shadow-lg text-center px-4">
                    <label for="endDate" class="block text-sm font-medium mb-1 main-font">Fecha Final</label>
                    <FormControl id="endDate" :icon="mdiCalendar" type="date" v-model="filter.endDate"
                        @change="fetchAppointments" class="text-black bg-purple-600 rounded-md" />
                </div>
                <div class="text-white p-2 rounded-lg shadow-lg text-center px-4">
                    <label for="status" class="block text-sm font-medium mb-1 main-font">Estado</label>
                    <FormControl id="status" :icon="mdiFilter" type="select" v-model="filter.status"
                        :options="appointment_statuses.map(status => ({ label: status.value, value: status.id }))"
                        @change="fetchAppointments" class="text-black bg-purple-600 rounded-md" />
                </div>
            </div>
            <Table :appointments="appointments" />
        </SectionMain>
    </StudentsLayout>
</template>
<script>
//import Create from "./Create.vue";
import Table from "./AppointmentsTable.vue";
import axios from 'axios';

export default {
    data() {
        return {
            showCreate: false,
            appointments: [],
            appointment_statuses: [
                { id: 1, value: "Confirmado" },
                { id: 2, value: "Finalizado" },
                { id: 3, value: "Cancelado" }
            ],
            filter: {
                startDate: null,
                endDate: null,
                activePlan: null,
                status: null
            }
        }
    },
    components: [Table],
    methods: {
        showCreateMethod() {
            this.showCreate = true;
        },
        fetchAppointments() {
            axios.get('/students/getAppointments', {
                params: {
                    start_date: this.filter.startDate,
                    end_date: this.filter.endDate,
                    active_plan: this.filter.activePlan,
                    status: this.filter.status
                }
            })
                .then(response => {
                    this.appointments = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        goTo(url) {
            window.location.href = url;
        }
    },
    mounted() {
        this.fetchAppointments();
    },
}
</script>