<template>
    <div class="v-main-wrapper">
        <p>{{title}}</p>
        <v-catalog/>
        <v-cart/>
    </div>
</template>




<script>
import VCatalog from './V-catalog'

import VCart from './V-cart'


export default {
    name: 'V-main-wrapper',
    components: {
        VCatalog,
        VCart
    },
    props: {},
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
        console.log('I am alive')
    },
}
</script>



<style lang="scss">
   .v-main-wrapper {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       max-width: 900px;
       margin: 0 auto;
   }

</style>