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
    <CardBoxModal :title="'Pagar'" :hasCancel="true" class="bg-gray-500 slide-in-top my-2">
        Faltan S/{{ activePlan.total - activePlan.total_payed }}
        <FormField label="Alumno">
            <FormControl :icon="mdiPlusCircle" type="select"
                :options="active_students.map(student => ({ label: student.name, value: student.id }))"
                v-model="selectedStudent" />
        </FormField>
        <FormField label="Pago">
            <FormControl :icon="mdiPlusCircle" type="select"
                :options="payment_methods.map(payment_method => ({ label: payment_method.name, value: payment_method.name }))"
                v-model="selectedPaymentMethod" />
            <FormControl :icon="mdiPlusCircle" placeholder="Total a Pagar" v-model="payment.total_payed" type="number" />
        </FormField>
        <BaseButton :icon="mdiPlusCircle" label="Pagar" class="bg-green-300" target="_blank" rounded-full color=""
            @click="addPayment" />
    </CardBoxModal>
</template>

<script>
import axios from 'axios';

export default {
    props: ['activePlan'],
    data() {
        return {
            active_students: [],
            payment_methods: [],
            payment: {
                payment_method: '',
                total_payed: '',
                student_id: '',
                active_plan_id: this.activePlan.id,
            },
            selectedPaymentMethod: [],
            selectedStudent: [],
        }
    },
    components: [],
    methods: {
        fetchActivePlanStudents() {
            axios.get('/api/activePlans/' + this.activePlan.id + '/students')
                .then(response => {
                    this.active_students = response.data;
                    console.dir(this.active_students);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchPaymentMethods() {
            axios.get('/api/getPaymentMethods')
                .then(response => {
                    this.payment_methods = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        async addPayment() {
            this.payment.payment_method = this.selectedPaymentMethod.value;
            this.payment.student_id = this.selectedStudent.value;
            try {
                //const data = { active_plan_id: this.activePlan.id, student_id: student };
                await axios.post('/api/activePlanPayment/', this.payment);
                this.$emit('payment-added')
            } catch (error) {
                console.log("Add payment");
                console.error(error);
            }
        }
    },
    mounted() {
        this.fetchActivePlanStudents();
        this.fetchPaymentMethods();
    },
}
</script>
