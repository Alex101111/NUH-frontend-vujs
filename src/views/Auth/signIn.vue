<template>
  <div id="login-form-wrap">
    <h2>Login</h2>
    <form id="login-form" @submit.prevent="login">
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
        <input
          type="password"
          id="password"
          v-model="user.password"
          name="password"
          placeholder="password"
          required
        /><i class="validation"><span></span><span></span></i>
      </p>

      <p>
        <input type="submit" id="login" value="Login" />
      </p>
    </form>
    <div id="create-account-wrap">
      <p>Not a member? <a href="#">Create Account</a></p>
      <p>Forgot Your Password? <a href="/resetlink">Reset Password</a></p>
    </div>
    <!--create-account-wrap-->
  </div>
</template>

<script>
import axios from "axios";
import { setAuthToken } from "../../_helpers/auth.js";
export default {
  name: "logIn",

  data: () => ({
    user: {
      email: "",
      password: "",
    },
  }),

  methods: {
    async login() {
      try {
        const signin = await axios.post("user/signin ", this.user);

        setAuthToken(signin.data.token);

        this.$router.go(-1);
      } catch (error) {
        console.log("Caught an error during login:", error);
      }
    },
  },
};
</script>

<style>
@import "/./src/assets/css/signIn.css";
</style>