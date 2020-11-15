<template>
 <nav class="blue darken-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">HR List</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link tag="li" to="/" exact active-class="active"
          ><a href="#"
          ><i class="material-icons left"
          >search</i
          >Search</a>
          </router-link>
        <!-- <router-link tag="li" to="/" exact active-class="active"
          ><a href="#"
          ><i class="material-icons right"
          >view_module</i
          >Prof</a
          >
        </router-link> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'V-header',
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

<style lang="css" scoped></style>
