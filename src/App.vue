<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>&nbsp;
      <router-link to="/register">Register</router-link>
<hr>
    <router-view></router-view>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  data () {
    return{

    }
  },
  name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
