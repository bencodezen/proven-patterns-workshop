<script setup lang="ts">
import { computed, ref } from 'vue'

const list = ref([
  { id: 1, visible: true },
  { id: 2, visible: false },
  { id: 3, visible: true },
])

const visibleList = computed(() => {
  return list.value.filter((item) => item.visible)
})
</script>

<template>
  <ul>
    <li v-for="item in visibleList" :key="item.id">
      <span>{{ item.id }}</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
