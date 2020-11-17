<template>
  <div class="v-catalog-item">
    <ul>
      <li>
        <img :src="result_data.picture.large" alt="img">
        <span><h3>{{result_data.name.title + '. ' + result_data.name.first + ' ' + result_data.name.last + ', '}}</h3></span>
        <span style="margin: 0 2px 0 auto;">{{'Birthday: ' + new Date(result_data.dob.date).toLocaleDateString()}}<br>{{result_data.login.username}}</span>
        <!-- <span>{{result_data.login.username}}</span> -->
      </li>
    </ul>
  </div>
</template>


<script>

export default {
  name: 'V-catalog-item',
  components: {},
  props: {
    result_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>


<style>
  .v-catalog-item {
    width:100%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 2px;
    
  }
  li {
    display: flex;
    list-style-type: none;
    text-align: left;
  }
  span {
    
    margin: auto 5px auto 5px;
  }
</style>
