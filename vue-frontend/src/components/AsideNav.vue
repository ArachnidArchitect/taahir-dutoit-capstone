<template>
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
</template>
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