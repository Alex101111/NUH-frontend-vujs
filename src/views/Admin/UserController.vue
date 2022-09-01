<template>
  <div class="container">
    <table class="table table-hover ">
      <thead>
        <tr>

          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Admin Status</th>
          <th scope="col">Register Date</th>
                              <router-link to="/admin"><button type="button" class="btn btn-success">Back to Admin Space </button> </router-link>

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id_user"
          @click="gotToDetails(user.id_user)"
        >

          <td>{{ user.name }}</td>
          <td>{{ user.surname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.country_code }} {{user.phone_number}}</td>
          <td>{{ user.is_admin }}</td>
          <td>{{ user.CreatedAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import axios from "axios";
export default {
name:"UserController",
 components: {},
  methods: {
    gotToDetails(id_user) {

      this.$router
        .push({
          name: "OneUserController",
          params: { UserId: id_user },
        });
    },
  },
  data: () => ({
    users: [],
  }),
  async beforeCreate() {
    const getInfos = await axios.get("admin/users/all");
    (this.users = getInfos.data), console.log(this.users);
  },
}
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