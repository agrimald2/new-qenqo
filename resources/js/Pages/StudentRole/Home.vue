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
} from "@mdi/js";
import * as chartConfig from "@/Components/Charts/chart.config.js";
import LineChart from "@/Components/Charts/LineChart.vue";
import SectionMain from "@/Components/SectionMain.vue";
import CardBoxWidget from "@/Components/CardBoxWidget.vue";
import CardBox from "@/Components/CardBox.vue";
import TableSampleClients from "@/Components/TableSampleClients.vue";
import NotificationBar from "@/Components/NotificationBar.vue";
import BaseButton from "@/Components/BaseButton.vue";
import CardBoxTransaction from "@/Components/CardBoxTransaction.vue";
import CardBoxClient from "@/Components/CardBoxClient.vue";
import StudentsLayout from "@/Layouts/StudentsLayout.vue";
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue";
import SectionBannerStarOnGitHub from "@/Components/SectionBannerStarOnGitHub.vue";
import SectionBanner from "@/Components/SectionBanner.vue";
import { Head } from "@inertiajs/vue3";
import { gradientBgDark } from "@/colors";

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

<template>
    <StudentsLayout>

        <Head title="Dashboard" />
        <SectionMain>
            <SectionTitleLineWithButton :title="'Hola ' + mainStore.userName" />

            <div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <div>
                        <SectionBanner :class="gradientBgDark">
                            <h1 class="text-3xl text-white mb-6">
                                Clases y asistencia
                            </h1>
                            <div>
                                <BaseButton href="/students/appointments" :icon="mdiGithub"
                                    label="Clases" rounded-full />
                            </div>
                        </SectionBanner>
                    </div>
                    <div>
                        <SectionBanner :class="gradientBgDark">
                            <h1 class="text-3xl text-white mb-6">
                                Mi 
                                Grupo
                            </h1>
                            <div>
                                <BaseButton href="/students/activePlans" :icon="mdiGithub"
                                    label="Clases" target="_blank" rounded-full />
                            </div>
                        </SectionBanner>
                    </div>
                    <div>
                        <SectionBanner :class="gradientBgDark">
                            <h1 class="text-3xl text-white mb-6">
                                Mi
                                
                                perfil
                            </h1>
                            <div>
                                <BaseButton href="https://github.com/justboil/admin-one-vue-tailwind" :icon="mdiGithub"
                                    label="Perfil" target="_blank" rounded-full />
                            </div>
                        </SectionBanner>
                    </div>
                </div>
            </div>
        </SectionMain>
    </StudentsLayout>
</template>
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