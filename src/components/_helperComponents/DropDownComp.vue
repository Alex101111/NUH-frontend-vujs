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
       <router-link to="/admin" style="text-decoration: none ; color: #4f4f4f;"> <li  class="user-btn" v-show="UserIsLogged() && UserIsAdmin()">Access Admin</li> </router-link>
  </div>

</template>

<script>
import {  clearAuthToken, isLoggedIn, isAdmin } from '@/_helpers/auth'
export default {
  name: "DropDownComp",
  props: ["items"],
    methods: {
   UserIsLogged(){
     if (isLoggedIn()){
       return true
     }
   },
   UserIsAdmin(){
  if (isAdmin()){
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
  font-size: 19px;
  color: #4f4f4f;
  z-index: 9;
  font-weight: bold;
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