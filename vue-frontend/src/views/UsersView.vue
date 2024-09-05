<template lang="">
    <section id="users"  v-if="$cookies.get('token')">
    <AsideNav/>
    <main id="users-cont">
        <section id='users-staff' class="users-section">
            <div class="users-col">
                <div class="users-card-head"><h1>Staff</h1></div>
                <div class="users-grid">
                    <div class="users-card">
                        <div class="users-card-col"><img src="../assets/Mask.png" alt=""></div>
                        <div class="users-card-col">
                            <div class="users-card-row card-row-name">Matthew Brown</div>
                            <div class="users-card-row card-row-title">Lecturer</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='users-students' class="users-section" v-if="users().length>0">
            <div class="users-col">
                <div class="users-card-head"><h1>Students/Alumni</h1></div>
                <div class="users-grid">
                    <div class="users-card" v-for="user in users()" :key="user">
                        <div class="users-card-col"><img src="" alt=""></div>
                        <div class="users-card-col">
                            <div class="users-card-row card-row-name">{{user.first_name +' '+ user.last_name}}</div>
                            <div class="users-card-row card-row-title">{{user.user_role}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div v-else>
            <!-- card placeholders will go here while loading -->
        <h1>just loading</h1>
    </div>
    </main>
    </section>
    <div v-else>

<h1>Looks like you've been logged out</h1>
<h5>try  <router-link to="/login">signing in</router-link> again</h5>
</div>
</template>
<script>
import AsideNav from '@/components/AsideNav.vue';
// import LoaderComp from '@/components/LoadingComp.vue';

export default {
    components:{ AsideNav},
    data() {
        return {
            loading: true,
        }
    },
  methods:{
    users(){
      console.log('test'+ this.$store.state.users)
      let data = this.$store.state.users
            this.loading = false
            return data
        }
  },
  computed:{
    getUsers(){
      return this.$store.dispatch('getUsers');
    }
  },
  mounted(){
   this.getUsers
   this.users()
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
</style>