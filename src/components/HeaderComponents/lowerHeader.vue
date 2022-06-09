<template>
  <div id="lowerHeaderComp" >
    <div  v-show="isMobile()" class="Mobile" :class="{ active: isActive }  ">
      <Icon
        @click="isActive = !isActive ; "
       :class="{ rotate: isActive }  "
        icon="ant-design:menu-fold-outlined"
        width="40"
        class="burger-icon"
         color="white" 
          :rotate="1"
      />
      <div class="menu-slide">
              <ul class="mobileUl">
        <li>Home</li>
        <li @click="showDeopService = !showDeopService" style="color:#001847">Services <Icon icon="bx:down-arrow-alt"  /></li>
        <drop-down-comp :items="services" v-if="showDeopService && isActive" />
        <li @click="showDeopAbout = !showDeopAbout" style="color:#001847">About us <Icon icon="bx:down-arrow-alt" /></li>
        <drop-down-comp :items="aboutUs" v-if="showDeopAbout  && isActive" />
        <li>Contact Us</li>
      </ul>
      </div>

    </div>

    <nav v-show="!isMobile()">
      <ul>
        <li>Home</li>
        <li @mouseover="isOpen = !isOpen">
          Services <Icon icon="bx:down-arrow-alt" />
        </li>
        <drop-down-comp
          :items="services"
          v-if="isOpen"
          class="service"
          @mouseleave="isOpen = !isOpen"
        />
        <li @mouseover="about = !about">
          About us <Icon icon="bx:down-arrow-alt" />
        </li>
        <drop-down-comp
          :items="aboutUs"
          v-if="about"
          class="about"
          @mouseleave="about = !about"
        />
        <li>Get quote</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import DropDownComp from "../_helperComponents/DropDownComp.vue";
export default {
  name: "lowerHeader",
  components: {
    Icon,
    DropDownComp,
  },
  data() {
    return {
      isOpen: false,
      about: false,
      isActive: false,
      showDeopService: false,
      showDeopAbout: false,
      services: [
        { title: "Transport", router: "signup" },
        { title: "Logistics", router: "signup" },
      ],
      aboutUs: [
        { title: "Who are we", router: "signup" },
        { title: "Our staff", router: "signup" },
        { title: "Our blog", router: "blog" },
      ],
    };
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
    // closingFunc(isActive){

    // }
   
  },
};
</script>

<style scoped>
#lowerHeaderComp {
  height: 5%;
  background-color: #b5c8ec91;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}

li {
  display: inline;
  margin-left: 5%;
  font-family: "Montserrat", sans-serif;
  font-size: 19px;

  color: #4f4f4f;
  border-bottom: 1px solid transparent;
  border-bottom-width: 2px;
}

.service {
  background-color: #b5c8ec91;
  position: absolute;
  list-style-type: none;
  left: 14%;
  margin-top: 10px;
}
.about {
  background-color: #b5c8ec91;
  position: absolute;
  list-style-type: none;
  left: 25%;
  margin-top: 10px;
}
@media screen and (max-width: 768px) {
  #lowerHeaderComp {
    height: 5%;
    position: relative;
    z-index: 8;
  }



  .active {
    transform: translateY(600px);
    transition: all 1s ease-out;
    background-color: #001847a4;



  }

  .rotate{
transform: rotate(-90deg);
    transition: all 1s ease-out;
  }
  .menu-slide {
    transform: translateY(-600px);
  background-color: #b5c8ecd7 ;
  position: absolute;
  display: flex;
    justify-content:center;
    width: 100%;
        overflow: hidden

  }
  .mobileUl{
    display: grid;
    list-style-type: none;
    padding-top: 10px;
  }
  .Mobile{
      transition: all 1s ease-out;
      display: flex;
      justify-content: flex-end;
  }
.mobileUl li {
  padding-top: 10%;
  white-space: nowrap;
  margin: 5px;
}

li:active {
  background-color: #001847;
}
.burger-icon{
  z-index: 9;
}

}
</style>