<template lang="">
    <div class="mobile-navigator-cont"> 
        <button class="mobile-nav-btn" @click="redirect('manage-profile')" alt="profile"><img :src="profile" alt="" width="25px"></button>
        <button class="mobile-nav-btn" @click="redirect('dashboard')" alt="dashboard"><i class="fa-solid fa-bars-staggered"></i></button>
        <button class="mobile-nav-btn"  alt="new meeting"><i class="fa-solid fa-calendar-plus"></i></button>
        <button class="mobile-nav-btn" @click="redirect('users')" alt="Alumni/Staff"><i class="fa-solid fa-user-group"></i></button>
        <button class="mobile-nav-btn" @click="signOut()" alt="Sign Out"><i class="fa-solid fa-right-from-bracket"></i></button>
        </div>
</template>
<script>
    import router from '@/router'
import cookies from 'vue-cookies'

export default{
    data() {
        return {
            fullName:'waiting for data...',
            title:'waiting for data...',
            profile:'https://cdn-icons-png.flaticon.com/512/10412/10412383.png',
        }
    },
    methods: {
        async redirect(page){
            await router.push(`/${page}`)
        },
        async signOut(){
            cookies.remove('token')
            alert('Sign out was successful! :)')
            await router.push('/') 
        },
         async showCont(){
           return this.$store.dispatch('showCont')
        },
        async currUser(){
             await this.showCont()
            let user = this.$store.state.currUser
            this.profile = user.user_profile
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
<style >
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .mobile-navigator-cont{
    display: flex;
    width:100%;
    height:5dvh;
}
.mobile-nav-btn{
    background-color:rgba(144, 187, 244, 0.271);
    width:20%;
    border:1px solid #005BFF;
}
</style>