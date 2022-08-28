<template>
  <div id="home">
   <page-carousel/>
   <services-component/>
   <contact-form/>
  </div>


</template>

<script>
import ServicesComponent from '@/components/ServicesComponent.vue'
import PageCarousel from '../components/_helperComponents/pageCarousel.vue'
import ContactForm from '@/components/_helperComponents/ContactForm.vue'


// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    PageCarousel,
    ServicesComponent,
    ContactForm 

  } 
}
</script>

<style scoped>
#home{position: relative;}



</style>
