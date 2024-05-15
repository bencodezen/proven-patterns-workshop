<script setup lang="ts">
import { computed } from 'vue'
import useCountFactory from '@/composables/useCountFactory'

const countFactory = useCountFactory()

const doubleCount = computed(() => countFactory.count.value * 2)
</script>

<template>
  <div>
    <h1>Counter #1</h1>
    <p>Count: {{ countFactory.count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="countFactory.incrementCount">Increment</button>
  </div>
</template>

<style lang="scss" scoped></style>
