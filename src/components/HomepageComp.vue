<template>
  <div class="Services container">
 <div class="p-5 mb-4 bg-light rounded-3 become-a-member">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Become a member</h1>
        <p class="col-md-8 fs-4">with just a few steps, you be a memebr of our comunity and you will be able to make commands and keep track of your commands online with simple clicks .</p>
        <button class="btn btn-primary btn-lg" type="button">signup</button>
      </div>
    </div>
    <h2>Our Services</h2>
      <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">

          <h3 class="mb-0">Transportation</h3>
          <p class="card-text mb-auto">Our Companny is a public transport and logistics company of leading companies specialized in the filed of transport</p>
          <a href="#" class="stretched-link">Access Service</a>
        </div>
        <div class="col-auto d-none d-lg-block">
        <img src="../assets/photos/Homepage/Transport.jpg" class="bd-placeholder-img"  alt="">
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">Logistics</h3>
          <p class="mb-auto">Our company can offer you the best logistics service experience thanks to our multiple services like custom clearance, cargo shipping, and warehouses/ </p>
          <a href="#" class="stretched-link">Access Service</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img src="../assets/photos/Homepage/Logistics.jpg" class="bd-placeholder-img"  alt="">
        </div>
      </div>
    </div>
  </div>
<h2>Get a quote</h2>
  <div class="container photo-quote">
    <img src="../assets/photos/Homepage/getQuote.jpg" alt="" class="container img">
<div class="inside-img">
    <div>
    <h1 style="color:white">Need a Quote now ?</h1>
    <p style="color:white; font-size: x-large;">it's super easy to get a quote and make an order.<br>click here to access our service  </p>
    </div>
<button type="button" class="btn btn-primary">Get Quote</button>
</div>
  </div>
  <h2>Contact us </h2>
  </div>
</template>

<script>
export default {
name:"ServiceComp"
}
</script>

<style scoped>



.Services{
  padding-top: 100px;
}
.photo-quote{
    display: flex;
justify-content: center;

height: 500px;
}

.img{height: 500px;
position:absolute;
}

.inside-img{
    position: absolute;
    height: 500px;
align-items: center;
justify-content: space-around;
width: -moz-available;
display: flex;
}

.btn-primary{
    height: 100px;
    width: 200px;
}

.btn{ 
  background-color: #001847 !important;
}

.btn:hover{ 
 background-color: #B5C8EC !important; 
}

.btn:active {
  background-color: #B5C8EC;
  color: #001847;
  border-color:#001847 ;
  

}

.position-static{
  background-color: #d5e0f4;
}
.container-fluid{
    background-color: #d5e0f4;
}

.become-a-member{
    background-color: #d5e0f4 !important;
}

h2{
  text-align: center;
padding: 100px;
color: white;
font-family: "Montserrat", sans-serif;
}
</style>