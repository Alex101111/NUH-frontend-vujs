<template>
  <div>
    <h1>please Enter your Email To Recieve The Password Reset Link</h1>

    <form @submit.prevent="sendEmail">
      <p>
        <input
          type="email"
          id="email"
          v-model="user.email"
          name="email"
          placeholder="Email Address"
          required
        /><i class="validation"><span></span><span></span></i>
      </p>
      <p>
        <input type="submit" id="login" value="Login" />
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ResetLink",
  data: () => ({
    user: {
      email: "",
    },
  }),
  methods: {
   sendEmail() {
    axios
        .post("sendLink", this.user)
        .then((Response) => {
          console.log(Response.data);
        });
    },
  },
};
</script>

<style>
</style>