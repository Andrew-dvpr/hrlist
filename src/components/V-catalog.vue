<template>
  <div class="v-catalog">
    <h1>Каталог</h1>
    <v-catalog-item/>
  </div>
</template>



<script>
import VCatalogItem from './V-catalog-item'

export default {
  name: 'V-catalog',
  components: {
    VCatalogItem
    },
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

</style>
