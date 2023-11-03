<script setup>
import SectionMain from "@/Components/SectionMain.vue";
import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue";
import { Head } from "@inertiajs/vue3";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiPlusCircle } from "@mdi/js";
import CardBox from "@/Components/CardBox.vue";
import FormControl from "@/Components/FormControl.vue";

</script>
<template>
    <LayoutAuthenticated>

        <Head title="Pagos" />
        <SectionMain>
            <SectionTitleLineWithButton title="Pagos" />
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
                <CardBox class="mb-2">
                    <FormControl :icon="mdiPlusCircle" type="date" v-model="filter.startDate" @change="fetch" />
                </CardBox>
                <CardBox class="mb-2">
                    <FormControl :icon="mdiPlusCircle" type="date" v-model="filter.endDate" @change="fetch" />
                </CardBox>
                <CardBox class="mb-2 center text-center">
                    <BaseButton @click="exportToExcel" :icon="mdiPlusCircle" label="Exportar Excel" class="bg-green-300"
                        color="green" target="_blank" rounded-full />
                </CardBox>
            </div>
            <Table :payments="payments" />
            <Create v-if="showCreate" @paymentMethod-created="fetch" />
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
            payments: [],
            filter: {
                startDate: null,
                endDate: null,
            }
        }
    },
    components: [Create, , Table],
    methods: {
        showCreateMethod() {
            this.showCreate = true;
        },
        fetch() {
            axios.get('/getPayments', {
                params: {
                    start_date: this.filter.startDate,
                    end_date: this.filter.endDate
                }
            })
                .then(response => {
                    this.payments = response.data;
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
        formatPayments() {
            if (!this.payments || !this.payments.length) return [];
            const formattedPayments = this.payments.map(payment => {
                let formattedPayment = {
                    "Fecha": new Date(payment.created_at).toLocaleDateString(),
                    "Referido": payment.student.referred_by ? payment.student.referred_by.username : "no",
                    "Estudiante": payment.student.user ? payment.student.user.name : "no",
                    "Plan": payment.active_plan.rate_name,
                    "Pagado": payment.total_payed,
                };
                return formattedPayment;
            });
            console.dir(formattedPayments);
            return formattedPayments;
        },
        exportToExcel() {
            const exportData = this.formatPayments();
            if (!exportData || !exportData.length) return;
            const csvData = this.toCsv(exportData);

            const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", "ReporteDePagos.csv");
            document.body.appendChild(link);
            link.click();
        },
        toCsv(data) {
            if (!data || !data.length) return '';
            const delimiter = ",";
            const keys = Object.keys(data[0]);

            const headerRow = keys.join(delimiter) + "\n";
            const bodyRows = data
                .map((row) => {
                    return keys
                        .map((key) => {
                            return '"' + row[key] + '"';
                        })
                        .join(delimiter);
                })
                .join("\n");

            return headerRow + bodyRows;
        },
    },
    mounted() {
        this.fetchStudents();
        this.fetch();
    },
}
</script>