<script setup lang="ts">
import { computed } from 'vue'
import { count, incrementCount } from '@/composables/useCountSingleton'

const tripleCount = computed(() => count.value * 3)
</script>

<template>
  <div>
    <h1>Counter #2</h1>
    <p>Count: {{ count }}</p>
    <p>Triple Count: {{ tripleCount }}</p>
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<style lang="scss" scoped></style>
