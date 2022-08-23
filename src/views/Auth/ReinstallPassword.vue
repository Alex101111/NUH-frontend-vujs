<template>
  <div>
    <form @submit.prevent="sendPass">
      <input type="password" v-model="user.password" /> your new password
      <input type="password" v-model="user.password2" /> your password Confirmation
      <input type="submit" />
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
            console.log(Response.data)
          }
        });
    },
  },
};
</script>

<style>
</style>