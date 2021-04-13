<script>
import useFavoriteItems from '../stores/favoriteItems.js'

export default {
  setup() {
    const { addNewItemToList, favoriteItemStore } = useFavoriteItems

    return {
      addNewItemToList,
      favoriteItemStore
    }
  }
}
</script>

<template>
  <div class="home">
    <h1>List of Favorite Items</h1>
    <input
      type="text"
      placeholder="Enter item"
      @keyup.enter="addNewItemToList"
    />
    <ul>
      <li v-for="item in favoriteItemStore.favoriteItems" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
