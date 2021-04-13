<script>
import BItems from './components/BItems.vue'
import FavoriteItems from './components/FavoriteItems.vue'

export default {
  components: {
    BItems,
    FavoriteItems
  }
}
</script>

<template>
  <FavoriteItems />
  <BItems />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
