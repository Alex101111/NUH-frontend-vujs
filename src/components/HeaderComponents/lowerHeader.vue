<template>
  <div id="lowerHeaderComp" >
    <div  v-show="isMobile()" class="Mobile" :class="{ active: isActive }">
      <div class="icon-test">
                  <Icon
        @click="isActive = !isActive ; "
       :class="{ rotate: isActive }  "
        icon="ant-design:menu-fold-outlined"
        width="40"
        class="burger-icon"
         color="white" 
          :rotate="1"
      />
      </div>
      <div class="menu-slide">
              <ul class="mobileUl">
       <router-link to="/" style="text-decoration: none ; color: #4f4f4f; padding-top: 20px;"><li>Home</li> </router-link>
            <router-link to="/getquote" style="text-decoration: none ; color: #4f4f4f; padding-top: 20px;"> <li >Get quote</li></router-link>
        <li @click="showDeopService = !showDeopService" style="color:#001847">Services <Icon icon="bx:down-arrow-alt"  /></li>
        <service-drop-down-comp :items="services" v-if="showDeopService && isActive" />
       <router-link to="/aboutus" style="text-decoration: none ; color: #4f4f4f; padding-top: 20px;"> <li >About us </li></router-link>
       <a href="#contact-us" style="text-decoration: none ; color: #4f4f4f; padding-top: 20px;"> <li> Contact Us</li></a>
      </ul>

      </div>

    </div>

    <nav v-show="!isMobile()">
      <ul class="nav-lower">
        <li> <router-link  to="/" style="text-decoration: none ; color: #4f4f4f; padding-top: 20px;">Home</router-link></li>
       <span></span> <li @mouseover="isOpen = !isOpen" @click="isOpen = !isOpen"  >
          Services <Icon icon="bx:down-arrow-alt" />
        </li>
        <service-drop-down-comp
          :items="services"
          v-if="isOpen"
          class="service"
          @mouseleave="isOpen = !isOpen"
           
        />
        <li>
          <router-link to="/aboutus" style="text-decoration: none ; color: #4f4f4f;"> About us  </router-link>
         
        </li>

        <li><router-link to= "/getquote" style="text-decoration: none ; color: #4f4f4f;"> Get quote </router-link></li>
               <a href="#contact-us" style="text-decoration: none ; color: #4f4f4f; padding-top: 20px;"> <li> Contact Us</li></a>
      </ul>
    </nav>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

import ServiceDropDownComp from "../_helperComponents/ServiceDropDownComp.vue"
export default {
  name: "lowerHeader",
  components: {
    Icon,

    ServiceDropDownComp,
  },
  data() {
    return {
      isOpen: false,
      about: false,
      isActive: false,
      showDeopService: false,
      showDeopAbout: false,
      services: [
        { title: "Transport", router: "transport" },
        { title: "Logistics", router: "logistics" },
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
  font-weight: bold;
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

.nav-lower{
  margin-top: 10px;
}
@media screen and (max-width: 768px)  {
  #lowerHeaderComp {
    height: 5%;
    position: relative;
    z-index: 8;
  }

li{
    text-decoration: none !important;
}

  .active {
    transform: translateY(600px);
    transition: all 1s ease-out;
    background-color: #001847;
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
        overflow: hidden;
       

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
  color:#293e51 !important;
  font-weight: bolder;
}

}
</style>