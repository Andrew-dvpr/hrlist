<template>
  <div class="v-catalog">
    <nav class="blue darken-3">
      <a to="/" class="brand-logo" style="margin: 0 0 0 10px;">HR List</a> 
    </nav>  
    <div class="input-field">
      <input id="last_name" class="validate" type="text" v-model="searchValue">
      <label for="last_name">Search First Name</label>
      <button class="v-btn" @click="search(searchValue)"><i class="material-icons">search</i></button>
      <button class="v-btn"><i class="material-icons" @click="clearSearchField">cancel</i></button>
    </div>
     
    <v-catalog-item
      v-for="result in filteredResults"
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
     
      sortedResults: [],
      searchValue: ''
    }
  },
 
computed: {
  ...mapGetters([
    'RESULTS',
    'SEARCH_VALUE'
  ]),
  filteredResults() {
    if (this.sortedResults.length) {
      return this.sortedResults
    } else {
      return this.RESULTS
    }
  }
},

methods: {
  ...mapActions([
    'GET_RESULTS_FROM_API',
    'GET_SEARCH_VALUE_TO_VUEX'
  ]),
  
  search(value) {
    this.GET_SEARCH_VALUE_TO_VUEX(value);
  },
  clearSearchField() {
    this.searchValue = '';
    this.GET_SEARCH_VALUE_TO_VUEX();
  },
  sortResultsBySearchValue(value) {
    this.sortedResults = [...this.RESULTS];
    if (value) {
    this.sortedResults = this.sortedResults.filter(function (item) {
      return item.name.first.toLowerCase().includes(value.toLowerCase())
    })
    } else {
      this.sortedResults = this.RESULTS;
    }
  }
},

watch: {
  SEARCH_VALUE() {
    this.sortResultsBySearchValue(this.SEARCH_VALUE);
}
},

mounted() {
  this.GET_RESULTS_FROM_API()
    .then((response) => {
      if (response.data) {
        this.sortResultsBySearchValue(this.SEARCH_VALUE)
      }
    })
}
}
</script>


<style>
nav {
  position: fixed;
  top: 0;
  left: 0;
}
.v-catalog {
   width: 90%;
   margin: 0 auto;
}
.v-btn {
  border-radius: 20px;
  border: none;
  background-color: #e0e0e0;
  margin: 2px;
  padding: 2px 18px;
  cursor: pointer;
}
  
</style>
