<template>
  <div id="home">
   <page-carousel/>
  </div>


</template>

<script>
import PageCarousel from '../components/_helperComponents/pageCarousel.vue'


// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    PageCarousel 

  } 
}
</script>

<style scoped>
#home{position: relative;}



</style>
