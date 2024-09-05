<template>
  <div class="about">
    <table>
      <tr>
        <th>id</th>
        <th>first name</th>
        <th>middle name</th>
        <th>last name</th>
        <th>role</th>
        <th>email</th>
        <th>password</th>
      </tr>
      <tr v-for="user in users()" :key="user">
        <td>user.user_id</td>
        <td>first name</td>
        <td>middle name</td>
        <td>last name</td>
        <td>role</td>
        <td>email</td>
        <td>password</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  methods:{
    users(){
      console.log('test'+ this.$store.state.users)
      return this.$store.state.users
    }
  },
  computed:{
    getUsers(){
      return this.$store.dispatch('getUsers');
    }
  },
  mounted(){
   this.getUsers
  }
}
</script>
