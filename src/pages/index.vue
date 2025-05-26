<script setup lang="ts">
import { ref } from 'vue'
import DataTable from '@/components/DataTable.vue'
import {
  addIngredient,
  ingredientList,
  useRamenList,
  evenIngredients,
} from '@/composables/useKitchen'

const newIngredient = ref('')

function addRamenIngredient() {
  addIngredient(newIngredient)
}
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <input type="text" v-model="newIngredient" />
    <button @click="addIngredient(newIngredient)">Egg</button>
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
