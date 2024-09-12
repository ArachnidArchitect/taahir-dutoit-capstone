<template lang="">
    <section id="manage-profile">
    <AsideNav  v-if="!isMobile()"/>
        <main id="mp-content">
            <div class="mp-dash-row">
                <div class="mp-dash-col">
                <h1 class="mp-row-head">Manage Profile</h1>
                <div class="mp-row-details">
                    <input type="text" placeholder="First Name" class="area1" v-model="fName">
                    <input type="text" placeholder="Middle Name(optional)" class="area1" v-model="mName">
                    <input type="text" placeholder="Surname" class="area1" v-model="lName">
                    <input type="text" placeholder="Role/Position" v-model="role">
                    <input type="text" placeholder="Profile Url" class="area3" v-model="pUrl">
                    <button @click="editUser()">Save Changes</button>
                </div>
            </div>
                
            </div>
            <div class="mp-dash-row">
                <div class="mp-dash-col">
                <h1 class="mp-row-head">Manage Schedule</h1>
                <div class="mp-row-schedule" >
                    <input type="date" v-model="inputDate">
                    <button @click="inputDate?dateCheck=2:dateCheck=1">Load Schedule</button>
                    <button v-show="dateCheck==2" @click="myChildMethod">Save Changes</button>
                </div>
                <div class="slot-template" v-show="dateCheck==2" v-for="slot in $store.state.slots" :key="slot">
                <time-slot :date="inputDate" :id="slot.slot_id" ref="childComp" ><template #slot-desc>{{slot.slot_name}}</template></time-slot>
                 
                </div>
            </div>
            </div>
        </main>
        <MobileNavigator v-if="isMobile()"/>
    </section>
</template>
<script>
import AsideNav from '@/components/AsideNav.vue';
import TimeSlot from '@/components/TimeSlot.vue';
import MobileNavigator from '@/components/MobileNavigator.vue';
export default {
    components:{AsideNav,TimeSlot,MobileNavigator},
    data() {
        return {
            dateCheck: 1,
            inputDate:null,

            fName:null,
            mName:null,
            lName:null,
            role:null,
            pUrl:null,
        }
    },
    methods:{
        myChildMethod(){
            this.$refs.childComp.forEach(child=>{
                if(child.myMethod){
                    child.myMethod()
                }
            })
        },
        callSlots(){
        //   console.log('imworkingfghjk')
          this.$store.dispatch('fetchSlots')
        },
        editUser(){
            this.$store.dispatch('editUser',{first_name: this.fName,middle_name: this.mName,last_name: this.lName,user_role: this.role, user_profile:this.pUrl})
        },
        isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    },
    mounted() {
      this.callSlots()
    },
    
}
</script>
<style>
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: "Poppins", system-ui;
        font-style: normal;
}
#manage-profile{
    display:flex;

}
#mp-content{
    display:flex;
    flex-direction:column;
    width:100%;
    align-items: center;
}
.mp-dash-row{
    display: flex;
    width: 100%;
    justify-content:center;
}
.mp-dash-col{
    display:flex;
    flex-direction: column;
    align-content: center;
    text-align:left;
    width: 85%;
}
.mp-row-head{
    color:#1C61DC;
}
.mp-row-details, .mp-row-schedule{
    display:grid;
    grid-template-columns: auto auto auto;
    gap:1em;;
    background-color:white;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    border-radius:.5em;
    padding:2em;
    width:100%;
    

}
.area3{
    grid-area:2 / 2 / span 1/ span 2 
}
.mp-row-details>*{
    border-radius:.4em;
    border:none;
    background-color:#E9E7E7;  
    text-align:center;
    padding:.5em;
}
.mp-row-details>button{
    grid-area:3/2;
    background-color:#AED858;
    border:2px solid #5D7921;
    color:#5D7921;
    width:80%;
    margin:0 auto;
}
.slot-template{
    width: 80%;
    margin:0 auto;
}
.slot-card{
    display:flex;
    justify-content: space-evenly;
    background-color:#ff000041;
    color:#7E7E7E;
    padding:1em;
    border-radius: 1em;
    margin: .1em 0 .1em 0;
}
.slot-card>div>input {
    width:fit-content;
    border-radius:.4em;
    border:none;
    background-color:#E9E7E7;  
    text-align:center;
    padding:.5em;
    height:100%;

}
.slot-desc{
    color:#7E7E7E;
    font-weight:400;
}
@media only screen and (max-width:800px){
    #manage-profile{
        flex-direction: column;
    }
    .mp-row-details{
        display: flex;
        flex-direction: column;
    }
    main{
        height:90dvh;
        overflow-y: scroll;
    }
}
    
</style>