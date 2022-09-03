<template>

  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            class="rounded-circle mt-5 srcclass mb-3"
            src="../assets//photos/Avatar.jpg"
          /><span class="font-weight-bold">{{ getStatus.name }}</span
          >
        </div>
      </div>
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Command Status</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels">Name</label>
              <p type="text" class="1">{{ getStatus.name }}</p>
            </div>
            <div class="col-md-6">
              <label class="labels">User Comments</label>
              <p
                type="text"
                class="1"
                placeholder="enter address line 2"
                value=""
              >
                {{ getStatus.commentary }}
              </p>
            </div>
          </div>
          

          <div class="row mt-2">

           <div class="col-md-6">
              <label class="labels">commande_status</label>
              <p
                type="text"
                class="1"
                placeholder="additional details"
                value=""
              >
                {{ getStatus.commande_status }}
              </p>
            </div>
                       <div class="col-md-6">
              <label class="labels">Command Comments</label>
              <p
                type="text"
                class="1"
                placeholder="additional details"
                value=""
              >
                {{ getStatus.commande_comment }}
              </p>
            </div>
          </div>
         
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 py-5">
          <h4
            class="d-flex justify-content-between align-items-center experience"
          >
            <span>Command information</span>
          </h4>
          <br />
          <div class="row mt-2">
            <div class="col-md-4">
              <label class="labels" style="white-space: nowrap"
                >Transport Type</label
              >
              <p type="text" class="1" placeholder="experience" value="">
                {{ getStatus.transport_type }}
              </p>
            </div>
            <br />
            <div class="col-md-4">
              <label class="labels"   style="white-space: nowrap" >Container Type</label>
              <p
                type="text"
                class="1"
                placeholder="additional details"
                value=""
              >
                {{ getStatus.container_type }}
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <label class="labels">departure</label>
              <p type="text" class="1" placeholder="experience" value="">
                {{ getStatus.departure }}
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
                {{ getStatus.destination }}
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <label class="labels">length</label>
              <p type="text" class="1" placeholder="experience" value="">
                {{ getStatus.length }}
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
                {{ getStatus.height }}
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <label class="labels">width</label>
              <p type="text" class="1" placeholder="experience" value="">
                {{ getStatus.width }}
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
                {{ getStatus.net_weight }}
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <label class="labels">gross_weight</label>
              <p type="text" class="1" placeholder="experience" value="">
                {{ getStatus.gross_weight }}
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
                {{ getStatus.quote_date }}
              </p>
            </div>
          </div>

          <br />
        </div>
      </div>
    </div>
     <div class="row mt-3">
            <div class="mt-5 text-center col-md-6">
              <router-link to="/getquote">
              <button
                class="btn btn-primary profile-button"
                type="button"
               
              >
                Make new order
              </button>
              </router-link>
            </div>
            <div class="mt-5 text-center col-md-6">
               <router-link
                  style="text-decoration: none; color: white"
                  to="/"
                >
              <button class="btn btn-primary profile-button" type="button" style="white-space: nowrap">
               
                  Back to Homepage
              </button>
                  </router-link>
            </div>
          </div>
  </div>



</template>

<script>

// import { getUserInfo } from '../_helpers/auth'
export default {
  name: "getStatus",
  data:()=>({
    status:{}
  }),
      computed: {
      getStatus: function () {
        return this.$store.state.status;
        
      }
    },

onMounted (){

},
created(){



}
};
</script>

<style scoped>
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