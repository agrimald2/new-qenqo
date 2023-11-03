<script setup>
import { ref, defineEmits } from 'vue';
import axios from 'axios';
import CardBoxModal from "@/Components/CardBox.vue";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiPlusCircle } from "@mdi/js";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";

let dni = ref(''); // data property for the dni
let name = ref(''); // data property for the name
let phone = ref(''); // data property for the phone
let username = ref(''); // data property for the username
let password = ref(''); // data property for the password

const emit = defineEmits(['trainer-created']);

const create = async () => { // method to create a student
    try {
        const response = await axios.post('/api/trainers', { dni: dni.value, name: name.value, phone: phone.value, username: username.value, password: password.value});
        dni.value = ''; // reset the input field
        name.value = ''; // reset the input field
        phone.value = ''; // reset the input field
        username.value = ''; // reset the input field
        password.value = ''; // reset the input field
        emit('trainer-created', response.data.id); // emit the event with student id
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <CardBoxModal :title="'Crear Entrenador'" :hasCancel="true" class="bg-gray-500 slide-in-top my-2">
        <FormControl :icon="mdiPlusCircle" class="my-1" placeholder="DNI" v-model="dni" />
        <FormControl :icon="mdiPlusCircle" class="my-1" placeholder="Nombre" v-model="name" />
        <FormControl :icon="mdiPlusCircle" class="my-1" placeholder="Teléfono" v-model="phone" />
        <FormControl :icon="mdiPlusCircle" class="my-1" placeholder="Nombre de usuario" v-model="username" />
        <FormControl :icon="mdiPlusCircle" class="my-1" placeholder="Contraseña" v-model="password" />
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