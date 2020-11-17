<template>
    <div class="v-main-wrapper">
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
   }
</style>