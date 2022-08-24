<template>
<div id="interventionUnit" class="container">

</div>
</template>

<script>
import axios from 'axios'
export default {
name:'OneOrderController',
  data:()=>({
      order:{},
      user:{}
  }),
  async created(){
    const {orderId}=this.$route.params
     const getInfos = await axios.get('admin/orders/'+orderId);
 this.order = getInfos.data.data 
 },

  }
</script>

<style scoped>
.notes{
  background-color: rgba(128, 128, 128, 0.681);
  height: fit-content;
  display: flex;
}
.notes p{
align-self: center;
}
#interventionUnit{
padding-top: 100px;
  font-size: x-large;
}
h1{
  font-size: 32px;
font-weight: 500;
color:#f00;
}
.headline{
font-size: 30px;
font-weight: 5000;
display: block;
text-align: left;
margin-bottom: 10px;
color: #1181f1;
}
.buttons{
  display: flex;
flex-direction: row;
justify-content: space-around;
}
.buttons> button{
  margin-top: 10px;
  width: 500px;
height: 70px;
}
.btn1{
  background-color: #ff6b3e;
  color: white;
    font-size: x-large;
}
.btn1:hover{
  background-color: #ff591e;
}
.btn2{
  background-color: #9da3ab;
  color: white;
    font-size: x-large;
}
.btn2:hover{
  background-color: #848484;
}
</style>