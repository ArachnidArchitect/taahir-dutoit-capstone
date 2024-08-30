<template lang="">
    <section id="register">
        <div class="register-col">
            <div class="register-form">
                <h1 class="form-head">Register</h1>
                <input class="form-inputs" type="text" placeholder="First Name">
                <input class="form-inputs" type="text" placeholder="Middle Name(optional)">
                <input class="form-inputs" type="text" placeholder="Last Name">
                <select class="form-inputs" name="role" id="role">
                    <option>Role</option>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option> 
                </select>
                <input class="form-inputs" type="email" placeholder="Email Address">
                <input class="form-inputs" type="text" placeholder="Password">
                <label>Already have an account? <router-link to="/login">Login </router-link> </label>
                <button>register</button>
            </div>
        </div>
        <div class="register-col register-right">

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
    #register{
        display: flex;
        justify-content: center;
        align-items:center;
        height: 100vh;
        
        font-family: "Poppins", system-ui;
        font-weight: 400;
        font-style: normal;
    }
    .register-col{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:50%;
        height:100%;
    }
    .register-form{
        display:flex;
        flex-direction: column;
        justify-content:space-evenly;
        align-items:center;
        height: 80%;
        width:50%;

        border-radius: 30px;
        padding:2em;
        background-color: #1e67f051;
    }
    .form-head{
        color:#1C61DC;
        
    }
    .form-inputs{
        height: 3.5em;
        width: 80%;
        border-radius: 2em;
        border:none;
        padding: 0 0 0 2em;
        
    }
    .register-form>button{
        background-color:#1C61DC;
        padding:1em 2em 1em 2em;
        border-radius:2em;
        border:none;
        color:white;
    }
    .register-form>label{
        font-size:1ch;
    }
    .register-right{
        background-image: url('../assets/background-register.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position-y: 250%;
    }
    /* option */

</style>