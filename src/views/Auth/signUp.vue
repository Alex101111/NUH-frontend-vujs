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
#signUp {
    background-image: url(../../assets/photos/signup.jpg);
    background-size: 100% 100%;

height: inherit;
    /* filter: blur(50px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
   ;*/ 
;
display: flex;
flex-direction: column;
justify-content: center;

}





</style>