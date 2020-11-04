<template>
  <h1>Counter</h1>
  <p>{{ currentCount }}</p>
  <button @click="incrementCount">Increment</button>
  <button @click="decrementCount">Decrement</button>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    currentCount: 0
  }),
  methods: {
    incrementCount() {
      this.currentCount += 1
    },
    decrementCount() {
      this.currentCount -= 1
    }
  }
}
</script>

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
