<script setup>
import BaseLevel from "@/Components/BaseLevel.vue";
import BaseButtons from "@/Components/BaseButtons.vue";
import BaseButton from "@/Components/BaseButton.vue";
import { mdiEye, mdiTrashCan } from "@mdi/js";
</script>
<template>
    <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        <li class="" v-for="payment in payments">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/1028/1028137.png"
                        alt="Neil image">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {{ payment.total_payed }} | {{ payment.payment_method }} 
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {{ payment.student.user.name }} {{ new Date(payment.created_at).toLocaleDateString() }}
                    </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                        <BaseButton color="danger" :icon="mdiTrashCan" small @click="deleteStudent(payment.id)" />
                    </BaseButtons>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import axios from 'axios';

export default {
    props: ['payments'],
    data() {
        return {

        }
    },
    components: [],
    methods: {
        deleteStudent(studentId) {
           this.$emit('delete-student', studentId); // emit the event with student id
        },
    },
    mounted() {
    },
}
</script>