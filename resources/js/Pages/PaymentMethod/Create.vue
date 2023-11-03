<script setup>
import { ref, defineEmits } from 'vue';
import axios from 'axios';
import CardBoxModal from "@/Components/CardBox.vue";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiPlusCircle } from "@mdi/js";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";

let description = ref(''); // data property for the dni
let name = ref(''); // data property for the name

const emit = defineEmits(['paymentMethod-created']);

const create = async () => { // method to create a student
    try {
        const response = await axios.post('/api/paymentMethods', { description: description.value, name: name.value });
        name.value = ''; // reset the input field
        description.value = ''; // reset the input field
        emit('paymentMethod-created', response.data.id); // emit the event with student id
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <CardBoxModal :title="'Crear Método de Pago'" :hasCancel="true" class="bg-gray-500 slide-in-top my-2">
        <FormControl :icon="mdiPlusCircle" class="my-1" placeholder="Nombre" v-model="name" />
        <FormControl :icon="mdiPlusCircle" class="my-1" placeholder="Descripcion" v-model="description" />
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
        }
    },
    methods: {
    },
    mounted() {
    },
}
</script>