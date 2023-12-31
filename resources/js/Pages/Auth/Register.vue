<script setup>
import { useForm, usePage, Head } from "@inertiajs/vue3";
import { computed } from "vue";
import { mdiAccount, mdiPassport, mdiFormTextboxPassword, mdiCellphone } from "@mdi/js";
import LayoutGuest from "@/Layouts/LayoutGuest.vue";
import SectionFullScreen from "@/Components/SectionFullScreen.vue";
import CardBox from "@/Components/CardBox.vue";
import FormCheckRadioGroup from "@/Components/FormCheckRadioGroup.vue";
import FormField from "@/Components/FormField.vue";
import FormControl from "@/Components/FormControl.vue";
import BaseDivider from "@/Components/BaseDivider.vue";
import BaseButton from "@/Components/BaseButton.vue";
import BaseButtons from "@/Components/BaseButtons.vue";
import FormValidationErrors from "@/Components/FormValidationErrors.vue";

const form = useForm({
  name: "",
  dni: "",
  phone: "",
  username: "",
  password: "",
  password_confirmation: "",
  terms: [],
});

const hasTermsAndPrivacyPolicyFeature = computed(
  () => usePage().props.jetstream?.hasTermsAndPrivacyPolicyFeature
);

const submit = () => {
  form
    .transform((data) => ({
      ...data,
      terms: form.terms && form.terms.length,
    }))
    .post(route("register"), {
      onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
  <LayoutGuest>

    <Head title="Register" />

    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" class="my-24" is-form @submit.prevent="submit">
        <FormValidationErrors />

        <FormField label="Nombre" label-for="name" help="Nombre Completo">
          <FormControl v-model="form.name" id="name" :icon="mdiAccount" autocomplete="name" type="text" required />
        </FormField>

        <FormField label="DNI" label-for="dni" help="Número de DNI">
          <FormControl v-model="form.dni" id="dni" :icon="mdiPassport" autocomplete="dni" type="text" required />
        </FormField>

        <FormField label="Celular" label-for="phone" help="Celular">
          <FormControl v-model="form.phone" id="phone" :icon="mdiCellphone" autocomplete="phone" type="text" required />
        </FormField>

        <FormField label="Username" label-for="username" help="Nombre de Usuario">
          <FormControl v-model="form.username" id="username" :icon="mdiAccount" autocomplete="username" type="text" required />
        </FormField>

        <FormField label="Password" label-for="password" help="Please enter new password">
          <FormControl v-model="form.password" id="password" :icon="mdiFormTextboxPassword" type="password"
            autocomplete="new-password" required />
        </FormField>

        <FormField label="Confirm Password" label-for="password_confirmation" help="Please confirm your password">
          <FormControl v-model="form.password_confirmation" id="password_confirmation" :icon="mdiFormTextboxPassword"
            type="password" autocomplete="new-password" required />
        </FormField>

        <FormCheckRadioGroup v-if="hasTermsAndPrivacyPolicyFeature" v-model="form.terms" name="remember"
          :options="{ agree: 'I agree to the Terms' }" />

        <BaseDivider />

        <BaseButtons>
          <BaseButton type="submit" color="info" label="Register" :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing" />
          <BaseButton route-name="login" color="info" outline label="Login" />
        </BaseButtons>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
