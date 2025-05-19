<script setup lang="ts">
import { addIngredient, ingredientList, useRamenList } from '@/composables/useKitchen'
</script>

<template>
  <pre>{{ useRamenList() }}</pre>
  <button @click="addIngredient('Ginger')">Add ginger</button>
  <table>
    <thead>
      <th>Name</th>
    </thead>
    <tbody>
      <tr v-for="(ingredient, index) in ingredientList" :key="index">
        <td>
          <pre>{{ ingredient }}</pre>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped></style>
