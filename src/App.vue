<template>
    <upper-header class="upper" />
    <lower-header class="lower" />
   <router-view class="content"/>
  <footer-comp/>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import LowerHeader from './components/HeaderComponents/lowerHeader.vue';
import UpperHeader from "./components/HeaderComponents/upperHeader.vue";



export default {
  components: {
    UpperHeader,
    LowerHeader,
    FooterComp,



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
 
 .content{
  padding-bottom: 100px;
 }

</style>
