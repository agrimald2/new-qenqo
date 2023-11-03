<script setup>
import CardBoxModal from "@/Components/CardBox.vue";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiPlusCircle } from "@mdi/js";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
</script>
<template>
    <CardBoxModal :title="'Crear Tarifa'" hasCancel class="bg-gray-500 slide-in-top my-2">
        <FormField label="Elije la tarifa">
            <FormControl :icon="mdiPlusCircle" type="select" :options="rates_options" v-model="activePlan.rate_id"
                @change="updateSelectedRate" />
            <FormControl :icon="mdiPlusCircle" placeholder="Nombre de la tarifa" v-model="activePlan.name" />
            <div class="grid sm:grid-cols-3 col gap-4" v-if="selectedRate">
                <FormField :help="'MIN: ' + selectedRate.min_people + ' - MAX: ' + selectedRate.max_people"
                    @change="updatePeopleNumber">
                    <FormControl :icon="mdiPlusCircle" placeholder="N° Personas" type="number"
                        v-model="activePlan.people_number" />
                </FormField>
                <FormField :help="'Máximo: ' + selectedRate.days_duration + ' días'" @change="updateStartDate">
                    <FormControl type="date" v-model="activePlan.start_date" />
                </FormField>
                <FormField :help="'Máximo: ' + selectedRate.days_duration + ' días'">
                    <FormControl type="date" v-model="activePlan.end_date" />
                </FormField>
            </div>
        </FormField>
        <FormField :label="'Costo de la tarifa: ' + selectedRate.rate_type.name" help="Elige el tipo de tarifa"
            v-if="selectedRate">
            <div class="grid sm:grid-cols-3 col gap-4">
                <FormField help="Código de descuento del entrenador" @change="updateDiscountCode">
                    <FormControl :icon="mdiPlusCircle" placeholder="Cod Descuento" type="text"
                        v-model="activePlan.discount_code" />
                </FormField>
                <FormField help="Costo de todo el grupo sin descuento">
                    <FormControl :icon="mdiPlusCircle" placeholder="SubTotal" type="number" v-model="activePlan.subtotal" />
                </FormField>
                <FormField help="Monto a pagar total">
                    <FormControl :icon="mdiPlusCircle" placeholder="Total" type="number" v-model="activePlan.total"
                        help="Please enter your password to confirm" />
                </FormField>
            </div>
        </FormField>
        <BaseButton @click="submit" :icon="mdiPlusCircle" label="Guardar" class="bg-gray-300" rounded-full :disabled="!isFormValid" />
    </CardBoxModal>
</template>
<script>
import axios from 'axios';

export default {
    props: ['families'],
    data() {
        return {
            activePlan: {
                name: '',
                rate_id: '',
                start_date: '',
                end_date: '',
                subtotal: '',
                total: '',
                discount_code: '',
                people_number: '',
            },
            rates: [],
            rates_options: [],
            selectedRate: null,
            selectedDiscountCode: null,
        }
    },
    computed: {
        isFormValid() {
            let activePlanCopy = { ...this.activePlan };
            delete activePlanCopy.discount_code;
            return Object.values(activePlanCopy).every(field => field !== '');
        }
    },
    components: [],
    methods: {
        async submit() {
            try {
                const activePlanData = { ...this.activePlan, rate_id: this.activePlan.rate_id.id };
                await axios.post('/activePlans', activePlanData);
                this.$emit('active-plan-created')
            } catch (error) {
                console.error(error);
            }
        },
        async fetchRates() {
            try {
                const response = await axios.get('/api/rates');
                this.rates = response.data;
                this.rates_options = response.data.map(rate => ({
                    id: rate.id,
                    label: rate.name
                }));
            } catch (error) {
                console.error(error);
            }
        },
        updateSelectedRate() {
            this.selectedRate = this.rates.find(rate => rate.id === this.activePlan.rate_id.id);
            this.getTotalAndSubtotal();
        },
        updateStartDate() {
            const startDate = new Date(this.activePlan.start_date);
            startDate.setDate(startDate.getDate() + this.selectedRate.days_duration);
            this.activePlan.end_date = startDate.toISOString().substring(0, 10);
        },
        async updateDiscountCode() {
            try {
                const response = await axios.get(`/api/discountCodes/${this.activePlan.discount_code}`);
                this.selectedDiscountCode = response.data;
                this.getTotalAndSubtotal();
            } catch (error) {
                this.selectedDiscountCode = null;
            }
        },
        updatePeopleNumber() {
            this.getTotalAndSubtotal();
        },
        getTotalAndSubtotal() {
            const ratePrice = this.selectedRate.price;
            const peopleNumber = this.activePlan.people_number;
            const rateTypeId = this.selectedRate.rate_type_id;
            const discountCode = this.selectedDiscountCode;

            this.activePlan.subtotal = rateTypeId == 1 ? ratePrice * peopleNumber : ratePrice;
            this.activePlan.total = this.activePlan.subtotal;

            if (discountCode) {
                let totalDiscount = Math.min(this.activePlan.subtotal * discountCode.percentage / 100, discountCode.max_discount);
                this.activePlan.total -= totalDiscount;
            }
        }
    },
    mounted() {
        this.fetchRates();
    },
}
</script>