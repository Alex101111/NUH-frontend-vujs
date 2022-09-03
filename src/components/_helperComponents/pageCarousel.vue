<template>
  <div id="carouselComp">
          <div class="slogan-container">
      <div class="slogan"><h1>TIME IS MONEY... WE SAVE YOU BOTH !</h1></div>
    </div>
    <div class="tracking-container col-md-6">
            <h2 style="margin: 10px;">Tracking informations</h2>
      <form method="post" @submit.prevent="$store.dispatch('track',this.user)">
      <input class="form-control" type="text" placeholder="Enter your tracking number" v-model="user.tracking_number"  />
      <input class="form-control" type="text" placeholder="enter your surname" v-model="user.surname" />
      <div class="button-line">
        <button class="btn" type="submit">check status</button>
      </div>
      </form>
    </div>
    <swiper
      :autoplay="{ delay: 3000 }"
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
        :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="carousel1">
          <img class="img" src="../../assets/photos/carousel/1.jpg" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide
        ><img class="img" src="../../assets/photos/carousel/2.jpg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="img" src="../../assets/photos/carousel/3.jpg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="img" src="../../assets/photos/carousel/4.jpg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="img" src="../../assets/photos/carousel/5.jpg" alt=""
      /></swiper-slide>

      ...
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
  name: "pageCarousel",
  
    data() {
    return {
      user: {
        tracking_number: "",
        surname: "",
      },
      status: {},
    };
  },
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
#carouselComp {
  padding-top: 3%;
  background-color: #293e51;
  display: flex;
  justify-content: center;
  align-content: space-between;
}
.tracking-container {
  position: absolute;
  z-index: 7;
align-self: flex-end;
  width: 35%;
  background-color: #c6d5e27c;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin-bottom: 2%;
}
.slogan-container {
  position: absolute;
  z-index: 7;
  background-color: #c6d5e27c;
  text-align: center;
  margin-top: 10%;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  border-radius: 10px;
}

h2 {
text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: bolder;
}
h1{
  margin: 20px;
}
.button-line {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px;
}
input {
  border-radius: 10px;
  height: 40px;
  width: 97%;
  align-self: center;
  margin: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;

}
button {
  background-color: #001847;
  border-radius: 30px;
  color: white;
  width: 40%;
  font-size: 19px;
  height: 50px;
}
h6{
  font-size: 15px;
  color: red;
}
button:hover {
  background-color: #B5C8EC;

  color: #001847;

}
button:active {
  background-color: #B5C8EC;
  color: #001847;
  border-color:#001847 ;
  

}
.img {
  width: 100%;
  height: 70vh;

}

@media screen and (max-width: 768px) {
.img {
  width: 100%;
  height: 70vh;

}

.slogan-container {
  z-index: 7;
  background-color: #c6d5e27c;
  text-align: center;
  margin-top: 3%;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  border-radius: 10px;
}
.tracking-container {

  z-index: 7;
align-self: flex-end;
  background-color: #c6d5e27c;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin-bottom: 2%;
  width: 80%;
}
h2 {
text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: bolder;
}
input {
  border-radius: 10px;
  height: 30px;
  width:80%;
  align-self: center;
  margin: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
}
button {
  background-color: #001847;
  border-radius: 30px;
  color: white;
  width: 50%;
  font-size: 15px;
  height: 40px;
}
h6{
  font-size: 10px;
  color: red;
}

form{
    display: flex;
  flex-direction: column;
}
}


</style>