<script setup>
import SectionMain from "@/Components/SectionMain.vue";
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue";
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
    <LayoutAuthenticated>

        <Head title="Clase" />
        <SectionMain>
            <SectionTitleLineWithButton :title="appointment.status + ' - ' + appointment.active_plan.name" />
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
                <CardBox class="mb-2">
                    <h3 class="font-bold text-xl">
                        {{ appointment.date }} de {{ appointment.start_time }} al {{ appointment.end_time }}
                    </h3>
                </CardBox>
                <CardBox class="center">
                    <Qr text="Hello world!" />
                </CardBox>
            </div>
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 mb-6">
                <CardBoxWidget :trend="'de ' + appointment.assistances.length" trend-type="up" color="text-blue-500"
                    :icon="mdiCartOutline" :number="0" prefix="" label="Confirmados" />
                <CardBoxWidget :trend="'de' + appointment.assistances.length" trend-type="down" color="text-red-500"
                    :icon="mdiCartOutline" :number="0" prefix="" label="No Irán" />
                <CardBoxWidget :trend="'de' + appointment.assistances.length" trend-type="down" color="text-red-500"
                    :icon="mdiChartTimelineVariant" :number="0" suffix="" label="No Asistieron" />
                <CardBoxWidget :trend="'de' + appointment.assistances.length" trend-type="up" color="text-red-500"
                    :icon="mdiChartTimelineVariant" :number="0" suffix="" label="Asistieron" />
            </div>
            <div>
                <StudentsTable :students="appointment.assistances" />
            </div>
        </SectionMain>
    </LayoutAuthenticated>
</template>
<script>
import axios from 'axios';
import StudentsTable from './StudentsTable.vue';
export default {
    props: ['appointment'],
    data() {
        return {

        }
    },
    components: [StudentsTable, Qr],
    methods: {

    },
    mounted() {

    },
}
</script>