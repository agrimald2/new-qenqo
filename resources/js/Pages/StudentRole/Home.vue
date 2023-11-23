<template>
    <StudentsLayout>
        <Head title="Dashboard" />
        <SectionMain>
            <h1 class="main-font text-center text-xl">Bienvenido a la Fortaleza</h1>
            <div class="logo_container">
                <img src="/qenqo-logo-white.png" alt="" style="width: 50%; max-width: 250px;" class="slide-in-elliptic-top-fwd">
            </div>
            <div class="mt-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    
                    <SectionBanner class="bg-black flex flex-col items-center justify-center p-6">
                        <h3 class="yellow-qenqo-text main-font bold">¿Aún no estás seguro?</h3>
                        <BaseButton href="/students/scheduleAppointmentTest" label="Clase de Prueba" class="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full main-font" />
                    </SectionBanner>

                    <SectionBanner :class="gradientBgDark" class="flex flex-col items-center justify-center p-6">
                        <BaseIcon :path="mdiCalendarAccount" size="48" class="text-white" />
                        <BaseButton href="/students/appointments" label="Reserva tu clase" class="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full main-font" />
                    </SectionBanner>
                    <!-- Clases y asistencia -->
                    <SectionBanner :class="gradientBgDark" class="flex flex-col items-center justify-center p-6">
                        <BaseIcon :path="mdiMonitorCellphone" size="48" class="text-white" />
                        <BaseButton href="/students/appointments" label="Clases" class="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full main-font" />
                    </SectionBanner>

                    <!-- Planes y tarifas -->
                    <SectionBanner :class="gradientBgDark" class="flex flex-col items-center justify-center p-6">
                        <BaseIcon :path="mdiCartOutline" size="48" class="text-white" />
                        <BaseButton href="/students/buyRates" label="Comprar un Plan" class="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full main-font" />
                    </SectionBanner>

                    <!-- Mi perfil -->
                    <SectionBanner :class="gradientBgDark" class="flex flex-col items-center justify-center p-6">
                        <BaseIcon :path="mdiAccountMultiple" size="48" class="text-white" />
                        <BaseButton href="/students/profile" label="Mi Perfil" class="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full main-font" />
                    </SectionBanner>
                </div>
            </div>
        </SectionMain>
    </StudentsLayout>
</template>
<script setup>
import { computed, ref, onMounted } from "vue";
import { useMainStore } from "@/Stores/main";
import {
    mdiAccountMultiple,
    mdiCartOutline,
    mdiChartTimelineVariant,
    mdiMonitorCellphone,
    mdiReload,
    mdiChartPie,
    mdiCalendarAccount
} from "@mdi/js";
import * as chartConfig from "@/Components/Charts/chart.config.js";
import LineChart from "@/Components/Charts/LineChart.vue";
import SectionMain from "@/Components/SectionMain.vue";
import CardBoxWidget from "@/Components/CardBoxWidget.vue";
import CardBox from "@/Components/CardBox.vue";
import TableSampleClients from "@/Components/TableSampleClients.vue";
import NotificationBar from "@/Components/NotificationBar.vue";
import BaseIcon from "@/Components/BaseIcon.vue";
import BaseButton from "@/Components/BaseButton.vue";
import CardBoxTransaction from "@/Components/CardBoxTransaction.vue";
import CardBoxClient from "@/Components/CardBoxClient.vue";
import StudentsLayout from "@/Layouts/StudentsLayout.vue";
import SectionTitle from "@/Components/SectionTitle.vue";
import SectionBannerStarOnGitHub from "@/Components/SectionBannerStarOnGitHub.vue";
import SectionBanner from "@/Components/SectionBanner.vue";
import { Head } from "@inertiajs/vue3";
import { gradientBgDark, gradientBgBase } from "@/colors";

const chartData = ref(null);

const fillChartData = () => {
    chartData.value = chartConfig.sampleChartData();
};

onMounted(() => {
    fillChartData();
});

const mainStore = useMainStore();

const clientBarItems = computed(() => mainStore.clients.slice(0, 4));

const transactionBarItems = computed(() => mainStore.history);
</script>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            studentInfo: [],
        }
    },
    components: [],
    methods: {
        showCreateMethod() {
            this.showCreate = true;
        },
        fetch() {
            axios.get('/students/getLoggedInStudentInfo')
                .then(response => {
                    this.studentInfo = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },

    },
    mounted() {
        this.fetch();
    },
}
</script>

<style>
/* Aquí puedes agregar estilos globales para el componente */
.gradientBgDark {
    background-color: #292566;
    /* Color de fondo púrpura de la marca */
}

.bg-purple-600 {
    background-color: #292566;
    /* Ajusta este valor si tienes un púrpura específico para los botones */
}

.bg-purple-700 {
    background-color: #1e1a47;
    /* Ajusta este valor para el estado hover de los botones */
}

.hover\:bg-purple-700:hover {
    background-color: #1e1a47;
    /* Asegúrate de que esta clase funcione con el estado hover */
}

/* Asegúrate de que estas clases estén en tu archivo de configuración de Tailwind CSS */</style>