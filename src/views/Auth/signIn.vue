<template>
  <div class="signin">
    <h1>Sign in to your account</h1>
    <div class="col-md-8 col-md-offset-2">
      <form id="login-form" @submit.prevent="login">
        <!-- login_wrapper -->
        <div class="login_wrapper">
          <div class="formsix-pos">
            <div class="form-group i-email">
              <input
                type="email"
                class="form-control"
                required=""
                id="email2"
                placeholder="Email Address *"
                v-model="user.email"
              />
            </div>
          </div>
          <div class="formsix-e">
            <div class="form-group i-password">
              <input
                type="password"
                class="form-control"
                required=""
                id="password2"
                placeholder="Password *"
                v-model="user.password"
              />
            </div>
          </div>
          <div class="login_remember_box">
            <a href="/resetlink" class="forget_password"> Forgot Password </a>
          </div>
          <div class="login_btn_wrapper">
            <button href="#" class="btn btn-primary login_btn" type="submit">
              Login
            </button>
          </div>
          <div class="login_message">
            <p>Don&rsquo;t have an account ? <a href="#"> Sign up </a></p>
          </div>
        </div>
      </form>
      <!-- /.login_wrapper-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from 'vue-toastification'
import { clearAuthToken, setAuthToken } from "../../_helpers/auth.js";

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
       const toast = useToast();
      try {
        const signin = await axios.post("user/signin ", this.user);

        if (signin.data.error_messages){
          toast(signin.data.error_messages['danger'])
        }else{
        setAuthToken(signin.data.token);
        window.location.reload()

        }
      } catch (error) {
        console.log("Caught an error during login:", error);
        clearAuthToken()
      }
    },
  },
};
</script>

<style scoped>

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
.signin{
  
  display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
}
.login_form_wrapper {
  float: left;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 100px;
  background-color: grey;
}
.login_wrapper {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e4e4e4;
  float: left;
  width: 100%;
  background: #fff;
  padding: 50px;
}
.login_wrapper a.btn {
  color: #fff;
  width: 100%;
  height: 50px;
  padding: 6px 25px;
  line-height: 36px;
  margin-bottom: 20px;
  text-align: left;
  border-radius: 5px;
  background: #4385f5;
  font-size: 16px;
  border: 1px solid #4385f5;
}
.login_wrapper a i {
  float: right;
  margin: 0;
  line-height: 35px;
}
.login_wrapper a.google-plus {
  background: #db4c3e;
  border: 1px solid #db4c3e;
}
.login_wrapper h2 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #111;
  line-height: 20px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
}
.login_wrapper .formsix-pos,
.formsix-e {
  position: relative;
}
.form-group {
  margin-bottom: 15px;
}
.login_wrapper .form-control {
  height: 53px;
  padding: 15px 20px;
  font-size: 14px;
  line-height: 24px;
  border: 1px solid #fafafa;
  border-radius: 3px;
  box-shadow: none;
  font-family: "Roboto";
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  background-color: #fafafa;
}
.login_wrapper .form-control:focus {
  color: #999;
  background-color: fafafa;
  border: 1px solid #4285f4 !important;
}
.login_remember_box {
  margin-top: 30px;
  margin-bottom: 30px;
  color: #999;
}
.login_remember_box .control {
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
}
.login_remember_box .control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.login_remember_box .control__indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  background: #fff;
  border: 1px solid #999;
}
.login_remember_box .forget_password {
  float: right;
  color: #db4c3e;
  line-height: 12px;
  text-decoration: underline;
}
.login_btn_wrapper {
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e4e4e4;
}
.login_btn_wrapper a.login_btn {
  text-align: center;
  text-transform: uppercase;
}
.login_message p {
  text-align: center;
  font-size: 16px;
  margin: 0;
}
p {
  color: #999999;
  font-size: 14px;
  line-height: 24px;
}
.login_wrapper a.login_btn:hover {
  background-color: #2c6ad4;
  border-color: #2c6ad4;
}
.login_wrapper a.btn:hover {
  background-color: #2c6ad4;
  border-color: #2c6ad4;
}
.login_wrapper a.google-plus:hover {
  background: #bd4033;
  border-color: #bd4033;
}
#password2{
  width: 100%;
}

@media (max-width: 767px) {
.btn{
 width: 60px;
}
}
</style>