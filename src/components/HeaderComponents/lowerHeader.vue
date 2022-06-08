<template>
  <div id="lowerHeaderComp">
    <div  v-show="isMobile()" class="Mobile" :class="{ active: isActive } ">
      <Icon
        @click="isActive = !isActive"
        icon="ant-design:menu-fold-outlined"
        width="40"
      />
      <div class="menu-slide">
              <ul class="mobileUl">
        <li>Home</li>
        <li @click="showDeopService = !showDeopService">Services</li>
        <drop-down-comp :items="services" v-if="showDeopService" />
        <li @click="showDeopAbout = !showDeopAbout">About us</li>
        <drop-down-comp :items="aboutUs" v-if="showDeopAbout" />
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
  },
};
</script>

<style scoped>
#lowerHeaderComp {
  height: 5%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
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
    
  }


  .active {
    transform: translateX(200px);
    transition: all 1s ease-out;
  }

  .menu-slide {
    transform: translateX(-200px);
  background-color: #b5c8ec91 ;
  position: absolute;
  }
  .mobileUl{
    display: grid;
    list-style-type: none;
  }
  .Mobile{
      transition: all 1s ease-out;
  }
.mobileUl li {
  padding-top: 10%;
  white-space: nowrap;
  margin: 5px;
}

li:active {
  background-color: #001847;
}
}
</style>