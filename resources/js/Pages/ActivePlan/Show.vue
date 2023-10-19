<script setup>
import SectionMain from "@/Components/SectionMain.vue";
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue";
import { Head } from "@inertiajs/vue3";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiPlusCircle } from "@mdi/js";
import CardBoxWidget from "@/Components/CardBoxWidget.vue";
import CardBox from "@/Components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import PillTag from "@/Components/PillTag.vue";
</script>
<template>
    <LayoutAuthenticated>

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
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
                <CardBoxWidget :trend="'de ' + activePlan.total" trend-type="up" color="text-blue-500"
                    :icon="mdiCartOutline" :number="activePlan.total_payed" prefix="S/ " label="Pagado" />
                <CardBoxWidget :trend="'de' + activePlan.rate_sessions_number" trend-type="alert" color="text-red-500"
                    :icon="mdiCartOutline" :number="activePlan.rate_sessions_assisted" prefix="" label="Sesiones" />
                <CardBoxWidget trend="de 20" trend-type="up" color="text-red-500" :icon="mdiChartTimelineVariant"
                    :number="activePlan.people_number" suffix="" label="Alumnos" />
            </div>
            <div class="grid md:grid-cols-2 grid-col-1 gap-4">
                <div class="md:col-2 col">
                    <BaseButton @click="toggleCreateStudents" :icon="mdiPlusCircle" label="Alumnos"
                        class="bg-green-300 my-2" color="" target="_blank" rounded-full />
                    <CardBox class="mb-2">
                        <FormControl :icon="mdiPlusCircle" type="select"
                            :options="students.map(student => ({ label: student.user.name, value: student.id }))"
                            @change="addSelectedStudentToActivePlan" v-model="selectedStudent" />
                        <CreateStudents @student-created="handleNewStudent" v-if="showCreateStudents" />
                        <StudentList class="my-2 border rounded p-2" :students="active_students"
                            @delete-student="removeStudentFromActivePlan" />
                    </CardBox>
                </div>
                <div class="md:col-2 col">
                    <BaseButton @click="toggleCreatePayment" :icon="mdiPlusCircle" label="Pagos"
                        class="bg-green-300 my-2 mx-2" />
                    <PillTag color="warning" :label="'Falta Pagar ' + (activePlan.total - activePlan.total_payed)"
                        :small="pillsSmall" :outline="pillsOutline" :icon="pillsIcon" />
                    <CardBox class="mb-2">
                        <CreatePayment :activePlan="activePlan" @payment-added="fetchPayments" v-if="showCreatePayment" />
                        <PaymentList :payments="payments" />
                    </CardBox>
                </div>
            </div>
            <div class="mb-6">
                <SectionTitleLineWithButton title="Clases" />
                <BaseButton @click="toggleCreateAppointment" :icon="mdiPlusCircle" label="Clase" class="bg-green-300 my-2"
                    color="" target="_blank" rounded-full />
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
                    <CardBox class="mb-2">
                        <FormControl :icon="mdiPlusCircle" type="date" @change="addSelectedStudentToActivePlan"
                            v-model="selectedStudent" />
                    </CardBox>
                    <CardBox class="mb-2">
                        <FormControl :icon="mdiPlusCircle" type="date" @change="addSelectedStudentToActivePlan"
                            v-model="selectedStudent" />
                    </CardBox>
                    <CardBox class="mb-2">
                        <FormControl :icon="mdiPlusCircle" type="select"
                            :options="appointment_statuses.map(status => ({ label: status.value, value: status.id }))"
                            @change="addSelectedStudentToActivePlan" v-model="selectedStudent" />
                    </CardBox>
                </div>
                <CreateAppointment :activePlan="activePlan" v-if="showCreateAppointment" />
                <CardBox class="mb-2">
                    <AppointmentTable :appointments="appointments" />
                </CardBox>
            </div>
        </SectionMain>
    </LayoutAuthenticated>
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
        toggleCreateStudents() {
            this.showCreateStudents = !this.showCreateStudents;
        },
        toggleCreatePayment() {
            this.showCreatePayment = !this.showCreatePayment;
        },
        toggleCreateAppointment() {
            this.showCreateAppointment = !this.showCreateAppointment;
        },
        handleNewStudent(student) {
            this.toggleCreateStudents();
            this.addStudentToActivePlan(student);
        },
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
        async fetchPayments() {
            axios.get('/api/activePlanPayments/' + this.activePlan.id)
                .then(response => {
                    this.payments = response.data;
                    this.fetchActivePlan();
                })
                .catch(error => {
                    console.log("Emit:");
                    console.error(error);
                });
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
            axios.get('/api/activePlans/appointments/' + this.activePlan.id)
                .then(response => {
                    console.log(response.data);
                    this.appointments = response.data;
                })
                .catch(error => {
                    console.log("Emit:");
                    console.error(error);
                });
        },
        async addStudentToActivePlan(student) {
            try {
                const data = { active_plan_id: this.activePlan.id, student_id: student };
                await axios.post('/api/activePlans/' + this.activePlan.id + '/students', data);
                this.fetchActivePlanStudents();
            } catch (error) {
                console.error(error);
            }
        },
        addSelectedStudentToActivePlan() {
            this.addStudentToActivePlan(this.selectedStudent.value);
        },
        async removeStudentFromActivePlan(studentId) {
            try {
                await axios.delete(`/api/activePlans/${this.activePlan.id}/students/${studentId}`);
                this.fetchActivePlanStudents();
            } catch (error) {
                console.error(error);
            }
        },
        async removeStudentFromActivePlan(studentId) {
            try {
                await axios.post(`/api/activePlans/delete/student`, { student_id: studentId, active_plan_id: this.activePlan.id });
                this.fetchActivePlanStudents();
            } catch (error) {
                console.error(error);
            }
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