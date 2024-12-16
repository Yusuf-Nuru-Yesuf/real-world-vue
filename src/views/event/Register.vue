<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router';
import { defineProps, inject } from 'vue'

const event = defineProps(['event'])
const router = useRouter()
const GStore = inject('GStore')
const register = () => {
  // If resgistration api is successful, redirect to event details
  GStore.flashMessage = 'You are successfully registered for' + event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({ name: 'EventDetails' })
}
</script>

<template>
  <p>Register for event here</p>
  <button @click="register">Regster Me!</button>
</template>

