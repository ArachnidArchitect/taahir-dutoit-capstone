<template lang="">
    <nav id="main-nav">
        <div class="logo">
            <img src="../assets/nav-logo.svg"  alt="">
        </div>
        <div class="nav-links">
            <ul id="main-ul">
                <li class="specail-nuggets"><router-link to="/register">Register</router-link></li>
                <li class="specail-nuggets"><router-link to="/dashboard">Dashboard</router-link></li>
                <li class="specail-nuggets"><router-link to="/faq">FAQ</router-link></li>
                <li class="specail-nuggets"><router-link to="/">About</router-link></li>
                <li><router-link to="/">Contact Us</router-link></li>
            </ul> 
        </div>
        <div class="spacer-nav">
            <div class="mobile-toggle" @click="navBar('flex')">=</div>

        </div>
    </nav>
    <nav id="mobile-nav">
        <ul id="mobile-ul">
                <li><img src="../assets/nav-logo.svg" id="mobile-logo" alt=""> <div class="close-toggle" @click="navBar('none')">></div></li>
                <li><router-link to="/register">Register</router-link></li>
                <li><router-link to="/dashboard">Dashboard</router-link></li>
                <li><router-link to="/faq">FAQ</router-link></li>
                <li><router-link to="/">About</router-link></li>
                <li><router-link to="/">Contact Us</router-link></li>
            </ul> 
    </nav>
</template>
<script>
import router from '@/router'
export default {
    methods: {
        async faqRoute(){
            await router.push('/faq') 
        },
        navBar(status){
            let mobileToggle = document.getElementById('mobile-nav');
            mobileToggle.style.display= status
            console.log(mobileToggle.style.display, 1)
    }
}
}
</script>
<style scoped>
    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }
    #mobile-nav{
        display:none;
    }
    .mobile-toggle{
        display: none;
    }
    #main-nav{
        display:flex;
        justify-content: space-evenly;
        color:white;
        position:fixed;
        top:0;
        padding:2em;
        width:100%;
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0));
        
    } 
    .logo{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    img{
        min-width: 85px;
    }
     #main-ul{
        padding: 2em 0 2em 0;
        display: flex;
        justify-content: space-evenly;
    }
     #main-ul li{

        list-style: none;
    }
    .specail-nuggets::after{
        padding:0 4em 0 4em;
        content: "|";
    }
    a, a:visited, a:active, a:default{
        color:white;
        text-decoration: none;
        font-weight: 400;
        text-wrap: nowrap;
    }
    a:hover{
        font-weight: 600;
    }

    @media only screen and (max-width:1110px){
        #main-nav{
            padding:1em 2em 1em .5em;
            justify-content: space-between;
        }
        img{
            width:80%;
        }
        .specail-nuggets::after{
        padding:0 2em 0 2em;
        }
        .spacer-#main-nav{
            display: none;
        }
    }

    @media only screen and (max-width:800px){
         #main-nav{
            padding:.5em 1em .5em .25em;
            align-items:center
        }
        #main-ul{
            padding:1em 0 1em 0;
        }
        
        a, a:visited, a:active, a:default{
            font-size:smaller;
        }
    }
    @media only screen and (max-width:710px){

    .specail-nuggets::after{
        padding:0 1em 0 1em;
        }
    }
    @media only screen and (max-width:600px){
        #main-nav{
            display: grid;
            grid-template-columns: auto auto auto;
        } 
        .nav-links{
            display:none;
         }
         .logo{
            grid-column-start: 2;
            grid-column-end:3;
         }
         .spacer-#main-nav{
            display: flex;
            grid-column-start: 3;
            grid-column-end:4;
         }
         .mobile-toggle{
            display: flex;
            place-content: center;
            width:2em;
            height:2em;
            align-items:center;
         }
         #mobile-nav{
            /* chhange this to display flex when you want it to show */
            display:none;
            justify-content: center;
            width:100vw;
            background-color:rgb(97, 96, 96);
            position:absolute;
            z-index:100;
            

         }
         #mobile-ul{
            width: 100%;
            border: 1px solid white;

         }
         #mobile-ul li{
            padding: 1em 0 1em 0;
            list-style: none;
            width: 100%;
            border: 1px solid white;
         }

         #mobile-logo{
            width:87px;
         }
         .close-toggle{
            display:grid;
            place-items: center;
            position: absolute;
            right:0;
            top:0;
            width:4em;
            height:4em;
            color:white;
            background-color:#92A94E;
         }
         .close-toggle:hover{
            background-color:#afc767;
         }

    }
</style>