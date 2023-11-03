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

        <Head title="Códigos de descuento" />
        <SectionMain>
            <SectionTitleLineWithButton title="Códigos de descuento" />
            <div class="grid grid-cols-4 gap-4">
                <div>
                    <BaseButton @click="showCreateMethod" :icon="mdiPlusCircle" label="Códigos de descuento" class="bg-green-300"
                        target="_blank" rounded-full />
                </div>
            </div>
            <Table :discountCodes="discountCodes" />
            <Create v-if="showCreate" @discountCode-created="fetch" />
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
            discountCodes: [],
        }
    },
    components: [Create, , Table],
    methods: {
        showCreateMethod() {
            this.showCreate = true;
        },
        fetch() {
            axios.get('/getDiscountCodes')
                .then(response => {
                    this.discountCodes = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchStudents() {
            axios.get('/api/students')
                .then(response => {
                    this.students = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
    mounted() {
        this.fetchStudents();
        this.fetch();
    },
}
</script>