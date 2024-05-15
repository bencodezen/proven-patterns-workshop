<script setup lang="ts">
import { computed } from 'vue'
import { count, incrementCount } from '@/composables/useCountSingleton'

const doubleCount = computed(() => count.value * 2)
</script>

<template>
  <div>
    <h1>Counter #1</h1>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<style lang="scss" scoped></style>
