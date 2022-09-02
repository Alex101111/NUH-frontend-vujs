<template>

 <div class="container rounded bg-white mt-5 " id="one-user">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            class="rounded-circle mt-5 srcclass mb-3"
            src="../../assets//photos/Avatar.jpg"
          /><span class="font-weight-bold">{{ user.name }}</span
          ><span class="text-black-50">{{ user.email }}</span><span> </span>
        </div>
      </div>
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Profile Informations</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels">Name</label>
              <p type="text" class="1">{{ user.name }}</p>
            </div>
            <div class="col-md-6">
              <label class="labels">Surname</label>
              <p type="text" class="1">{{ user.surname }}</p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels">Mobile Number</label>
              <p
                type="text"
                class="1"
                placeholder="enter phone number"
                value=""
              >
              {{user.country_code}}  {{ user.phone_number }}
              </p>
            </div>
            <div class="col-md-6">
              <label class="labels">Active Status</label>
              <p
                type="text"
                class="1"
                placeholder="enter address line 1"
                value=""
              >
                {{ user.active }}
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
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
            <div class="col-md-6">
              <label class="labels">Admin Status</label>
              <p
                type="text"
                class="1"
                placeholder="enter address line 2"
                value=""
              >
                      {{ user.is_admin }}
              </p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="mt-5 text-center col-md-4">
              <button
                class="btn btn-primary profile-button"
                type="button"
                @click="editOrder()"
              >
                Edit User
              </button>
            </div>
            <div class="mt-5 text-center col-md-4">
              <button class="btn btn-primary profile-button" type="button">
                <router-link
                  style="text-decoration: none; color: white"
                  to="/admin/user-controller"
                >
                  Back to List
                </router-link>
              </button>
            </div>
            <div class="mt-5 text-center col-md-4">
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteOrder()"
              >
                Delete User
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
import { useToast } from "vue-toastification";
export default {
  name: "OneUserController",
  data: () => ({
    user: {},
  }),

  async created() {
    const { UserId } = this.$route.params;
    const getInfos = await axios.get("admin/users/" + UserId);
    this.user = getInfos.data;
    console.log(this.user);
  },

  methods: {
    editOrder() {
      const infoId = this.user.id_user;
      this.$router
        .push({
          name: "UserEdit",
          params: { UserId: infoId },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
      deleteOrder() {
    const toast = useToast();
    const  orderId =  this.user.id_user;
    console.log(orderId)
    axios.post("admin/users/delete/" + orderId).then((Response) => {
      if (Response.data.error_messages) {
        toast(Response.data.error_messages.danger[0]);
      } else {
        toast(Response.data[0]);
           this.$router.push({name: 'UserController'})
           console.log(Response.data)
      }
    });
  },
  },


};
</script>

<style scoped>
#one-user{
  padding-top: 13%;
}
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


.srcclass{
    width: 200px;
    height: 200px;
}
</style>