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

        <Head title="Entrenadores" />
        <SectionMain>
            <SectionTitleLineWithButton title="Entrenadores" />
            <div class="grid grid-cols-4 gap-4">
                <div>
                    <BaseButton @click="showCreateMethod" :icon="mdiPlusCircle" label="Entrenador" class="bg-green-300"
                        target="_blank" rounded-full />
                </div>
            </div>
            <Table :trainers="trainers" />
            <Create v-if="showCreate" @trainer-created="fetch" />
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
            trainers: []
        }
    },
    components: [Create, , Table],
    methods: {
        showCreateMethod() {
            this.showCreate = true;
        },
        fetch() {
            axios.get('/api/getTrainers')
                .then(response => {
                    this.trainers = response.data;
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