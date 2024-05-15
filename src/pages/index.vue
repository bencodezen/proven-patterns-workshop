<script setup>
import * as Todo from '@/components/todo'
import CounterOne from '@/components/CounterOne.vue'
import CounterTwo from '@/components/CounterTwo.vue'
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <Todo.List>
      <Todo.Item></Todo.Item>
    </Todo.List>
    <div style="display: flex">
      <CounterOne style="margin-right: 50px" />
      <CounterTwo />
    </div>
  </div>
</template>

<style scoped></style>
