<script setup>
import { ref, defineEmits } from 'vue';
import axios from 'axios';
import CardBoxModal from "@/Components/CardBox.vue";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiPlusCircle } from "@mdi/js";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";

let code = ref('');
let percentage = ref('');
let max_discount = ref('');
let user_id = ref('');

const emit = defineEmits(['discountCode-created']);

const create = async () => { // method to create a discount code
    try {
        const response = await axios.post('/api/discountCodes', { code: code.value, percentage: percentage.value, max_discount: max_discount.value, user_id: user_id.value.value });
        code.value = ''; // reset the input field
        percentage.value = ''; // reset the input field
        max_discount.value = ''; // reset the input field
        user_id.value = ''; // reset the input field
        emit('discountCode-created', response.data.id); // emit the event with discount code id
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <CardBoxModal :title="'Crear Método de Pago'" :hasCancel="true" class="bg-gray-500 slide-in-top my-2">
        <FormControl :icon="mdiPlusCircle" type="select"
            :options="trainers.map(trainer => ({ label: trainer.user.name, value: trainer.user_id }))"
            v-model="user_id" />
        <FormControl :icon="mdiPlusCircle" class="my-1" placeholder="Código" v-model="code" required />
        <FormControl :icon="mdiPlusCircle" class="my-1" placeholder="Porcentaje" v-model="percentage" required />
        <FormControl :icon="mdiPlusCircle" class="my-1" placeholder="Max Descuento" v-model="max_discount" />
        <BaseButton :icon="mdiPlusCircle" label="Guardar" class="bg-gray-300" target="_blank" rounded-full color=""
            @click="create" />
    </CardBoxModal>
</template>
<script>
import axios from 'axios';

export default {
    props: [],
    data() {
        return {
            trainers: [],
        }
    },
    methods: {
        fetchUsers() {
            axios.get('/api/getTrainers/')
                .then(response => {
                    this.trainers = response.data;
                    console.dir(this.active_students);
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
    mounted() {
        this.fetchUsers();
    },
}
</script>