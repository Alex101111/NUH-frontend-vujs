

<template>
  <div class="container">
    <table class="table table-hover ">
      <thead>
        <tr>

          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Transport Type</th>
          <th scope="col">Departure</th>
          <th scope="col">Destination</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="info in infos"
          :key="info.id_commande"
          @click="gotToDetails(info.id_commande, info.id_user)"
        >

          <td>{{ info.name }}</td>
          <td>{{ info.surname }}</td>
          <td>{{ info.transport_type }}</td>
          <td>{{ info.departure }}</td>
          <td>{{ info.destination }}</td>
          <td>{{ info.commande_status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
<!-- 
  <div class="users-list">
    <h1>List of Orders</h1>
    <div class="container">
      <div class="upper">
        <div>Name</div>
        <div>Surname</div>
        <div>Transport Type</div>
        <div>Departure</div>
        <div>Destination</div>
      </div>
      <div
        class="lower"
        v-for="info in infos"
        :key="info.id_commande"
        @click="gotToDetails(info.id_commande, info.id_user)"
      >
        <div>{{ info.name }}</div>
        <div>{{ info.surname }}</div>
        <div>{{ info.transport_type }}</div>
        <div>{{ info.departure }}</div>
        <div>{{ info.destination }}</div>
      </div>
    </div>
  </div> -->
</template>

<script>
import axios from "axios";

export default {
  name: "OrderController",
  components: {},
  methods: {
    gotToDetails(infoId, id_user) {
      this.$store.dispatch("getUser", id_user);

      this.$router
        .push({
          name: "OneOrderController",
          params: { orderId: infoId },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data: () => ({
    infos: [],
  }),
  async beforeCreate() {
    const getInfos = await axios.get("admin/orders/all");
    (this.infos = getInfos.data), console.log(this.infos);
  },
};
</script>

 <style scoped>
a {
  white-space: nowrap;
  align-self: center;
  margin: 10px;
}
h1 {
  text-align: center;
  font-size: 35px;
}
.interventionDispo {
  padding-top: 100px;
}
.container {
  display: flex;
  flex-direction: column;
}
.upper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #1181f1;
  height: 65px;
  font-size: 30px;
  white-space: nowrap;
}
.lower {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5%;
  background-color: #f8f8f8;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 25px;
  line-height: 1.2;
  color: var(--slated);
  height: fit-content;
}
.lower > div {
  align-self: center;
  width: 20%;
  margin: 10px;
}
.upper > div {
  align-self: center;
  width: 20%;
  margin: 10px;
}
@media (max-width: 767px) {
  .upper {
    display: none;
  }
  .lower {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  .lower {
    height: fit-content;
  }
  .lower > div {
    margin: 10px;
    border-bottom: 1px solid #e9e9f0;
    width: 100%;
    text-align: center;
    height: 100px;
  }
}
</style>