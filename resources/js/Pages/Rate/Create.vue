<script setup>
import CardBoxModal from "@/Components/CardBox.vue";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiPlusCircle } from "@mdi/js";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
</script>
<template>
    <CardBoxModal :title="'Crear Tarifa'" hasCancel class="bg-gray-500 slide-in-top my-2">
        <FormField label="Información de la tarifa">
            <div>
                <FormControl :icon="mdiPlusCircle" placeholder="N° Sesiones" type="select" :options="families"
                    v-model="rate.family_id" />
            </div>
            <FormControl :icon="mdiPlusCircle" placeholder="Nombre de la tarifa" v-model="rate.name" />
            <FormControl placeholder="Descripción de la tarifa" type="textarea" v-model="rate.description" />
            <div class="grid sm:grid-cols-3 col gap-4">
                <div>
                    <FormControl :icon="mdiPlusCircle" placeholder="N° Sesiones" type="number"
                        v-model="rate.sessions_number" />
                </div>
                <div>
                    <FormControl :icon="mdiPlusCircle" placeholder="Duración (días)" type="number"
                        v-model="rate.days_duration" />
                </div>
                <div>
                    <FormControl :icon="mdiPlusCircle" placeholder="Congelamiento (días)" type="number"
                        v-model="rate.max_freeze_days" />
                </div>
            </div>
        </FormField>
        <FormField label="Tipo de precio de tarifa" help="Elige el tipo de tarifa">
            <div class="grid sm:grid-cols-4 col gap-4">
                <div>
                    <FormControl :icon="mdiPlusCircle" placeholder="N° Sesiones" type="select" :options="rate_types"
                        v-model="rate.rate_type_id" />
                </div>
                <div>
                    <FormControl :icon="mdiPlusCircle" placeholder="Precio" type="number" v-model="rate.price" />
                </div>
                <div>
                    <FormControl :icon="mdiPlusCircle" placeholder="Min Personas" type="number" v-model="rate.min_people" />
                </div>
                <div>
                    <FormControl :icon="mdiPlusCircle" placeholder="Max Personas" type="number" v-model="rate.max_people" />
                </div>
            </div>
        </FormField>
        <BaseButton @click="submit" :icon="mdiPlusCircle" label="Guardar" class="bg-gray-300" rounded-full />
    </CardBoxModal>
</template>
<script>
import axios from 'axios';

export default {
    props: ['families'],
    data() {
        return {
            rate: {
                family_id: '',
                name: '',
                description: '',
                sessions_number: '',
                min_people: '',
                max_people: '',
                rate_type_id: '',
                price: '',
                days_duration: '',
                max_freeze_days: ''
            },
            rate_types: [],
        }
    },
    components: [],
    methods: {
        submit() {
            let rateData = { ...this.rate, family_id: this.rate.family_id.id, rate_type_id: this.rate.rate_type_id.id };
            axios.post('/api/rates', rateData)
                .then(response => {
                    // handle success, e.g. show a success message
                    rateData = '';
                    this.rate = [];
                    this.$emit('rate-created')
                })
                .catch(error => {
                    // handle error, e.g. show an error message
                });
        },
        fetchRateTypes() {
            axios.get('/api/rateTypes')
                .then(response => {
                    this.rate_types = response.data.map(rateType => ({
                        id: rateType.id,
                        label: rateType.name  // change 'name' to 'label'
                    }));
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
    mounted() {
        this.fetchRateTypes();
    },
}
</script>