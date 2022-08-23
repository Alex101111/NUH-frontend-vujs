<template>
<div>
  <h1>NUH Logistics Team</h1>

<button @click="myMethod">click me </button>
</div>

</template>

<script>
import { useToast } from 'vue-toastification'

export default {
name:'MoadlComp',



    methods: {
      myMethod() {
           const toast = useToast();

        toast('sth')
  //  this.$store.increment("sth")
  //       // Since you returned `toast` from setup(), you can access it now
  //       this.toast.info("I'm an info toast!");
  //     }
    }
    }
}
</script>

<style scoped>

</style>