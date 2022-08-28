<template>
  <div>
      <div class="container">  

        <h2>Who Are We ?</h2>
        <div class="row">
          <div class="col-lg-6">
            <img src="../assets/photos/Transport/Transport2.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3>A professional service compatible with international standards.</h3>
            <p class="fst-italic">
            We conduct road surveys and identify potential obstacles and dangers before any particular movement while dealing with large size, weight and various dimentions of goods

                Our company is distinguished by it's expertise by relying on professional experties that applies the highest safety standards.
                in addition to providing competitive services price. Most importantly, our customers confidence in the company's capabilities .
            </p>
          </div>
        </div>

              <h2>Our Staff</h2>
             <div class="row staff">
          <div class="col-lg-6">
            <img src="../assets/photos/Transport/Transport2.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3>A professional service compatible with international standards.</h3>
            <p class="fst-italic">
            We conduct road surveys and identify potential obstacles and dangers before any particular movement while dealing with large size, weight and various dimentions of goods
   
                Our company is distinguished by it's expertise by relying on professional experties that applies the highest safety standards.
                in addition to providing competitive services price. Most importantly, our customers confidence in the company's capabilities .
            </p>
          </div>
        </div>

      </div>
                <h2>Contact Us</h2>
<contact-form/>



  </div>
</template>

<script>

import ContactForm from '@/components/_helperComponents/ContactForm.vue'
export default {
name: "AboutUs",
components:{
    ContactForm
}
}
</script>

ContactForm
<style scoped>

.staff{
    display: flex;
    flex-direction: row-reverse;
}


h2{
  text-align: center;
padding: 100px;
}
</style>