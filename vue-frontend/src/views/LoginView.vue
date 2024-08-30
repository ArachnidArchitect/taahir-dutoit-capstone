<template lang="">
    <section id="login">
        <div class="login-form">
            <h1 class="form-head">Login</h1>
            <input type="email" placeholder="Email address">
            <input type="password" placeholder="Password">
            <button><router-link to="/dashboard">Login </router-link></button>
            <label > Don't have an account yet? <router-link to="/register">Click here to register</router-link></label>
            <label > Forgot your password? <a href="#forgottenPassword">Click here to reset it</a></label>
        </div>
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
    #login{
        display:flex;
        justify-content:center;
        align-items: center;
        height: 100vh;

        font-family: "Poppins", system-ui;
        font-weight: 400;
        font-style: normal;
    }
    .login-form{
        display: flex;
        flex-direction:column;
        align-items:center;

        background-color:#1e67f051;
        justify-content: space-evenly;
        width:30%;
        min-height:50%;

        padding:2em;
        border-radius:30px;
    }
    .login-form >input{
        height: 3.5em;
        width:80%;
        border-radius: 2em;
        border:none;
        padding: 0 0 0 2em;
    }
    .login-form>button{
        background-color:#1C61DC;
        padding:1em 2em 1em 2em;
        border-radius:2em;
        border:none;
        color:white;
        width:80%;
    }
    .login-form>label{
        font-size:1ch;
    }
</style>