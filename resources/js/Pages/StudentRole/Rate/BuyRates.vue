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
            <!-- ... -->
            <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-4 text-white text-center main-font">Tarifas Disponibles</h2>
                <div v-for="(groupedRates, category) in categorizedRates" :key="category">
                    <h3 class="text-xl font-semibold my-4 text-gray-100 text-center main-font">{{ category }}</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <PricingCard v-for="rate in groupedRates" :key="rate.id" :name="rate.name" :price="rate.price"
                            :sessions="rate.sessions" :description="rate.description" />
                    </div>
                </div>
            </div>
        </SectionMain>
    </StudentsLayout>
</template>
  
<script>
import axios from 'axios';
import PricingCard from './PricingCard.vue';
export default {
    components: {
        PricingCard,
    },
    data() {
        return {
            rates: [
                {
                    id: 1,
                    category: "Individual",
                    name: "Tarifa Básica",
                    price: 30,
                    sessions: 8,
                    description: "Acceso a todas las instalaciones y hasta 8 clases al mes."
                },
                {
                    id: 2,
                    category: "Premium",
                    name: "Tarifa Premium",
                    price: 50,
                    sessions: 15,
                    description: "Acceso ilimitado a instalaciones, 15 clases al mes y 2 asesorías personalizadas."
                },
                {
                    id: 3,
                    category: "Estudiantes",
                    name: "Tarifa Estudiante",
                    price: 20,
                    sessions: 8,
                    description: "Acceso a todas las instalaciones y hasta 8 clases al mes. Descuento para estudiantes."
                },
                {
                    id: 4,
                    category: "Familiar",
                    name: "Tarifa Familiar",
                    price: 80,
                    sessions: 'Ilimitadas',
                    description: "Acceso ilimitado para ti y tu familia. Incluye 4 miembros."
                }
            ],
            showPayModal: false
        };
    },
    methods: {
        fetchRates() {
            axios.get('/api/rates')
                .then(response => {
                    this.rates = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        showPayModal(){
            this.showPayModal = true;
        }
    },
    computed: {
        categorizedRates() {
            return this.rates.reduce((acc, rate) => {
                if (!acc[rate.category]) {
                    acc[rate.category] = [];
                }
                acc[rate.category].push(rate);
                return acc;
            }, {});
        }
    },
    mounted() {
    },
};
</script>
