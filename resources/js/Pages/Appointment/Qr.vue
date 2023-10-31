<template>
    <div class="flex justify-center">
        <qrcode-vue :value="text"    />
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
    components: {
        QrcodeVue
    },
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>
