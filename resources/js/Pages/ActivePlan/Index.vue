<script setup>
import SectionMain from "@/Components/SectionMain.vue";
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue";
import { Head } from "@inertiajs/vue3";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiPlusCircle } from "@mdi/js";
</script>
<template>
    <LayoutAuthenticated>

        <Head title="Tarifas" />
        <SectionMain>
            <SectionTitleLineWithButton title="Grupos Activos" />
            <div class="grid grid-cols-4 gap-4">
                <div>
                    <BaseButton @click="showCreateMethod" :icon="mdiPlusCircle" label="Grupo/Tarifa" class="bg-green-300"
                        target="_blank" rounded-full />
                </div>
            </div>
            <Table :activePlans="activePlans" />
            <Create v-if="showCreate" @active-plan-created="activePlanAdded" />
        </SectionMain>
    </LayoutAuthenticated>
</template>
<script>
import Create from "./Create.vue";
import Table from "./Table.vue";
import axios from 'axios';

export default {
    data() {
        return {
            showCreate: false,
            activePlans: []
        }
    },
    components: [Create, , Table],
    methods: {
        showCreateMethod() {
            this.showCreate = true;
        },
        fetchActivePlans() {
            axios.get('/api/activePlans')
                .then(response => {
                    this.activePlans = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        activePlanAdded() {
            this.showCreate = false;
            this.fetchActivePlans();
        }
    },
    mounted() {
        this.fetchActivePlans();
    },
}
</script>