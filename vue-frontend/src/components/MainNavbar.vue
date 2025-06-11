<template lang="">
    <nav>
        <div class="logo">
            <img src="../assets/nav-logo.svg"  alt="">
        </div>
        <div class="nav-links">
            <ul>
                <li class="specail-nuggets">Register</li>
                <li class="specail-nuggets">Dashboard</li>
                <li class="specail-nuggets">FAQ</li>
                <li>About</li>
            </ul> 
        </div>
        <div></div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style>
    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }
    nav{
        display:flex;
        justify-content: space-evenly;
        color:white;
        position:fixed;
        top:0;
        padding:2em;
        width:100%;
        
    } 
    ul{
        padding: 2em 0 2em 0;
        display: flex;
        justify-content: space-evenly;
    }
    ul li{

        list-style: none;
    }
    .specail-nuggets::after{
        padding:0 2em 0 2em;
        content: "|";
    }
</style>