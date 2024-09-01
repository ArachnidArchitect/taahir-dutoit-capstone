<template lang="">
    <section id="dashboard">
    <AsideNav/>
        <main id="dash-content">
            <div class="main-dash-cont">
                <div class="upcoming-head">
                    <h2>Upcoming Meetings</h2>
                    <!-- this should be a component attached to a modal -->
                    <button>New Meeting</button>
                </div>
                <div class="upcoming-content">
                    <UpcomingCard/>
                </div>
            </div>
        </main>
    </section>
</template>
<script>
import AsideNav from '@/components/AsideNav.vue';
import UpcomingCard from '@/components/UpcomingCard.vue';
export default {
    components:{ AsideNav,UpcomingCard,},
    
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

    justify-content:space-between;
}
.upcoming-card-col{
    justify-content:center;
}
.upcoming-card-title{
    font-size: 20px;
    text-decoration:underline;
}
.upcoming-card-subtext{
    width:100%;
    justify-content: space-between;
}

</style>