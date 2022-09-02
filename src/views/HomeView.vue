<template>
  <div id="home">
   <page-carousel/>
<home-page-compnent/>
   <contact-form/>
  </div>


</template>

<script>
import PageCarousel from '../components/_helperComponents/pageCarousel.vue'
import ContactForm from '@/components/ContactForm.vue'
import HomePageCompnent from '@/components/HomepageComp.vue'


// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    PageCarousel,
    ContactForm,
    HomePageCompnent 

  } 
}
</script>

<style scoped>
#home{position: relative;


;}
@media screen and (max-width: 768px) {


  #home{
    padding-top: 35%;
  }
}



</style>
