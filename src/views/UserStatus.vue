<template>
  <div>
    <table>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">surname</th>
          <th scope="col">transport_type</th>
          <th scope="col">departure</th>
          <th scope="col">destination</th>
          <th scope="col">container_type</th>
          <th scope="col">length</th>
          <th scope="col">height</th>
          <th scope="col">width</th>
          <th scope="col">net_weight</th>
          <th scope="col">gross_weight</th>
          <th scope="col">commande_status</th>
          <th scope="col">commande_comment</th>
          <th scope="col">quote_date</th>
          <th scope="col">tracking_number</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td>{{getStatus.name }}</td>
          <td>{{ getStatus.surname }}</td>
          <td>{{ getStatus.transport_type }}</td>
          <td>{{ getStatus.departure }}</td>
          <td>{{ getStatus.destination }}</td>
          <td>{{ getStatus.container_type }}</td>
          <td>{{ getStatus.length }}</td>
          <td>{{ getStatus.height }}</td>
          <td>{{ getStatus.width }}</td>
          <td>{{ getStatus.net_weight }}</td>
          <td>{{ getStatus.gross_weight }}</td>
          <td>{{ getStatus.commande_status }}</td>
          <td>{{ getStatus.commande_comment }}</td>
          <td>{{ getStatus.quote_date }}</td>
          <td>{{ getStatus.tracking_number }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

// import { getUserInfo } from '../_helpers/auth'
export default {
  name: "getStatus",
  data:()=>({
    status:{}
  }),
      computed: {
      getStatus: function () {
        return this.$store.state.status;
        
      }
    },

onMounted (){

},
created(){

  console.log('sth')
  console.log(this.$store.state.status.name)

}
};
</script>

<style>
</style>