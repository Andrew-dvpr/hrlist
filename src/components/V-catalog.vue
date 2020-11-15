<template>

  <div class="v-catalog">
    <nav class="blue darken-3">
      <a to="/" class="brand-logo" style="margin: 0 0 0 10px;">HR List</a>
    </nav>  

    <div class="nav-wrapper  input-field">
      <input id="last_name" class="validate" type="text" v-model="searchValue">
      <label for="last_name">First Name or Last Name</label>
      <button class="v-btn" @click="search(searchValue)"><i class="material-icons">search</i></button>
    </div>
       
    <v-catalog-item
      v-for="result in RESULTS"
        :key="result.login.md5"
        :result_data="result"
    />
   
  </div>

</template>



<script>
import VCatalogItem from './V-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'V-catalog',
  components: {
    VCatalogItem
    },
  props: {},
  
  data() {
    return {
      searchValue: ''
    }
  },
 
computed: {
  ...mapGetters([
    'RESULTS',
    'SEARCH_VALUE'
  ]),
},

methods: {
  ...mapActions([
    'GET_RESULTS_FROM_API',
    'GET_SEARCH_VALUE_TO_VUEX'
  ]),
  search(value) {
    this.GET_SEARCH_VALUE_TO_VUEX(value);
  },
  sortResultsBySearchValue(value) {
    this.results = this.results.filter(function (item) {
      return item.name.first.toLowerCase().includes(value.toLowerCase())
    })
  }
},


watch: {
  SEARCH_VALUE() {
    this.sortResultsBySearchValue(this.SEARCH_VALUE);
}
},

mounted() {
  this.GET_RESULTS_FROM_API()
}
}
</script>



<style>
nav {
  position: fixed;
  top: 0;
  left: 0;
}
  .nav-wrapper {
    top: 10px;
    width: 80%;
    margin: 0 auto;
    display: flex;
  }
  .v-catalog {
    max-width: 80%;
    margin: 0 auto;
  }
  .v-btn {
    border-radius: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
</style>
