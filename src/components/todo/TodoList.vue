<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <ul>
    <slot />
  </ul>
</template>

<style lang="scss" scoped></style>
