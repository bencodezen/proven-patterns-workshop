<script setup lang="ts">
import { ref } from 'vue'

const userColor = ref('#fff')
</script>

<template>
  <div>
    <h1 class="title">Dynamic Color</h1>
    <input type="color" v-model="userColor" />
    <p>{{ userColor }}</p>
  </div>
</template>

<style scoped>
.title {
  color: v-bind(userColor);
}
</style>
