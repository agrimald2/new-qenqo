<script setup>
import { ref, defineEmits } from 'vue';
import axios from 'axios';
import CardBoxModal from "@/Components/CardBox.vue";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiPlusCircle } from "@mdi/js";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";

let familyName = ref(''); // data property for the family name

const emit = defineEmits(['family-created']);

const createFamily = async () => { // method to create a family
    try {
        await axios.post('/api/family', { name: familyName.value });
        familyName.value = ''; // reset the input field
        emit('family-created'); // emit the event
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <CardBoxModal :title="'Crear Familia'" :hasCancel="true" class="bg-gray-500 slide-in-top my-2">
        <FormField label="Nombre de la Familia">
            <FormControl :icon="mdiPlusCircle" placeholder="Nombre" v-model="familyName" />
        </FormField>
        <BaseButton :icon="mdiPlusCircle" label="Guardar" class="bg-gray-300" target="_blank" rounded-full
            @click="createFamily" />
    </CardBoxModal>
</template>