<template>
  <div id="upperHeaderComp">
    <div>
      <img class="logo-header" src="../../assets/photos/nuhLogo.png" alt="" />
    </div>
    <div class="Registeration-nav">
      <ul class="media-icons">
        <li>
          <Icon
            icon="akar-icons:facebook-fill"
            width="40"
            color="white"
            class="icon"
          />
        </li>
        <li>
          <Icon
            icon="akar-icons:instagram-fill"
            width="40"
            color="white"
            class="icon"
          />
        </li>
        <li>
          <Icon
            icon="icon-park-outline:twitter"
            color="white"
            width="40"
            class="icon"
          />
        </li>
        <li class="test">
          <Icon
            icon="bx:user-circle"
            color="white"
            width="40"
            height="60"
            @click="isOpen = !isOpen"
          />
        </li>
      </ul>
      <drop-down-comp :items="userNav" v-if="isOpen"  @mouseleave="isOpen = !isOpen" class="comp"/>
    </div>
  </div>
</template>

<script>
import DropDownComp from "../DropDownComp.vue";
import { Icon } from "@iconify/vue";

export default {
  name: "upperHeader",
  components: {
    Icon,

    DropDownComp,
  },
  data() {
    return {
        isOpen : false,

          userNav: [
        {
          title: "Sign up",
          router: "/signUp",
          name: "signUp",
        },
        {
          title: "Sign in",
          router: "/login",
           name: "signin",
        },
      ],
    };
  },
};
</script>

<style scoped>
#upperHeaderComp {
  background-color: #293e51;
  height: 18%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  display: inline;
}

.logo-header {
  margin: 10px;
    width: 300px;
  height: 50px;
}

.Registeration-nav {
  display: flex;
  align-items: center;
  margin-right: 3%;
}
.icon {
  padding: 10px;
}




.comp{
  background-color: #b5c8ec91;
  display: flex;
  flex-direction: column;

  list-style-type: none;
  position: absolute;
  right: 3%;
  margin-top: 10%;
}

@media screen and (max-width: 768px) {

    #upperHeaderComp {
        align-items: center;
          height: 10%;
    }
  .logo-header {
width: 136px;
height: 40px;
  }
  .icon {
    width: 20px;
  }
  .comp{
        margin-top:45%;
  }
}
</style>