<template>
  <div id="app">
    <header>
      <h1>Список работников</h1>
    </header>
    <v-main-wrapper/>
  </div>
</template>





<script>
import vMainWrapper from './components/V-main-wrapper'

export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>







<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
