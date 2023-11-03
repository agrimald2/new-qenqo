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
import Qr from './Qr.vue';
</script>
<template>
    <StudentsLayout>

        <Head title="Clase" />
        <SectionMain>
            <SectionTitleLineWithButton :title="appointment.status + ' - ' + appointment.active_plan.name" />
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
                <CardBox class="mb-2">
                    <h3 class="font-bold text-xl">
                        {{ appointment.date }} de {{ appointment.start_time.slice(0, 5) }} al {{
                            appointment.end_time.slice(0, 5) }}
                    </h3>
                </CardBox>
                <CardBox class="center">
                    <div>
                        <h1 class="font-bold text-xl">
                            {{ assistance.status }}
                        </h1>
                    </div>
                    <div>
                        <BaseButton @click="markAssistance" :icon="mdiPlusCircle" label="Asistiré" class="bg-green-300 mr-4" v-if="assistance.status != 'Confirmado'"
                            color="green" target="_blank" rounded-full />
                        <BaseButton @click="showCreateMethod" :icon="mdiPlusCircle" label="No Asistiré"
                            class=" bg-red-300" color="green" target="_blank" rounded-full />
                    </div>
                </CardBox>
            </div>
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
                <CardBoxWidget :trend="'de ' + appointment.assistances.length" trend-type="up" color="text-blue-500"
                    :icon="mdiCartOutline" :number="0" prefix="" label="Confirmados" />
                <CardBoxWidget :trend="'de' + appointment.assistances.length" trend-type="down" color="text-red-500"
                    :icon="mdiCartOutline" :number="0" prefix="" label="No Irán" />
            </div>
        </SectionMain>
    </StudentsLayout>
</template>
<script>
import axios from 'axios';
import StudentsTable from './StudentsTable.vue';
export default {
    props: ['appointment', 'student', 'assistance'],
    data() {
        return {

        }
    },
    components: [StudentsTable, Qr],
    methods: {
        markAssistance() {
            axios.post('/api/activePlanAppointment/markStudentAssistance', {
                active_plan_appointment_id: this.appointment.id,
                student_id: this.student.id
            })
                .then(response => {
                    window.location.reload();
                })
                .catch(error => {
                    this.$toast.error('Error al marcar la asistencia');
                });
        }
    },
    mounted() {

    },
}
</script>