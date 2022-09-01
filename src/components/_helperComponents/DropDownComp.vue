<template>
  <div id="DropDownComp">
    <li v-for="(item, i) in items" :key="i"    class="user-btn" v-show ="! UserIsLogged()" >
      <router-link
        :to="{ path: item.router }"
        style="text-decoration: none; color: #4f4f4f"
     
      >
        {{ item.title }}
      </router-link>
    </li>
       <li  class="user-btn" v-show ="UserIsLogged()" @click="logOut">log out</li>
  </div>

</template>

<script>
import {  clearAuthToken, isLoggedIn } from '@/_helpers/auth'
export default {
  name: "DropDownComp",
  props: ["items"],
    methods: {
   UserIsLogged(){
     if (isLoggedIn()){
       return true
     }
   },
   logOut(){
     clearAuthToken()
     this.$router.go({name:'home'})
   }

  },
};
</script>


<style scoped>
#DropDownComp{
  z-index: 9;
}

.user-btn {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  color: #4f4f4f;
  z-index: 9;

padding: 20px;
}

.user-btn:hover {
  background-color: #b5c8ec;
  border-bottom-color: #293e51;
}
.user-btn:active {
  background-color: #001847;
}


</style>