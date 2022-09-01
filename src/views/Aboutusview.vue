<template>
  <div>
      <div class="container">  

        <h2>Who Are We ?</h2>
        <div class="row">
          <div class="col-lg-6">
            <img src="../assets/photos/WhoAreWe/Who-are-we.jpg" class="img-fluid" alt="Who-are-we">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3>A professional service compatible with international standards.</h3>
            <p class="fst-italic">
           We are one of the leading and professional Iraqi logistics compannies in the field of customs clearance, freught and transportation. 
           We have been and continue to provide services to the governlent depratements, government institutions, the private sector, foreign companies and continue to provide more and the best always,
           <br>
           <br>
           we still represent the leading Iraqi compant in the field of logistics and customs clearance and commercial agencies, 
           The Company is proud to be selected by a high-level technical team in terms of efficiancy, experience and professionalism, Our team's background ranges from the field of 
           administrators, economists, computer scientists, customs clearance experts, technicians in warehouse and yard management, heavt lift engineering, skilled staff in packing, loading and unloading, marine and ait cargo operators, and distribution, marketing and foreign trade.
            </p>
          </div>
        </div>

              <h2>Our Staff</h2>
             <div class="row staff">
          <div class="col-lg-6 staff">
            <img src="../assets/photos/WhoAreWe/staff.jpg" class="img-fluid" alt="staff">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3>Our company thrives with our staff.</h3>
            <p class="fst-italic">
            We provide an open, comprehensive and stimulating work environment for our employees, and we are confident that this will lead to committed and proffessional employees who are able to drive success through hard wordk.
            We believe that staff participation begins with a culture of employee freedom to epress their ideas at our company; we always support and promote an unprecedented level of openness that has changed our culture for the better.
            We always support and promote an unprecedented level of openness that has changed our culture for the better . Employees also have many opprtubities and forums to discuss issues with each other and with management and are encouraged to do so. 
            Through these interactions, The company is implemented a three-dimentional approach during the year towards a higher level of integration in its multiple business areas. In a country where people come from all over the world, we take advantage of these people's life 
            experiences to deal with the diversity of our clients. The company realizes that divercity is more than just employing different people Race, sex, age, physical abilities and personal philosophies,
            but it is about creating a corporate culture for the company culture welcomes, recognizes, respects, challanges and benefits from our differences.
            A logistics and commercial agency strives to create an integrated workplace by promoting maximal awareness, openness and acceprance of difference. 
            This understanding contributes to our culture of performance, 
            collective wisdom in decision making and ultimately help us communicate better with our clients 
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