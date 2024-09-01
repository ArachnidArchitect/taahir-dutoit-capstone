<template lang="">
    <section id="manage-profile">
    <AsideNav/>
        <main id="mp-content">
            <div class="mp-dash-row">
                <h1 class="mp-dash-head">Manage Profile</h1>
                <div class="mp-row-details">
                    <input type="text" placeholder="First Name">
                    <input type="text" placeholder="Middle Name(optional)">
                    <input type="text" placeholder="Surname">
                    <input type="text" placeholder="Role/Position">
                    <input type="text" placeholder="Profile Url">
                    <button>Save Changes</button>
                </div>
                
            </div>
            <div class="mp-dash-row">
                <h1 class="mp-row-head">Manage Schedule</h1>
                <div class="mp-row-schedule">
                    <input type="date">
                    <button>Load Schedule</button>
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
}
.mp-dash-row{
    display: flex;
}
.mp-row-details{

}
    
</style>