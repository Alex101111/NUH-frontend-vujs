import { createStore } from 'vuex'
import axios from 'axios';
import router from '@/router';
import { useToast } from 'vue-toastification'
export default createStore({
  state: {
    status: null

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
      
          if(Response.data.error_messages){
            toast(Response.data.error_messages.danger[0])
          }else{
                  

          commit('SET_STATUS', Response.data)

          // if (status != null) {
          //   this.status = status;

  
          // }
          router.push('userStatus')
          }
        });

    },
  },
  mutations: {
    SET_STATUS : (state, status) =>{ state.status = status
  
}
  },
  
  modules: {
  }
})







