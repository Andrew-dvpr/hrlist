<template>
    <div class="v-main-wrapper">
        <!-- <p>{{title}}</p> -->
        <v-catalog/>
    </div>
</template>


<script>
import VCatalog from './V-catalog'

export default {
    name: 'V-main-wrapper',
    components: {
        VCatalog,
    }
}
</script>


<style>
   .v-main-wrapper {
       display: flex;
       flex-direction: row;
       justify-content: left;
       align-items: left;
       width: 100%;
       margin: 0 auto;
   }

</style>