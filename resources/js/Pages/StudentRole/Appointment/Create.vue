<script setup>
import { ref, defineEmits } from 'vue';
import axios from 'axios';
import CardBoxModal from "@/Components/CardBox.vue";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiPlusCircle } from "@mdi/js";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
</script>

<template>
    <CardBoxModal :title="'Crear Familia'" hasCancel class="bg-gray-500 slide-in-top my-2">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
            <CardBox class="mb-2">
                <FormField label="Fecha">
                    <FormControl :icon="mdiPlusCircle" type="date" v-model="appointment.date" />
                </FormField>
            </CardBox>
            <CardBox class="mb-2">
                <FormField label="Hora de Inicio">
                    <FormControl :icon="mdiPlusCircle" type="select" :options="timeOptions" v-model="appointment.start_time" @change="updateEndTime" />
                </FormField>

            </CardBox>
            <CardBox class="mb-2">
                <FormField label="Hora de Fin">
                    <FormControl :icon="mdiPlusCircle" type="select" :options="timeOptions" v-model="appointment.end_time"/>
                </FormField>
            </CardBox>
        </div>
        <BaseButton :icon="mdiPlusCircle" label="Crear Clase" class="bg-green-300" target="_blank" rounded-full color
            @click="createAppointment" />
    </CardBoxModal>
</template>
<script>
import axios from 'axios';

export default {
    props: ['activePlan'],
    data() {
        return {
            appointment: {
                active_plan_id: this.activePlan.id,
                date: null,
                start_time: null,
                end_time: null
            },
            timeOptions: Array.from({length: 32}, (_, i) => {
                const hour = (5 + Math.floor(i / 2)).toString().padStart(2, '0');
                const minute = i % 2 === 0 ? '00' : '30';
                return `${hour}:${minute}`;
            }),
        }
    },
    methods: {
        updateEndTime() {
            const [hour, minute] = this.appointment.start_time.split(':');
            const newHour = (parseInt(hour) + 1).toString().padStart(2, '0');
            this.appointment.end_time = `${newHour}:${minute}`;
        },
        async createAppointment() {
            try {
                const response = await axios.post('/api/activePlanAppointments', this.appointment);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
    },
}
</script>