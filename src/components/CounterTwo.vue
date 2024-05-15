<script setup lang="ts">
import { computed } from 'vue'
import useCountFactory from '@/composables/useCountFactory'

const countFactory = useCountFactory()

const tripleCount = computed(() => countFactory.count.value * 3)
</script>

<template>
  <div>
    <h1>Counter #2</h1>
    <p>Count: {{ countFactory.count }}</p>
    <p>Triple Count: {{ tripleCount }}</p>
    <button @click="countFactory.incrementCount">Increment</button>
  </div>
</template>

<style lang="scss" scoped></style>
