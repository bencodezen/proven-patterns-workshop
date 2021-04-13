<template>
  <div class="home">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DynamicHeading :level="1">Hello VueConf.US 2021!</DynamicHeading>
    <HelloWorld msg="Welcome to Your Vue.js 3 App" />
  </div>
</template>

<script>
import DynamicHeading from './components/DynamicHeading.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    DynamicHeading,
    HelloWorld
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
