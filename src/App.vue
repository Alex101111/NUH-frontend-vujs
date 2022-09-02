<template>
<div class="header">
    <upper-header class="upper" />
    <lower-header class="lower" />
   </div>
   <router-view class="routerView"/>
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
    color:#001847 !important;

  font-weight: 500;
}

html, body{
  margin: 0;
  padding: 0;
  height: 100%;

}

.header{
  position: fixed;
  z-index: 9;
width: 100%;
}



@media (max-width: 767px) {
#app {
  height: 100%;
    color:#001847 !important;
      font-size: none;
  font-weight: 500;
}

.header{
  position: fixed;
  z-index: 9;
}
.routerView{
  padding-top: 9%;
}

}


</style>
