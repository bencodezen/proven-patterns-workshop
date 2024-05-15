<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
// export default {
//   data() {
//     return {
//       myBook: {}
//     }
//   }
// }

type LibraryBook = {
  title: string
  checkedOut: boolean
  quantity: number
}

type ThemePreference = 'dark' | 'light' | 'nes'

const themePreference = ref<ThemePreference>('dark')
const themePreference2: Ref<ThemePreference> = ref()

const myBook = ref<LibraryBook>({} as LibraryBook)

myBook.value.newProperty = 'test'
themePreference2.value = 'dark'
</script>

<template>
  <h1>Library Book</h1>
</template>

<style lang="scss" scoped></style>
