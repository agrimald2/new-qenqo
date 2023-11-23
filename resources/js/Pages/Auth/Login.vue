<script setup>
import { useForm, Head, Link } from '@inertiajs/vue3'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import LayoutGuest from '@/Layouts/LayoutGuest.vue'
import SectionFullScreen from '@/Components/SectionFullScreen.vue'
import CardBox from '@/Components/CardBox.vue'
import FormCheckRadioGroup from '@/Components/FormCheckRadioGroup.vue'
import FormField from '@/Components/FormField.vue'
import FormControl from '@/Components/FormControl.vue'
import BaseDivider from '@/Components/BaseDivider.vue'
import BaseButton from '@/Components/BaseButton.vue'
import BaseButtons from '@/Components/BaseButtons.vue'
import FormValidationErrors from '@/Components/FormValidationErrors.vue'
import NotificationBarInCard from '@/Components/NotificationBarInCard.vue'
import BaseLevel from '@/Components/BaseLevel.vue'

const props = defineProps({
  canResetPassword: Boolean,
  status: {
    type: String,
    default: null
  }
})

const form = useForm({
  username: '',
  password: '',
  remember: []
})

const submit = () => {
  form
    .transform(data => ({
      ...data,
      remember: form.remember && form.remember.length ? 'on' : ''
    }))
    .post(route('login'), {
      onFinish: () => form.reset('password'),
    })
}
</script>

<template>
  <LayoutGuest>

    <Head title="Login" />

    <SectionFullScreen v-slot="{ cardClass }" class="bg-black">
      <CardBox :class="cardClass" class="text-center bg-purple-900" is-form @submit.prevent="submit">
        <CardBox class="bg-purple-900">
          <img src="/qenqo-logo-white.png" alt="" style="height: 125px; margin-left: auto; margin-right: auto;">
        </CardBox>
        <FormValidationErrors />

        <NotificationBarInCard v-if="status" color="info">
          {{ status }}
        </NotificationBarInCard>

        <FormField label="Usuario" label-for="username" class="yellow-qenqo-text main-font">
          <FormControl v-model="form.username" :icon="mdiAccount" id="username" autocomplete="username" type="username" class="secondary-font"
            required />
        </FormField>

        <FormField label="Contraseña" label-for="password" class="yellow-qenqo-text main-font">
          <FormControl v-model="form.password" :icon="mdiAsterisk" type="password" id="password"
            autocomplete="current-password" required />
        </FormField>

        <BaseDivider />

        <BaseLevel>
          <BaseButtons>
            <BaseButton type="submit" label="Entrar" :class="{ 'opacity-25': form.processing }"
              class="yellow-qenqo-text main-font" :disabled="form.processing" />
          </BaseButtons>
        </BaseLevel>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
