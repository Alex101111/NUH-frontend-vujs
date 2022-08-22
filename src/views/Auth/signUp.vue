<template>
 <div id="signUp" >
<signup-box />
  </div>
 
</template>

<script>
import signupBox from '@/components/authComponents/signupBox.vue'

export default {
  components: { signupBox },


}
</script>

<style scoped>
@import "/./src/assets/css/signup.css";
</style>