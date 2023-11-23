<template>
    <div class="bg-black-2 text-white shadow-lg rounded-lg overflow-hidden main-font slide-in-left">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center text-gray-300 yellow-qenqo-text ">{{ name }}</div>
            <p class="text-gray-500 text-base text-center">
                {{ description }}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2 text-center">
            <span
                class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2 secondary-font">
                {{ price }}€
            </span>
            <span
                class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-purple-300 mr-2 mb-2 secondary-font">
                {{ sessions }} Sesiones
            </span>
        </div>
        <div class="flex justify-center px-6 py-4">
            <button @click="openModal(name)"
                class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
                Comprar
            </button>
        </div>
    </div>
    <PayModal :name="name" />
</template>
<script setup>
import PayModal from './PayModal.vue';
</script>
<script>
export default {
    props: {
        name: String,
        price: Number,
        sessions: [Number, String],
        description: String,
    },
    methods: {
        openModal() {
            let element = document.getElementById(this.name);
            element.classList.remove("no-display");
        },
        submitPayment() {
            // Submit payment logic
        },
    },
};
</script>
  
<style scoped>
/* Aquí puede ir el estilo específico para PricingCard si es necesario */
.bg-black-2 {
    background-color: #121212 !important;
}
</style>