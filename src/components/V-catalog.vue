<template>

  <div class="v-catalog">
    <nav class="blue darken-3">
      <a to="/" class="brand-logo" style="margin: 0 0 0 10px;">HR List</a> 
    </nav>  
    
    <div class="nav-wrapper  input-field">
      <input id="last_name" class="validate" type="text" v-model="searchValue">
      <label for="last_name">Search First Name</label>
      <button class="v-btn" @click="search(searchValue)"><i class="material-icons">search</i></button>
      <button class="v-btn"><i class="material-icons" @click="clearSearchField">cancel</i></button>
    </div>
       <v-select 
       :selected="selected"
       :options="titles"
       @select="sortByTitles" />
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
import VSelect from './V-select'

export default {
  name: 'V-catalog',
  components: {
    VCatalogItem,
    VSelect
    },
  props: {},
  
  data() {
    return {
      titles: [
        {name: 'All', value: 'ALL'},
        {name: 'Mr', value: 'Mr'},
        {name: 'Miss', value: 'Miss'},
        {name: 'Mrs', value: 'Mrs'},
        {name: 'Ms', value: 'Ms'},
        {name: 'Mademoiselle', value: 'Mademoiselle'}
      ],
      selected: 'All',
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
  sortByTitles(title) {
    this.sortedResults =[];
    let vm = this;
    this.RESULTS.map(function(item) {
      if (item.name.title === title.name) {
        vm.sortedResults.push(item)
      }
    })
    this.selected = title.name
  },
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
  .nav-wrapper {
    top: 10px;
    width: 80%;
    margin: 0 auto;
    display: flex;
  }
  .v-catalog {
    width: 90%;
    margin: 0 auto;
  }
  .v-btn {
    border-radius: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
</style>
