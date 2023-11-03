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
            <SectionTitleLineWithButton title="Clases Agendadas" />
            <div class="grid grid-cols-4 gap-4 mb-2">
                <div>
                    <BaseButton @click="showCreateMethod" :icon="mdiPlusCircle" label="Nueva Clase" class="bg-green-300"
                        target="_blank" rounded-full />
                </div>
            </div>
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
                <CardBox class="mb-2">
                    <FormControl :icon="mdiPlusCircle" type="date" v-model="filter.startDate" @change="fetchAppointments" />
                </CardBox>
                <CardBox class="mb-2">
                    <FormControl :icon="mdiPlusCircle" type="date" v-model="filter.endDate" @change="fetchAppointments" />
                </CardBox>
                <CardBox class="mb-2">
                    <FormControl :icon="mdiPlusCircle" type="select" v-model="filter.status" 
                        :options="appointment_statuses.map(status => ({ label: status.value, value: status.id }))"
                        @change="fetchAppointments" />
                </CardBox>
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
    },
    mounted() {
        this.fetchAppointments();
    },
}
</script>