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
            <h4 class="text-right">Profile Informations</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels">Name</label>
              <p type="text" class="1">{{ getUsers.name }}</p>
            </div>
            <div class="col-md-6">
              <label class="labels">Surname</label>
              <p type="text" class="1">{{ getUsers.surname }}</p>
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
              {{getUsers.country_code}}  {{ getUsers.phone_number }}
              </p>
            </div>
            <div class="col-md-6">
              <label class="labels">Email ID</label>
              <p
                type="text"
                class="1"
                placeholder="enter address line 1"
                value=""
              >
                {{ getUsers.email }}
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
                {{ getUsers.CreatedAt }}
              </p>
            </div>
            <div class="col-md-6">
              <label class="labels">User Comments</label>
              <p
                type="text"
                class="1"
                placeholder="enter address line 2"
                value=""
              >
                {{ order.commentary }}
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
                Edit Order
              </button>
            </div>
            <div class="mt-5 text-center col-md-4">
              <button class="btn btn-primary profile-button" type="button">
                <router-link
                  style="text-decoration: none; color: white"
                  to="/admin/command-controller"
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
                Delete Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 py-5">
          <h4
            class="d-flex justify-content-between align-items-center experience"
          >
            <span>Order Informations</span>
          </h4>
          <br />
          <div class="row mt-2">
            <div class="col-md-4">
              <label class="labels" style="white-space: nowrap"
                >Transport Type</label
              >
              <p type="text" class="1" placeholder="experience" value="">
                {{ order.transport_type }}
              </p>
            </div>
            <br />
            <div class="col-md-4">
              <label class="labels">commande_status</label>
              <p
                type="text"
                class="1"
                placeholder="additional details"
                value=""
              >
                {{ order.commande_status }}
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <label class="labels">departure</label>
              <p type="text" class="1" placeholder="experience" value="">
                {{ order.departure }}
              </p>
            </div>
            <br />
            <div class="col-md-4">
              <label class="labels">destination</label>
              <p
                type="text"
                class="1"
                placeholder="additional details"
                value=""
              >
                {{ order.destination }}
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <label class="labels">length</label>
              <p type="text" class="1" placeholder="experience" value="">
                {{ order.length }}
              </p>
            </div>
            <br />
            <div class="col-md-4">
              <label class="labels">height</label>
              <p
                type="text"
                class="1"
                placeholder="additional details"
                value=""
              >
                {{ order.height }}
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <label class="labels">width</label>
              <p type="text" class="1" placeholder="experience" value="">
                {{ order.width }}
              </p>
            </div>
            <br />
            <div class="col-md-4">
              <label class="labels">net_weight</label>
              <p
                type="text"
                class="1"
                placeholder="additional details"
                value=""
              >
                {{ order.net_weight }}
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <label class="labels">gross_weight</label>
              <p type="text" class="1" placeholder="experience" value="">
                {{ order.gross_weight }}
              </p>
            </div>
            <br />
            <div class="col-md-4">
              <label class="labels">quote_date</label>
              <p
                type="text"
                class="1"
                placeholder="additional details"
                value=""
              >
                {{ order.quote_date }}
              </p>
            </div>
          </div>
          <div class="col-md-12">
            <label class="labels">commande_comment</label>
            <p type="text" class="1" placeholder="experience" value="">
              {{ order.commande_comment }}
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
export default {
  name: "OneOrderController",
  data: () => ({
    order: {},
    user: {},
  }),

  computed: {
    getUsers: function () {
      return this.$store.state.users;
    },
  },
  async created() {
    const { orderId } = this.$route.params;
    const getInfos = await axios.get("admin/orders/" + orderId);
    this.order = getInfos.data;
    console.log(this.user);
  },

  methods: {
    editOrder() {
      const infoId = this.order.id_commande;
      this.$router
        .push({
          name: "OrderEdit",
          params: { orderId: infoId },
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
    const { orderId } = this.$route.params;
    console.log(orderId)
    axios.post("admin/orders/delete/" + orderId).then((Response) => {
      if (Response.data.error_messages) {
        toast(Response.data.error_messages.danger[0]);
      } else {
        toast(Response.data[0]);
           this.$router.push({name: 'OrderController'})
           console.log(Response.data)
      }
    });
  },
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