<template lang="" v-show="this.$store.state.showCont == 1">
    <section id="dashboard">
        <booking-modal v-if="booking"></booking-modal>
    <AsideNav v-if="!isMobile()" />
        <main id="dash-content" v-if="$cookies.get('token')">
            <div class="main-dash-cont">
                <div class="upcoming-head">
                    <h2>Upcoming Meetings</h2>
                    <!-- this should be a component attached to a modal -->
                    <button @click="booking = !booking" id="new-meeting-btn">New Meeting</button>
                    
                </div>
                <div class="upcoming-content" v-for="booking in allBookings()" :key="booking">
                    <upcoming-card>
                        <template #recipient>{{booking.recipient_name}}</template>
                        <template #requesting>{{booking.requesting_name}}</template>
                        <template #type>Physical</template>
                        <template #time_allocated>{{booking.allocated_minutes}}</template>
                        <template #topic>{{booking.topic}}</template>
                        <template #date>{{booking.booking_date.substring(0,10)}}</template>
                        <template #room_num>{{Math.floor(Math.random() * (6 - 1) + 1)}}</template>
                    </upcoming-card>
                </div>
            </div>
        </main>
        <MobileNavigator v-if="isMobile()"/>
    </section>
</template>
<script>
import AsideNav from '@/components/AsideNav.vue';
import UpcomingCard from '@/components/UpcomingCard.vue';
import BookingModal from '@/components/BookingModalComp.vue';
import MobileNavigator from '@/components/MobileNavigator.vue';
export default {
    components:{ AsideNav,UpcomingCard, BookingModal, MobileNavigator },
    data() {
        return {
            booking:false,
            books:0,
        }
    },
    methods: {
        allBookings(){
            return this.$store.state.bookings
        },
        async showCont(){
        console.log('dash')
           return this.$store.dispatch('showCont')
        },
       async showBookings(){
            await this.showCont()
            return this.$store.dispatch('showBookings')
        },
        isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
        
    },
    computed: {
       
    },
    mounted() {
        this.showBookings()
},
    
}
</script>
<style>
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
}
body{
   background-color:#F2F6FE;
   font-family: "Poppins", system-ui;
        font-weight: 400;
        font-style: normal;

}
#dashboard{
    display: flex;
}



/* main section styling */
#dash-content, .main-dash-cont, .upcoming-content, .upcoming-card-col{
    display:flex;
    flex-direction: column;
}
.upcoming-head, .upcoming-card, .upcoming-card-subtext{
    display:flex; 
}
#dash-content{
    align-items: center;
    width:100%;
}
.main-dash-cont{
    width: 60%;
    margin-top:68px;
}
.upcoming-head{
    justify-content: space-between;
    padding:2em;
}
.upcoming-head h2{
    color:#1C61DC;
}
.upcoming-head button{
    background-color:#A0CC44;
    color:white;
    padding: 0 1em 0 1em;
    border:none;
    border-radius:.5em;
    font-weight:100;
    font-size:24px;
}
.upcoming-card{
    background-color:white;
    padding:1em 3em 1em 3em;
    border-radius:2em;
    border:1px solid #005BFF;
    font-size:12px;
    margin-bottom:5px;

    justify-content:space-between;
}
.upcoming-card-col{
    justify-content:center;
}
.upcoming-card-title{
    font-size: 20px;
    text-decoration:underline;
    text-align: left;
}
.upcoming-card-subtext{
    width:100%;
    justify-content: space-between;
}
@media only screen and (max-width:800px){
#dashboard{
    flex-direction: column;
}
.upcoming-head{width: 100%; padding:0; font-size: .8em;}
#dash-content{
    height:90dvh;
    overflow-y: scroll;
}
#new-meeting-btn{
    display:none;
}

.upcoming-card-subtext{
    flex-direction: column;
    font-size: 10px;
    text-align:left;
}
}
</style>