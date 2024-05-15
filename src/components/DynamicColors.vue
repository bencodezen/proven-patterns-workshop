<script setup lang="ts">
import { ref } from 'vue'

const textColor = ref('#000000')
</script>

<template>
  <h1 class="title">Hello VueConfUS 2024!</h1>
  <input type="color" v-model="textColor" />
</template>

<style lang="scss" scoped>
.title {
  color: v-bind(textColor);
}
</style>
