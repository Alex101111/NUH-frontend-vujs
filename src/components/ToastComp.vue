<template>
  <div>
<div> toast("I'm a toast!");</div>
  </div>
</template>

<script>
 import { useToast } from "vue-toastification";
export default {
setup(){
      const toast = useToast();

      // Use it!
      toast("I'm a toast!");

      // or with options
      toast.success("My toast content", {
        timeout: 2000
      });
      // These options will override the options defined in the "app.use" plugin registration for this specific toast

      // Make it available inside methods
      return { toast }
    },

    methods: {
      myMethod() {

        // Since you returned `toast` from setup(), you can access it now
        this.toast.info("I'm an info toast!");
      }
    }
  }

</script>

<style>

</style>