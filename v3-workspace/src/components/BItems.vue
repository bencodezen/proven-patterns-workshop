<script>
import useFavoriteItems from '../stores/favoriteItems.js'

export default {
  setup() {
    const { favoriteItemStore } = useFavoriteItems

    return {
      favoriteItemStore
    }
  },
  computed: {
    onlyBItems() {
      return this.favoriteItemStore.favoriteItems.filter(
        item => item.indexOf('B') > -1
      )
    }
  }
}
</script>

<template>
  <div>
    <h1>B Item</h1>
    <ul>
      <li v-for="item in onlyBItems" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
