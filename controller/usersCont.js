import { hash } from "bcrypt";
import { getUsersDb, getUserEmailDb, registerUserDb } from "../model/userDb.js";

const getUsers = async (req,res)=>{
   res.json(await getUsersDb())
}
const getUserEmail = async (req, res)=>{
   // let {email, password} = req.body 
   // let hashedPassword = await getUserEmailDb(email)
   // console.log(hashedPassword)
   // if(hashedPassword[0].user_pass==password){
   //    res.send('password checks out!')
   //    // generate a json web token
   // }else{res.send('password is incorrect')}
   res.status(200)
   res.send('okay')

}

const registerUser = async(req,res)=>{
let {first_name, middle_name, last_name, user_role, email_add, user_pass} = req.body
let hashedPassword = hash(user_pass, 10, async (err, hash)=>{
   if(err){
      throw new Error(err);
      
   }else{ 
   await registerUserDb(first_name, middle_name, last_name, user_role, email_add, hash)
   console.log(hash)
res.status(200)
res.json(await getUsersDb())}
});


}
const loginUser = async(req,res)=>{
   res.json({
      message:"You have signed in successfully!",
      token:req.body.token
   })
}

export {getUsers,getUserEmail, registerUser,loginUser}