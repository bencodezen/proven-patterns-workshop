<script setup lang="ts">
import DataTable from '@/components/DataTable.vue'
import {
  addIngredient,
  ingredientList,
  useRamenList,
  evenIngredients,
} from '@/composables/useKitchen'
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <button @click="addIngredient('Egg')">Egg</button>
    <pre>{{ useRamenList() }}</pre>
    <h2>Full</h2>
    <pre>{{ ingredientList }}</pre>
    <h2>Even</h2>
    <pre>{{ evenIngredients }}</pre>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <DataTable />
  </div>
</template>

<style scoped></style>
