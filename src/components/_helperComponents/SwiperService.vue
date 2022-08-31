<template>
  <div>
    <swiper

      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="row container">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="card">
                <div class="test"></div>
              <img
                src="../../assets/photos/Transport/Shipping.jpg"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="card">
                   <div class="test"></div>
              <img
                src="../../assets/photos/Transport/transportation.jpg"
                class="card-img-top"
                alt="..."
              />
     
    
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="card">
                   <div class="test"></div>
              <img
                src="../../assets/photos/Transport/Cargo.jpg"
                class="card-img-top"
                alt="..."
              />
      
        
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="card">
                   <div class="test"></div>
              <img
                src="../../assets/photos/Transport/Shipping.jpg"
                class="card-img-top"
                alt="..."
              />
    
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="card">
              <img
                src="../../assets/photos/Transport/transportation.jpg"
                class="card-img-top"
                alt="..."
              />
     
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="card">
              <img
                src="../../assets/photos/Transport/Cargo.jpg"
                class="card-img-top"
                alt="..."
              />
     
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>

<style scoped>


.card:hover{
        
         color: red;
         background-color: red;


}

.test:hover{
         transform: translateY(-100%);
         color: red;
         background-color: red;
         opacity: 1;
           transition: transform .3s ease;
      
    z-index: 9;
}



</style>