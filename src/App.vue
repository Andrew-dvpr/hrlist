<template>
  <div id="app">
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
@import "~materialize-css/dist/css/materialize.min.css";
.search-bar {
    width: 80%;
    margin: 0 auto;
  }
#app {
  width: 100%;
    margin: 0 auto;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
