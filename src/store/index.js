import { createStore } from 'vuex'
import axios from 'axios';
import router from '@/router';
import { useToast } from 'vue-toastification'
export default createStore({
  state: {
    status: null,
    users: null
  },
  getters: {
    statusList: (state) => state.status
  },

  actions: {
    track({ commit }, user) {
      const toast = useToast();
      axios
        .post(
          "check-user-status",
          user
        )
        .then((Response) => {

          console.log(Response.data)

          if (Response.data.error_messages) {
            toast(Response.data.error_messages.danger[0])
          } else {


            commit('SET_STATUS', Response.data)

            // if (status != null) {
            //   this.status = status;


            // }
            router.push('userStatus')
          }
        });

    },

    getUser({ commit }, id) {
      axios.get('admin/users/'+ id).then((Response) => {
        commit('SET_USERS', Response.data)


      })
    },
  },
  mutations: {
    SET_STATUS: (state, status) => {
      state.status = status

    },

    SET_USERS: (state, users) => {
      state.users = users
    }
  },

  modules: {
  }
})







