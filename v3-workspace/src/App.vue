<template>
  <h1>Counter</h1>
  <p>{{ currentCount }}</p>
  <p>{{ doubleCount }}</p>
  <button @click="incrementCount2">Increment</button>
  <button @click="decrementCount">Decrement</button>
</template>

<script>
import createCounter from './features/createCounter.js'

export default {
  name: 'App',
  setup() {
    const { currentCount, doubleCount, incrementCount2 } = createCounter

    return {
      currentCount,
      doubleCount,
      incrementCount2
    }
  },
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
