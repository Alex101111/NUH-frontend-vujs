<template>
  <div id="reset-password">
    <h1>please Enter your Email To Recieve The Password Reset Link</h1>

    <form @submit.prevent="sendEmail">
      <p>
        <input
          type="email"
          id="email"
          v-model="user.email"
               class="form-control"
          placeholder="Email Address"
          required
        /><i class="validation"><span></span><span></span></i>
      </p>
      <p>
 <button type="submit" class="btn btn-primary">Send </button>

      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
export default {
  name: "ResetLink",
  data: () => ({
    user: {
      email: "",
    },
  }),
  methods: {
   sendEmail() {
          const toast = useToast();
    axios
        .post("sendLink", this.user)
        .then((Response) => {
 if(Response.data.error_messages){
            toast(Response.data.error_messages.danger[0])
          }else{
            toast(Response.data[0])

          }
        });
    },
  },
};
</script>

<style scoped>

form{
  padding-top: 30px;
}
.btn{ 
  background-color: #001847 !important;
}

.btn:hover{ 
 background-color: #B5C8EC !important; 
}

.btn:active {
  background-color: #B5C8EC;
  color: #001847;
  border-color:#001847 ;
  

}

#reset-password{
  padding-top: 20%;
}



@media (max-width: 767px) {
#reset-password{
  padding-top: 50%;
}
}
</style>