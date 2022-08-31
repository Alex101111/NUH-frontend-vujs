<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            class="rounded-circle mt-5"
            width="150px"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          /><span class="font-weight-bold">Edogaru</span
          ><span class="text-black-50">edogaru@gfgf.com.my</span><span> </span>
        </div>
      </div>
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Profile Settings</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels">Name</label>
              <input type="text" class="1" v-model="user.name" >
            </div>
            <div class="col-md-6">
              <label class="labels">Surname</label>
              <input type="text" class="1" v-model="user.surname">
            </div>
          </div>
          <div class="row mt-2">
                <div class="col-md-6">
              <label class="labels">Country Code</label>
              <br>
              <input
                type="text"
                class="1"
                placeholder="enter phone number"
                v-model="user.country_code"
              >
      
            </div>
            <div class="col-md-6">
              <label class="labels">Mobile Number</label>
              <br>
              <input
                type="text"
                class="1"
                placeholder="enter phone number"
                v-model="user.phone_number"
              >
            </div>
               </div>
            <div class="col-md-12">
              <label class="labels">Email ID</label>
              <br>
              <input
                type="text"
                class="1"
                placeholder="enter address line 1"
          v-model="user.email"
              >
       
            </div>
            <div class="col-md-12">
              <label class="labels">RegisterDate</label>
              <p
                type="text"
                class="1"
                placeholder="enter address line 2"
                value=""
              >
                {{ user.CreatedAt }}
              </p>
            </div>

                      <label class="labels">Active Status</label>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          v-model="user.active"
          >
            <option selected  >{{ user.active }}</option>
            <option value="1">Active</option>
            <option value="0">not Active</option>
          </select>

                                <label class="labels">Admin Status</label>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
                     v-model="user.is_admin"
          >
            <option selected disabled >{{ user.is_admin }}</option>
            <option value="1" >Admin</option>
            <option value="0">Not Admin</option>
          </select>
       
          <div class="row mt-2">
            <div class="mt-5 text-center col-md-4">
              <button
                class="btn btn-primary profile-button"
                type="button"
                @click="editOrder()"
              >
                Edit Order
              </button>
            </div>
            <div class="mt-5 text-center col-md-4">
              <button class="btn btn-primary profile-button" type="button"  @click="CancelOrder()">
                Cancel Edit
              </button>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from 'vue-toastification'
export default {
  name: "UserEdit",
  data: () => ({
    user: {
      name: "",
      surname: "",
      email: "",
      phone_number: "",
      is_admin: "",
      active: "",
      country_code: "",
    },

  }),


  async created() {
    const { UserId } = this.$route.params;
    console.log(UserId)
    const getInfos = await axios.get("admin/users/" + UserId);
    this.user = getInfos.data;
  },

  methods: {
    editOrder() {
               const toast = useToast();
      const { UserId } = this.$route.params;
      axios.put("admin/users/edit/" + UserId, this.user).then((Response) => {
                    console.log(Response.data)
 if(Response.data.error_messages){
            toast(Response.data.error_messages.danger[0])

          }else{
            toast(Response.data[0])
            this.$router.push({name: 'OneUserController', params: { UserId: UserId }})

          }
        });
    },

    CancelOrder(){
      const { UserId } = this.$route.params;
      this.$router.push({name: 'OneUserController', params: { UserId: UserId }})
    }
  },
};
</script>

<style scoped>
body {
  background: rgb(99, 39, 120);
}

/* :focus {
    box-shadow: none;
    border-color: #BA68C8
} */

.profile-button {
  background: #001847;
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: #b5c8ec;
}

.profile-button:focus {
  background: #682773;
  box-shadow: none;
}

.profile-button:active {
  background: #682773;
  box-shadow: none;
}

.back:hover {
  color: #682773;
  cursor: pointer;
}

.labels {
  font-size: 20px;
  color: #001847;
}

.add-experience:hover {
  background: #ba68c8;
  color: #fff;
  cursor: pointer;
  border: solid 1px #ba68c8;
}

p {
  font-weight: inherit;
}
</style>