<template>
    <div :id="name" class="fixed inset-0 z-50 overflow-auto bg-smoke-800 no-display scale-in-center pt-4"
        style="background-color: rgba(0, 0, 0, 0.5)">
        <Aditionals />
        <div class="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg">
            <div class="flex justify-between items-center pb-3">
                <p class="text-2xl font-bold text-gray-800 main-font">Pago con Tarjeta</p>
                <button class="text-gray-600 hover:text-gray-800" @click="closeModal(name)">
                    <span class="sr-only">Close</span>
                    <BaseIcon class="mr-2" :path="mdiCloseBox" size="24" />
                </button>
            </div>
            <form @submit.prevent="submitPayment">
                <div class="mb-4 main-font">
                    <label class="block text-gray-700 text-sm mb-2" for="card-number">Titular</label>
                    <FormControl :icon="mdiCreditCard" class="my-1 text-black" placeholder="Card Number"
                        v-model="cardNumber" />
                </div>
                <div class="mb-4 main-font">
                    <label class="block text-gray-700 text-sm mb-2" for="card-number">Card Number</label>
                    <FormControl :icon="mdiCreditCard" class="my-1 secondary-font text-black" placeholder="Card Number"
                        v-model="cardNumber" />
                </div>
                <!-- CVV and Date should be in one row-->
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <label class="block text-gray-700 text-sm mb-2  main-font" for="card-expiration">Expiration
                            Date</label>
                        <FormControl :icon="mdiCalendar" class="my-1 secondary-font text-black" placeholder="MM/YY"
                            v-model="cardExpiration" />
                    </div>
                    <div class="w-1/2 px-2 main-font">
                        <label class="block text-gray-700 text-sm mb-2" for="card-cvv">CVV</label>
                        <FormControl :icon="mdiLock" class="my-1 text-black secondary-font" placeholder="CVV"
                            v-model="cardCVV" />
                    </div>
                </div>
                <div class="flex justify-center mt-6">
                    <button @click="goTo('/students/scheduleAppointmentNutri')"
                        class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded transition duration-200 flex items-center justify-center"
                        type="submit">
                        <BaseIcon class="mr-2" :path="mdiCash" size="24" />
                        <span class="secondary-font">S/ 550</span>
                    </button>
                </div>
                <div class="flex justify-center">
                    <!-- Pasarela de pago imagen-->
                    <img src="https://1000marcas.net/wp-content/uploads/2023/01/Mercado-Pago-Logo.png" alt=""
                        style="max-width:45%">
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { mdiCreditCard, mdiCalendar, mdiLock, mdiCash, mdiCloseBox } from "@mdi/js";
import FormControl from "@/components/FormControl.vue";
import BaseIcon from "@/Components/BaseIcon.vue";
import Aditionals from "./Aditionals.vue";
</script>
<script>
export default {
    props: ['name'],
    methods: {
        closeModal(name) {
            let element = document.getElementById(name);
            element.classList.add("no-display");
        },
        submitPayment() {
            // Submit payment logic
        },
        goTo(url) {
            window.location.href = url;
        }
    },
};
</script>
  