<template>
<section id="home-hero">
  <div class="hero-left">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXpRrLr2aCd3pkYQGMf31_zPz8jCpkh0stw&s" class="hero-logo" alt="lc-logo"></div>
  
  <div class="hero-right">
    <div class="hero-quote">“Life is 10 percent what happens to me and ninety percent how I react to it.”</div>
    <button id="hero-button"><router-link to="/register">Lets talk</router-link></button>
  </div>
</section>
</template>

<script>
// @ is an alias to /src


export default {
  
  components: {
    
  }
}
</script>
<style>
*{
  box-sizing: border-box;
  padding:0;
  margin: 0;

}
body{
  background-color: #f2f2f2;
}
#home-hero{
  background-image: url('../assets/background-home.png');
  background-size: cover;
  background-position-y: 100%;
  height: 85vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#home-hero>div{
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-evenly;
  padding:1em;
  width:50%;
  height: 70%;

  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size:2.6ch;

  color:white;
}
#hero-button{
  background-color:#92A94E;
  width:60%;
  padding:1em;
  color:white;
  border-radius:28px;

  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size:2ch;
}
.hero-logo{
  width: 350px;
  height: 350px;
}
.hero-quote{font-weight: 600;}
@media only screen and (max-width:800px){
  #hero-button{
    width:100%;
  }
  .hero-quote{
    font-weight:200;
  }
}
</style>
