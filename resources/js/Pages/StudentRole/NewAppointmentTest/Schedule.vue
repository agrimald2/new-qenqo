<script setup>
import { computed, ref, onMounted } from "vue";
import { useMainStore } from "@/Stores/main";
import * as chartConfig from "@/Components/Charts/chart.config.js";
import SectionMain from "@/Components/SectionMain.vue";
import BaseButton from "@/Components/BaseButton.vue";
import StudentsLayout from "@/Layouts/StudentsLayout.vue";
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue";
import SectionBanner from "@/Components/SectionBanner.vue";
import { Head } from "@inertiajs/vue3";
import { gradientBgDark } from "@/colors";
import { mdiCalendar, mdiBackburger, mdiMenu } from "@mdi/js";
</script>

<template>
    <StudentsLayout>
        <SectionMain>
            <h2 class="text-2xl font-semibold mb-4 text-white text-center main-font">Bienvenido a tu Clase de Prueba</h2>
            <div class="p-4">
                <div class="mb-6">
                    <label for="date" class="block text-sm font-medium main-font text-yellow-500">Selecciona el día</label>
                    <input type="date" id="date"
                        class="mt-1 block w-full py-2 px-3 border border-gray-400 bg-gray-200 text-black rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm"
                        v-model="selectedDate" @input="fetchAvailableTimes">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="timeSlot in availableTimes" :key="timeSlot.id"
                        class="rounded-lg shadow-lg overflow-hidden bg-black">
                        <div class="p-4 ">
                            <div class="font-bold text-gray-800 secondary-font yellow-qenqo-text">{{ timeSlot.startTime }} -
                                {{ timeSlot.endTime }}</div>
                            <div class="main-font text-gray-500 text-base ">Entrenador: {{ timeSlot.trainer }}</div>
                        </div>
                        <div class="px-4 pb-3 text-right">
                            <button
                                class="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 w-full"
                                @click="bookAppointment(timeSlot)">
                                Reservar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </SectionMain>
    </StudentsLayout>
</template>
  
<script>
import { ref } from 'vue';

export default {
    name: 'BookingForm',
    data() {
        return {
            rates: [
                { id: 1, name: 'Tarifa Básica' },
                { id: 2, name: 'Tarifa Premium' },
                // ... otras tarifas
            ],
            availableTimes: [],
            selectedRate: null,
            selectedDate: null,
        };
    },
    methods: {
        fetchAvailableTimes() {
            // Lógica para obtener los horarios disponibles en base a la fecha seleccionada
            // Aquí se simulan datos de prueba
            this.availableTimes = [
                { id: 1, startTime: '08:00', endTime: '09:00', trainer: 'Jose' },
                { id: 2, startTime: '10:00', endTime: '11:00', trainer: 'Eduardo' },
                // ... más horarios
            ];
        },
        bookAppointment(timeSlot) {
            window.location.href = '/students/appointmentConfirmation';
            // Lógica para reservar la cita
            console.log(`Cita reservada para la tarifa ${this.selectedRate} el ${this.selectedDate} de ${timeSlot.startTime} a ${timeSlot.endTime} con el entrenador ${timeSlot.trainer}.`);
            // Aquí se realizaría una llamada a la API para confirmar la reserva
        },
    }
};
</script>
<style scoped>
/* Estilos personalizados para el input[type=date] */
input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    /* Ocultar el indicador por defecto */
    background: transparent;
    /* Aquí puedes colocar un ícono personalizado si lo deseas */
}

/* Firefox requiere un pseudoelemento adicional para cambiar el indicador */
input[type="date"]::-moz-calendar {
    color: rgba(0, 0, 0, 0);
    /* Ocultar el indicador por defecto */
    background: transparent;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-clear-button {
    display: none;
    /* Ocultar los botones de limpiar y spin */
}
</style>