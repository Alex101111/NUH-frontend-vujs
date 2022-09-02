<template>
<div>
  <h1> Thank you for Validating your email  </h1>
  
  <p>feel free to sign in</p>
  <button>sign in</button>
  </div>
</template>

<script>
 import axios from "axios"
 import { useToast } from "vue-toastification";
export default {
name :'ValidationPage',
methods : {
},
async created() {
  const activeCode = this.$route.query
      const toast = useToast();
  console.log(activeCode)
   await axios.post("validation?activeCode=",activeCode).then((Response) =>{
      if (Response.data['error'] ) {
        toast(Response.data['error']);
             this.$router.push({name: 'home'})
      } else {
        toast(Response.data['success']);

      }
        });
     
       
    },
   
}
</script>

<style>
</style>