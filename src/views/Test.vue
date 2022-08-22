<template>
  <div id="DropDownComp">
    <li v-for="(item, i) in items" :key="i">
 
    </li>
  </div>
</template>

<script>
export default {
  name: "aboutVue",
};
</script>


<style scoped>
#DropDownComp {
  background-color: #b5c8ec91;
  width: fit-content;
  padding: 1px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  list-style-type: none;
}
li {
  padding-top: 10px;
}
</style>