<script setup>
import { reactive, toRefs, computed, ref, watchEffect } from "vue";
import { useMainStore } from "@/Stores/main";
import {
    mdiAccount,
    mdiMail,
    mdiAsterisk,
    mdiFormTextboxPassword,
    mdiGithub,
} from "@mdi/js";
import SectionMain from "@/Components/SectionMain.vue";
import CardBox from "@/Components/CardBox.vue";
import BaseDivider from "@/Components/BaseDivider.vue";
import FormField from "@/Components/FormField.vue";
import FormControl from "@/Components/FormControl.vue";
import FormFilePicker from "@/Components/FormFilePicker.vue";
import BaseButton from "@/Components/BaseButton.vue";
import BaseButtons from "@/Components/BaseButtons.vue";
import UserCard from "@/Components/UserCard.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/Components/SectionTitleLineWithButton.vue";

const props = defineProps({
    user: Array
});
const mainStore = useMainStore();

console.dir(props.user);

const profileForm = reactive({
    user_id: props.user.id,
    name: props.user.name,
    username: props.user.username,
    dni: props.user.dni,
    phone: props.user.phone,
});

const passwordForm = reactive({
    user_id: props.user.id,
    password: "",
});

const refferedFrom = reactive({
    user_id: props.user.id,
    reffered_by: props.user.role_id === 3 ? props.user.student.reffered_by : null,
});


const submitProfile = () => {
    axios.put(`/api/user/${profileForm.user_id}/information`, profileForm)
        .then(response => {
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
};

const submitPass = () => {
    axios.put(`/api/user/${passwordForm.user_id}/password`, passwordForm)
        .then(response => {
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
};

const submitReffered = () => {
    refferedFrom.reffered_by = refferedFrom.reffered_by.value;
    axios.put(`/api/student/${passwordForm.user_id}/updateRefferedBy`, refferedFrom)
        .then(response => {
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
};

</script>

<template>
    <LayoutAuthenticated>
        <SectionMain>
            <SectionTitleLineWithButton :icon="mdiAccount" title="Profile" main>

            </SectionTitleLineWithButton>

            <UserCard class="mb-6" :user="user"/>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CardBox is-form @submit.prevent="submitProfile">
                    <FormField label="Avatar" help="Max 500kb" v-if="props.user.role_id != 3">
                        <FormFilePicker label="Upload" />
                    </FormField>

                    <FormField label="Name" help="Required. Nombre">
                        <FormControl v-model="profileForm.name" :icon="mdiAccount" name="name" required
                            autocomplete="name" />
                    </FormField>
                    <FormField label="Username" help="Required. Nombre de usuario">
                        <FormControl v-model="profileForm.username" :icon="mdiMail" type="text" name="username" required
                            autocomplete="username" />
                    </FormField>
                    <FormField label="DNI" help="Required. DNI">
                        <FormControl v-model="profileForm.dni" :icon="mdiMail" type="text" name="dni" required
                            autocomplete="dni" />
                    </FormField>
                    <FormField label="Celular" help="Required. Celular">
                        <FormControl v-model="profileForm.phone" :icon="mdiMail" type="text" name="phone" required
                            autocomplete="phone" />
                    </FormField>

                    <template #footer>
                        <BaseButtons>
                            <BaseButton color="info" type="submit" label="Submit" />
                        </BaseButtons>
                    </template>
                </CardBox>
                <CardBox is-form @submit.prevent="submitPass">
                    <FormField label="New password" help="Required. New password">
                        <FormControl v-model="passwordForm.password" :icon="mdiFormTextboxPassword" name="password"
                            type="password" required autocomplete="new-password" />
                    </FormField>

                    <FormField label="Confirm password" help="Required. New password one more time">
                        <FormControl v-model="passwordForm.password_confirmation" :icon="mdiFormTextboxPassword"
                            name="password_confirmation" type="password" required autocomplete="new-password" />
                    </FormField>

                    <template #footer>
                        <BaseButtons>
                            <BaseButton type="submit" color="info" label="Submit" />
                        </BaseButtons>
                    </template>
                </CardBox>

                <CardBox is-form @submit.prevent="submitReffered" v-if="user.role_id === 3 && user.student">
                    <FormField v-if="user.student.referred_by" :label="'Referido por: ' + user.student.referred_by.name"
                        help="Cambair Entrenador">
                        <FormControl :icon="mdiPlusCircle" type="select"
                            :options="trainers.map(trainer => ({ label: trainer.user.name, value: trainer.user.id }))"
                            v-model="refferedFrom.reffered_by" />
                    </FormField>
                    <FormField v-else help="Añadir Entrenador">
                        <FormControl :icon="mdiPlusCircle" type="select"
                            :options="trainers.map(trainer => ({ label: trainer.user.name, value: trainer.user.id }))"
                            v-model="refferedFrom.reffered_by" />
                    </FormField>
                    <template #footer>
                        <BaseButtons>
                            <BaseButton type="submit" color="info" label="Submit" />
                        </BaseButtons>
                    </template>
                </CardBox>
            </div>
        </SectionMain>
    </LayoutAuthenticated>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            trainers: [],
        }
    },
    methods: {
        fetchTrainers() {
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
        this.fetchTrainers();
    },
}
</script>
