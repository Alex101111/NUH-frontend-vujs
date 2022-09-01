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
            width="50"
            color="white"
            class="icon"
          />
        </li>
        <li>
          <Icon
            icon="akar-icons:instagram-fill"
            width="50"
            color="white"
            class="icon"
          />
        </li>
        <li>
          <Icon
            icon="icon-park-outline:twitter"
            color="white"
            width="50"
            class="icon"
          />
        </li>
        <li class="test">
          <Icon
            icon="bx:user-circle"
            color="white"
            width="60"
            height="60"
            class="icon"
            @click="isOpen = !isOpen"
          />
        </li>
             <li  class="user-btn" v-show ="UserIsLogged()"> Hello {{user}}</li>
      </ul>
      <drop-down-comp :items="userNav" v-if="isOpen"  @mouseleave="isOpen = !isOpen" class="comp"/>
      
    </div>
  </div>
</template>

<script>
import DropDownComp from "../_helperComponents/DropDownComp.vue";
import { Icon } from "@iconify/vue";
import { isLoggedIn,getUserInfo } from '@/_helpers/auth';

export default {
  name: "upperHeader",
  components: {
    Icon,

    DropDownComp,
  },
  data() {
    return {
        isOpen : false,

            user: {
    },

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

       async created() {
   if (isLoggedIn()){
     const userInformation =  await getUserInfo()

  this.user = userInformation.data['username']
}
    },

    methods:{
         UserIsLogged(){
     if (isLoggedIn()){
       return true
     }
   },
    }
};
</script>

<style scoped>


.user-btn{
  color: white;
  font-weight: bolder;
}
#upperHeaderComp {
  background-color: #293e51;
  height: 10%;
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
  z-index: 9;
}
.icon {
  padding: 10px;
}

.icon:hover{
    transform: scale(1.1) !important;
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
  ul {
white-space: nowrap;
margin-left: -8%;
  }
  .comp{
        margin-top:45%;
  }
}
</style>