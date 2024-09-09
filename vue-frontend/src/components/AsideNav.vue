<template>
   <aside id="dash-nav">
            <div class="dash-nav-row">
                <img :src="profile" alt="" width="70px">
                <div class="nav-col nav-profile">
                    <h3>{{ fullName }}</h3>
                    <h6>{{title}}</h6>
                </div>

            </div>
            <div class="dash-nav-row">
                <div class="nav-col">
                <button class="nav-btn"><router-link to="/dashboard">Dashboard</router-link></button>
                <button class="nav-btn"><router-link to="/manage-profile">Manage Profile</router-link></button>
                <button class="nav-btn"><router-link to="/users">Alumni/Staff</router-link></button>
                </div>
            </div>
            <div class="dash-nav-row">
                <button class="nav-btn"><router-link to="/">Sign Out</router-link></button>
            </div>
        </aside>       
</template>
<script>
export default{
    data() {
        return {
            fullName:'waiting for data...',
            title:'waiting for data...',
            profile:'https://cdn-icons-png.flaticon.com/512/10412/10412383.png',
        }
    },
    methods: {
         async showCont(){
           return this.$store.dispatch('showCont')
        },
        async currUser(){
             await this.showCont()
            let user = this.$store.state.currUser
            this.fullName = user.first_name + ' '+user.last_name
            this.title = user.user_role
            return this.$store.state.currUser
        }
    },
    mounted() {
        // this.showCont()
        this.currUser()
    },
}
</script>
<style>
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}
#dash-nav{
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;

    height:100vh;
    width:25%;
    min-width:300px;

    background-color:rgba(255, 255, 255, 0.800);

}
.dash-nav-row{
    display: flex;
    justify-content:center;
    width:80%;
}
.nav-col> button{
    margin-top: 5px;
}
.nav-col{
    display: flex;
    flex-direction: column;
    width:100%;
}
.nav-btn{
 background-color:#aec9fa0e;
 width:100%;
 padding:2em;
 border-radius:8px;
 border: solid 1px #1E69F0
}
</style>