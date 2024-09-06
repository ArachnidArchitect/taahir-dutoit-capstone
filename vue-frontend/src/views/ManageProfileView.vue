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
                <div class="mp-row-schedule" >
                    <input type="date">
                    <button @click="dateCheck=2">Load Schedule</button>
                    <button v-show="dateCheck==2">Save Changes</button>
                </div>
                <div class="slot-template" v-show="dateCheck==2">
                    <div class="slot-card">
                        <div class="slot-desc">0800-0900</div>
                        <div class="slot-input"><input type="number" value="0" max="60" min="0" step="5"></div>
                    </div>
                    <div class="slot-card">
                        <div class="slot-desc">0900-1000</div>
                        <div class="slot-input"><input type="number" value="0" max="60" min="0" step="5"></div>
                    </div>
                    <div class="slot-card">
                        <div class="slot-desc">1000-1100</div>
                        <div class="slot-input"><input type="number" value="0" max="60" min="0" step="5"></div>
                    </div>
                    <div class="slot-card">
                        <div class="slot-desc">1100-1200</div>
                        <div class="slot-input"><input type="number" value="0" max="60" min="0" step="5"></div>
                    </div>
                    <div class="slot-card">
                        <div class="slot-desc">1200-1300</div>
                        <div class="slot-input"><input type="number" value="0" max="60" min="0" step="5"></div>
                    </div>
                    <div class="slot-card">
                        <div class="slot-desc">1300-1400</div>
                        <div class="slot-input"><input type="number" value="0" max="60" min="0" step="5"></div>
                    </div>
                    <div class="slot-card">
                        <div class="slot-desc">1500-1600</div>
                        <div class="slot-input"><input type="number" value="0" max="60" min="0" step="5"></div>
                    </div>
                    <div class="slot-card">
                        <div class="slot-desc">1600-1700</div>
                        <div class="slot-input"><input type="number" value="0" max="60" min="0" step="5"></div>
                    </div>
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
    data() {
        return {
            dateCheck: 1
        }
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

    
</style>