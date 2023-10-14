<script setup>
import { computed } from "vue";

const props = defineProps({
  username: {
    type: String,
    required: true,
    default: "admin",
  },
  avatar: {
    type: String,
    default: null,
  },
  api: {
    type: String,
    default: "avataaars",
  },
});

const avatar = "https://cdn-icons-png.flaticon.com/512/6596/6596121.png";

const username = computed(() => props.username);
</script>

<template>
  <div>
    <img
      :src="avatar"
      :alt="username"
      class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
    />
    <slot />
  </div>
</template>
