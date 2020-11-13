<template>
  <div class="v-catalog">
    <!-- <h1>Каталог</h1> -->
    <div class="v-search-panel">
      <input class="v-input-field" placeholder="First Name or Last Name" type="text">
      <button class="v-btn">Поиск</button>
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
    }
  },
 
computed: {
  ...mapGetters([
    'RESULTS'
  ]),
},
methods: {
    ...mapActions([
      'GET_RESULTS_FROM_API'
    ]),
  },
   mounted() {
     this.GET_RESULTS_FROM_API()
   }
}
</script>



<style>
.v-search-panel {
  background-color: #e0e0e046;
  top: 0px;
  left: 0px;
  width: 100%;
  position: fixed;
  text-align: right;
}
  .v-catalog {
    max-height: 500px;
  }
  .v-input-field {
    color: darkgray;
    font-size: 110%;
    width: 320px;
    padding: 7px 20px 8px 20px;
    border: 1px solid #e0e0e0;
  }
  .v-btn {
    border: 1px solid #e0e0e0;
    margin: 10px 10px 10px 0px;
    padding: 10px;
  }
</style>
