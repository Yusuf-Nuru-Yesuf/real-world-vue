<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue'

defineProps(['event'])
const router = useRouter()

const register = () => {
  // If resgistration api is successful, redirect to event details
  router.push({ name: 'EventDetails' })
}
</script>

<template>
  <p>Register for event here</p>
  <button @click="register">Regster Me!</button>
</template>

