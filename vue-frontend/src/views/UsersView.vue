<template lang="">
    <section id="users"  >
        <AsideNav  v-if="!isMobile()"/>
    <main id="users-cont" v-if="$cookies.get('token')">
        <section id='users-staff' class="users-section" v-if="staff().length>0">
            <div class="users-col">
                <div class="users-card-head"><h1>Staff</h1></div>
                <div class="users-grid">
                    <div class="users-card" v-for="user in staff()" :key="user">
                        <div class="users-card-col"><img :src="profile" alt=""></div>
                        <div class="users-card-col">
                            <div class="users-card-row card-row-name">{{user.first_name +' '+ user.last_name}}</div>
                            <div class="users-card-row card-row-title">{{user.user_role}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div v-else>
            <LoadingComp/>
    </div>
        <section id='users-students' class="users-section" v-if="students().length>0">
            <div class="users-col">
                <div class="users-card-head"><h1>Students/Alumni</h1></div>
                <div class="users-grid">
                    <div class="users-card" v-for="user in students()" :key="user">
                        <div class="users-card-col"><img :src="user.user_profile" alt=""></div>
                        <div class="users-card-col">
                            <div class="users-card-row card-row-name">{{user.first_name +' '+ user.last_name}}</div>
                            <div class="users-card-row card-row-title">{{user.user_role}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div v-else>
        <LoadingComp/>
    </div>
    </main>
    <div v-else>

<h1>Looks like you've been logged out</h1>
<h5>try  <router-link to="/login">signing in</router-link> again</h5>
</div>
    
    </section>
<MobileNavigator v-if="isMobile()"/>
</template>
<script>
import AsideNav from '@/components/AsideNav.vue';
import MobileNavigator from '@/components/MobileNavigator.vue';
import LoadingComp from '@/components/LoadingComp.vue';

export default {
    components:{ AsideNav, MobileNavigator,LoadingComp},
    data() {
        return {
            loading1: true,
            loading2: true,
        }
    },
  methods:{
    students(){
      console.log('test'+ this.$store.state.students)
      let data = this.$store.state.students
            this.loading1 = false
            return data
        },
    staff(){
      console.log('test'+ this.$store.state.staff)
      let data = this.$store.state.staff
            this.loading2 = false
            return data
        },
        filteredRoles(role){
      return this.$store.dispatch('filteredRoles',role);  
    },
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },

  },
  computed:{
    getUsers(){
      return this.$store.dispatch('getUsers');
    },
  },
  mounted(){
    this.filteredRoles('staff')
    this.filteredRoles('student')
   this.students()
  }
}
</script>
<style>
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    }
#users-cont{
    width: 100%;
}
#users, .users-card, .users-card-row{
    display:flex;
    }
.users-col, .users-card-col{
    display:flex;
    flex-direction: column;
    }
.users-grid{
    display:grid;
    grid-template-columns: repeat(auto-fit, minMax(250px, 250px));
    gap:1em;
    }

.users-section{
    display:flex;
    justify-content:center;
}
.users-card{
    background-color:white;
    padding:1em;
    border-radius: .2em;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);

    display:grid;
    grid-template-columns: 60px auto;
}
.users-col{
    padding-left:1em;
    width:85%;
}

.users-card-head{
    color:#1C61DC;
    text-align:left;
}
@media only screen and (max-width:800px){
    #users{
        flex-direction: column;
    }
}

</style>