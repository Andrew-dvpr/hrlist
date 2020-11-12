<template>
  <div class="v-catalog-item">
    <img src="" alt="">
   <p>Имя</p>
   <p>Фамилия</p>
   <p>Дата рождения</p>
   <button>Поиск</button>
  </div>
</template>



<script>


export default {
  name: 'V-catalog-item',
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>



<style lang="scss">
  .v-catalog-item {
  &__image {
    width: 100px;
    height: 200px;
  }
  }
</style>
