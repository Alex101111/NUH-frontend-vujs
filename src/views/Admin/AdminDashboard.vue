<template>
<div>  
    <img src="../../assets/photos/Nuh-card.jpg" alt="">

  <div id = "admin-dash">
<div class="container">
    <h1>Orders Controller</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis non aperiam soluta in! Fugit corporis amet placeat explicabo? Itaque sapiente sunt ad ut nam nostrum quam nihil molestias nobis.</p>
 <router-link  to="/admin/command-controller"><button type="button" class="btn btn-success">Access</button> </router-link>
</div>
<div>
        <h1>Users Controller</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis non aperiam soluta in! Fugit corporis amet placeat explicabo? Itaque sapiente sunt ad ut nam nostrum quam nihil molestias nobis.</p>
<router-link  to="/admin/user-controller"><button type="button" class="btn btn-success">Access</button> </router-link>
</div>
  </div>
  </div>

</template>

<script>
export default {
name:'adminSpace'
}
</script>

<style scoped>

#admin-dash{
  padding-top: 5%;
  display: flex;
  text-align: center;

}

@media (max-width: 767px) {
img{
  width: 100%;
  height: 50%;
}


}
</style>