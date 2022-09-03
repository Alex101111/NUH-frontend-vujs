<template>
  <div id="Password-reset">
    <form @submit.prevent="sendPass">
         <label for="">your new password : </label>
      <input type="password" class="form-control" v-model="user.password" /> 
         <label for=""> your password Confirmation: </label>
      <input type="password" class="form-control" v-model="user.password2" />
      <button type="submit" class="btn btn-primary">Change Password</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from 'vue-toastification'
export default {
  name: "PasswordReset",
  data: () => ({
    user: {
      password: "",
      password2: "",
    },
  }),

  methods: {
    async sendPass() {
          const toast = useToast();
          const {id} = this.$route.query
      await axios
        .post("resetPassword?id="+id, this.user)
        .then((Response) => {
 if(Response.data.error_messages){
            toast(Response.data.error_messages.danger[0])
          }else{
            toast(Response.data[0])
               this.$router.push({name: 'home'})
          }
        });
    },
  },
};
</script>

<style scoped>

#Password-reset {
  padding-top: 15%;
  display: flex;
  justify-content: center;
height: 50%;
}
.btn{
  margin-top: 10%;
}

.btn{ 
  background-color: #001847 !important;
  width: 100px;
}

.btn:hover{ 
 background-color: #B5C8EC !important; 
}

.btn:active {
  background-color: #B5C8EC;
  color: #001847;
  border-color:#001847 ;
  

}

@media screen and (max-width: 768px) {

#Password-reset{
  padding-top: 50%; 
}
}
</style>