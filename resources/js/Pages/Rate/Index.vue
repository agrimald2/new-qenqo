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
            <SectionTitleLineWithButton title="Tarifas y Planes" />
            <div class="grid grid-cols-4 gap-4">
                <div>
                    <BaseButton @click="showCreateRateModal" :icon="mdiPlusCircle" label="Tarifa" class="bg-green-300"
                        target="_blank" rounded-full />
                </div>
                <div>
                    <BaseButton @click="showCreateFamilyModal" :icon="mdiPlusCircle" label="Familia" class="bg-green-300"
                        target="_blank" rounded-full />
                </div>
            </div>
            <CreateFamily v-if="showCreateFamily" @family-created="familyAdded" />
            <Create v-if="showCreateRate" :families="families" @rate-created="rateAdded" />
            <Table :rates="rates"/>
        </SectionMain>
    </LayoutAuthenticated>
</template>
<script>
import Create from "./Create.vue";
import Table from "./Table.vue";
import CreateFamily from "../Family/Create.vue";
import axios from 'axios';

export default {
    data() {
        return {
            showCreateFamily: false,
            showCreateRate: false,
            rates: [],
            families: [],
        }
    },
    components: [Create, CreateFamily, Table],
    methods: {
        showCreateFamilyModal() {
            this.showCreateRate = false;
            this.showCreateFamily = true;
        },
        fetchFamilies() {
            axios.get('/api/families')
                .then(response => {
                    this.families = response.data;
                    this.families = this.families.map(family => ({
                        id: family.id,
                        label: family.name  // change 'name' to 'label'
                    }));
                })
                .catch(error => {
                    console.error(error);
                });
        },
        familyAdded() {
            this.showCreateFamily = false,
                this.fetchFamilies();
        },
        showCreateRateModal() {
            this.showCreateFamily = false;
            this.showCreateRate = true;
        },
        fetchRates() {
            axios.get('/api/rates')
                .then(response => {
                    this.rates = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        rateAdded() {
            this.showCreateRate = false,
            this.fetchRates();
        },
    },
    mounted() {
        this.fetchFamilies();
        this.fetchRates();
    },
}
</script>