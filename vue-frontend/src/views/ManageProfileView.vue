<template lang="">
    <section id="manage-profile">
    <AsideNav/>
        <main id="mp-content">
            <div class="mp-dash-row">
                <div class="mp-dash-col">
                <h1 class="mp-row-head">Manage Profile</h1>
                <div class="mp-row-details">
                    <input type="text" placeholder="First Name" class="area1">
                    <input type="text" placeholder="Middle Name(optional)" class="area1">
                    <input type="text" placeholder="Surname" class="area1">
                    <input type="text" placeholder="Role/Position">
                    <input type="text" placeholder="Profile Url" class="area3">
                    <button>Save Changes</button>
                </div>
            </div>
                
            </div>
            <div class="mp-dash-row">
                <div class="mp-dash-col">
                <h1 class="mp-row-head">Manage Schedule</h1>
                <div class="mp-row-schedule">
                    <input type="date">
                    <button>Load Schedule</button>
                </div>
            </div>
            </div>
        </main>
    </section>
</template>
<script>
import AsideNav from '@/components/AsideNav.vue';
export default {
    components:{AsideNav},
    
}
</script>
<style>
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
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

    
</style>