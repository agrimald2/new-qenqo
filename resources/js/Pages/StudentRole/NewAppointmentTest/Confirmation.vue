<script setup>
import SectionMain from "@/Components/SectionMain.vue";
import StudentsLayout from "@/Layouts/StudentsLayout.vue";
import { mdiCalendar, mdiBackburger, mdiMenu } from "@mdi/js";
</script>
<template>
    <StudentsLayout>
        <SectionMain>
            <div class="flex flex-col items-center py-8 px-4 bg-black rounded-lg shadow-lg">
                <div class="mb-4">
                    <!-- Icono de confirmación -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-purple-600" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 class="text-2xl font-bold mb-3 text-gray-100 main-font">¡Cita Confirmada!</h3>
                <!-- Información de la cita -->
                <div class="text-lg text-gray-300 secondary-font mb-6">
                    <p><span class="font-semibold text-gray-100">Tarifa:</span> {{ appointment.rateName }}</p>
                    <p><span class="font-semibold text-gray-100">Fecha:</span> {{ appointment.date }}</p>
                    <p><span class="font-semibold text-gray-100">Hora:</span> {{ appointment.startTime }} - {{
                        appointment.endTime }}</p>
                    <p><span class="font-semibold text-gray-100">Entrenador:</span> {{ appointment.trainer }}</p>
                </div>
                <div class="mb-4 bg-purple-600 text-white p-4 rounded-lg text-sm main-font text-center">
                    Recibirás un recordatorio por WhatsApp dos horas antes de tu cita.
                </div>
                <button @click="goTo('https://calendar.google.com/calendar/u/0/r')" class=" bg-gray-100 hover:bg-gray-200 text-black py-2 px-6 rounded-lg transition duration-200
                main-font font-semibold">
                    Añadir a mi calendario
                </button>
            </div>
            <div class="flex justify-center mt-4">
                <button @click="goTo('/students/appointments')" class="bg-gray-50 hover:bg-gray-200 text-black py-2 px-6 rounded-lg transition duration-200
                main-font font-semibold">
                    Ver mis clases
                </button>
            </div>
        </SectionMain>
    </StudentsLayout>
</template>
<script>
export default {
    data() {
        return {
            appointment: {
                rateName: 'Tarifa Básica',
                date: '2023-05-15',
                startTime: '10:00',
                endTime: '11:00',
                trainer: 'Eduardo'
            }
        }
    },
    methods: {
        goTo(url) {
            window.location.href = url;
        }
    }
};
</script>