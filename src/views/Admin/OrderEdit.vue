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
              <p type="text" class="1">{{ getUsers.name }}</p>
            </div>
            <div class="col-md-6">
              <label class="labels">Surname</label>
              <p type="text" class="1">{{ getUsers.surname }}</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Mobile Number</label>
              <p
                type="text"
                class="1"
                placeholder="enter phone number"
                value=""
              >
                {{ getUsers.phone_number }}
              </p>
            </div>
            <div class="col-md-12">
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
            <div class="col-md-12">
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
          </div>
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
      <div class="col-md-4">
        <div class="p-3 py-5">
          <h4
            class="d-flex justify-content-between align-items-center experience"
          >
            <span>Order Informations</span>
          </h4>
          <br />
          <label class="labels">transport_type</label>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>{{ order.transport_type }}</option>
            <option value="1">fry</option>
            <option value="2">reefer</option>
          </select>
          <br />
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
              <label class="labels">length</label
              ><input
                type="text"
                class="form-control"
                placeholder=""
                v-model="order.length"
              />
            </div>
            <br />
            <div class="col-md-4">
              <label class="labels">height</label
              ><input
                type="text"
                class="form-control"
                placeholder="additional details"
                v-model="order.height"
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <label class="labels">width</label
              ><input
                type="text"
                class="form-control"
                placeholder="experience"
                v-model="order.width"
              />
            </div>
            <br />
            <div class="col-md-4">
              <label class="labels">net weight</label
              ><input
                type="text"
                class="form-control"
                placeholder="additional details"
                v-model="order.net_weight"
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <label class="labels">gross weight</label
              ><input
                type="text"
                class="form-control"
                placeholder="experience"
                v-model="order.gross_weight"
              />
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
            <label class="labels">commande status</label
            ><textarea
              type="text"
              class="form-control"
              placeholder="additional details"
              v-model="order.commande_status"
            ></textarea>
          </div>
          <div class="col-md-12">
            <label class="labels">commande comment</label
            ><textarea
              type="text"
              class="form-control"
              placeholder="experience"
              v-model="order.commande_comment"
            ></textarea>
          </div>
          <br />
          <div class="col-md-12">
            <label class="labels">User Comments</label
            ><textarea
              type="text"
              class="form-control"
              v-model="order.commentary"
            ></textarea>
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
  name: "OrderEdit",
  data: () => ({
    order: {
      transport_type: "",
      length: "",
      height: "",
      width: "",
      net_weight: "",
      gross_weight: "",
      commande_status: "",
      commande_comment: "",
      commentary: "",
    },
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
               const toast = useToast();
      const { orderId } = this.$route.params;
      axios.put("admin/orders/edit/" + orderId, this.order).then((Response) => {
 if(Response.data.error_messages){
            toast(Response.data.error_messages.danger[0])
          }else{
            toast(Response.data[0])
            this.$router.push({name: 'OneOrderController', params: { orderId: orderId }})

          }
        });
    },

    CancelOrder(){
      const { orderId } = this.$route.params;
      this.$router.push({name: 'OneOrderController', params: { orderId: orderId }})
    }
  },
};
</script>

<style scoped>
.mb-5{
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
</style>