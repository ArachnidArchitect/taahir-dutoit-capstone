<template lang="">
    <section id="register">
        <div class="register-col">
            <div class="register-form">
                <h1 class="form-head">Register</h1>
                <input class="form-inputs" type="text" placeholder="First Name" v-model="fname">
                <input class="form-inputs" type="text" placeholder="Middle Name(optional)" v-model="mname">
                <input class="form-inputs" type="text" placeholder="Last Name" v-model="lname">
                <select class="form-inputs" name="role" id="role" v-model="role">
                    <option disabled value="">Role</option>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option> 
                </select>
                <input class="form-inputs" type="email" placeholder="Email Address" v-model="email">
                <input class="form-inputs" type="text" placeholder="Password" v-model="password">
                <label>Already have an account? <router-link to="/login">Login </router-link> </label>
                <button @click="registerUser">register</button>
            </div>
        </div>
        <div class="register-col register-right">

        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            fname:'',
            mname:'',
            lname:'',
            role:'',
            email:'',
            password:'',

        }
    },
    methods:{
        registerUser(){
            console.log(this.fname,this.mname,this.lname,this.role,this.email,this.password);
            this.$store.dispatch('registerUser', {first_name:this.fname,middle_name:this.mname,last_name:this.lname,user_role:this.role,email_add:this.email,user_pass:this.password })
        }
    }
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