<template>
    <div class="v-main-wrapper">
        <!-- <p>{{title}}</p> -->
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



<style>
   .v-main-wrapper {
       display: flex;
       flex-direction: row;
       justify-content: left;
       align-items: left;
       max-width: 1200px;
       margin: 0 auto;
   }

</style>