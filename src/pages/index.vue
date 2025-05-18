<script setup lang="ts">
import * as Todo from '@/components/todo'
</script>

<template>
  <div>
    <Todo.List :items="[1, 2, 3]">
      <Todo.Item>Item 1</Todo.Item>
    </Todo.List>
  </div>
</template>

<style scoped></style>
