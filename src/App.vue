<template>
    <upper-header />
    <lower-header />
   <router-view/>
</template>

<script>
import LowerHeader from './components/HeaderComponents/lowerHeader.vue';
import UpperHeader from "./components/HeaderComponents/upperHeader.vue";



export default {
  components: {
    UpperHeader,
    LowerHeader,



  },
};
</script>

<style>
#app {
  height: 100%;
}

html, body{
  margin: 0;
  padding: 0;
  height: 100%;
}

</style>
