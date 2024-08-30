<template lang="">
    <section id="dashboard">
        <aside id="dash-nav">
            <div class="dash-nav-row">
                <img src="../assets/Mask.png" alt="" width="70px">
                <div class="nav-col nav-profile">
                    <h3>Matthew Brown</h3>
                    <h6>Lecturer</h6>
                </div>

            </div>
            <div class="dash-nav-row">
                <div class="nav-col">
                <button class="nav-btn">Dashboard</button>
                <button class="nav-btn">Manage Profile</button>
                <button class="nav-btn">Alumni/Staff</button>
                </div>
            </div>
            <div class="dash-nav-row">
                <button class="nav-btn"><router-link to="/">Sign Out</router-link></button>
            </div>
        </aside>
        <main id="dash-content">
            <div class="main-dash-cont">
                <div class="upcoming-head">
                    <h2>Upcoming Meetings</h2>
                    <!-- this should be a component attached to a modal -->
                    <button>New Meeting</button>
                </div>
                <div class="upcoming-content">
                    <div class="upcoming-card">
                        <div class="upcoming-card-col">
                            <div class="upcoming-card-title">Taahir Du Toit X Matthew Brown</div>
                            <div class="upcoming-card-subtext">
                                <div class="upcoming-card-subtext-type">Type: Physical</div>
                                <div class="upcoming-card-subtext-dur">Dur: 5min</div>
                                <div class="upcoming-card-subtext-topic">Topic: Areas for growth</div>
                            </div>
                        </div>
                        <div class="upcoming-card-col">
                            <div class="upcoming-card-date">14:00 Tuesday 24 September 2024 </div>
                            <div class="upcoming-card-loc">Room Number: 5</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>
<script>
export default {
    
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