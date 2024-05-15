<script setup>
import * as Todo from '@/components/todo'
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <Todo.List>
      <Todo.Item></Todo.Item>
    </Todo.List>
  </div>
</template>

<style scoped></style>
