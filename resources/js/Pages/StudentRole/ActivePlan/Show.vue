<script setup>
import SectionMain from "@/Components/SectionMain.vue";
import StudentsLayout from "@/Layouts/StudentsLayout.vue";
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue";
import { Head } from "@inertiajs/vue3";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiPlusCircle } from "@mdi/js";
import CardBoxWidget from "@/Components/CardBoxWidget.vue";
import CardBox from "@/Components/CardBox.vue";
import FormField from "@/Components/FormField.vue";
import FormControl from "@/Components/FormControl.vue";
import PillTag from "@/Components/PillTag.vue";
</script>
<template>
    <StudentsLayout>
        <Head title="Tarifas" />
        <SectionMain>
            <SectionTitleLineWithButton :title="'Grupo: ' + activePlan.name" />
            <CardBox class="mb-2">
                <h3 class="font-bold text-xl">
                    {{ activePlan.start_date }} al {{ activePlan.end_date }}
                </h3>
                <progress class="flex w-2/5 self-center lg:w-full"
                    :max="Math.floor((new Date(activePlan.end_date) - new Date(activePlan.start_date)) / (1000 * 60 * 60 * 24))"
                    :value="Math.floor((new Date() - new Date(activePlan.start_date)) / (1000 * 60 * 60 * 24))">
                </progress>
            </CardBox>
            <div class="grid gap-6 lg:grid-cols-2 mb-6">
                <CardBoxWidget :trend="'' + total_payed" trend-type="up" color="text-blue-500"
                    :icon="mdiCartOutline" :number="total_payed" prefix="S/ " label="Pagado" />
                <CardBoxWidget :trend="'de' + activePlan.rate_sessions_number" trend-type="alert" color="text-red-500"
                    :icon="mdiCartOutline" :number="activePlan.rate_sessions_assisted" prefix="" label="Sesiones" />
            </div>
            
            <div class="mb-6">
                <SectionTitleLineWithButton title="Clases" />
                <CardBox class="mb-2">
                    <AppointmentTable :appointments="appointments" />
                </CardBox>
            </div>
        </SectionMain>
    </StudentsLayout>
</template>
<script>
import CreateStudents from "../Students/Create.vue";
import CreatePayment from "../ActivePlanPayment/Create.vue";
import StudentList from "../Students/List.vue";
import PaymentList from "../ActivePlanPayment/List.vue";
import Table from "./Table.vue";
import AppointmentTable from "../Appointment/Table.vue";
import CreateAppointment from "../Appointment/Create.vue";
import axios from 'axios';

export default {
    props: ['activePlan'],
    data() {
        return {
            showCreateStudents: false,
            showCreatePayment: false,
            showCreateAppointment: false,
            active_students: [],
            students: [],
            selectedStudent: null,
            payments: [],
            total_payed: 0, // Added total_payed variable
            appointment_statuses: [
                { id: 1, value: "Confirmado" },
                { id: 2, value: "Finalizado" },
                { id: 3, value: "Cancelado" }
            ],
            appointments: []
        }
    },
    components: [CreateStudents, StudentList, CreatePayment, PaymentList, CreateAppointment],
    methods: {
        fetchActivePlanStudents() {
            axios.get('/api/activePlans/' + this.activePlan.id + '/students')
                .then(response => {
                    this.active_students = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchStudents() {
            axios.get('/api/students')
                .then(response => {
                    this.students = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchPayments() {
            axios.get('/students/getActivePlanPayments/' + this.activePlan.id)
                .then(response => {
                    this.payments = response.data;
                    this.calculateTotalPayed(); // Call the method after fetching the payments
                    this.fetchActivePlan();
                })
                .catch(error => {
                    console.log("Emit:");
                    console.error(error);
                });
        },
        calculateTotalPayed() { // Method to calculate total payed
            this.total_payed = this.payments.reduce((total, payment) => total + parseFloat(payment.total_payed), 0);
        },
        async fetchActivePlan() {
            axios.get('/api/activePlans/getById/' + this.activePlan.id)
                .then(response => {
                    this.activePlan = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        async fetchAppointment() {
            axios.get('/students/getAppointments/')
                .then(response => {
                    console.log(response.data);
                    this.appointments = response.data;
                })
                .catch(error => {
                    console.log("Emit:");
                    console.error(error);
                });
        },
    },
    mounted() {
        this.fetchActivePlanStudents();
        this.fetchStudents();
        this.fetchPayments();
        this.fetchAppointment();
    },
}
</script>