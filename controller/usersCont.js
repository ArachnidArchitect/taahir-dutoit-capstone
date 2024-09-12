import { hash } from "bcrypt";
import { getUsersDb, getUserDb,getUserEmailDb, registerUserDb, filteredRolesDb, updateUserDb } from "../model/userDb.js";

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
const filteredRoles = async (req,res)=>{
   let role = req.params.role
   console.log(role)
   res.json(await filteredRolesDb(role))
}

const registerUser = async(req,res)=>{
   try {
      let {first_name, middle_name, last_name, user_role, email_add, user_pass} = req.body
      let userExists = await getUserEmailDb(email_add)
      if(userExists) throw ("Looks like you are already registered :)");
      console.log('dd',userExists)
      
      let hashedPassword = hash(user_pass, 10, async (err, hash)=>{
      if(err){
         throw (err)
      }else{ 
      await registerUserDb(first_name, middle_name, last_name, user_role, email_add, hash)
      console.log(hash)
      res.status(200)
      res.json({message:`Congratulations ${first_name} ${middle_name} ${last_name}! You have been successfully registered! :) `})}
         })} catch (err) {
            res.status(500)
         res.json({message:err})
         }
}
const loginUser = async(req,res)=>{
   res.json({
      message:"You have signed in successfully! :)",
      token:req.body.token
   })
}
const updateUser = async(req,res)=>{
   try {
   let user_id = req.body.user.id   
   let { first_name, middle_name, last_name, user_role, user_profile} = req.body
   console.log(user_id)
   let stored = await getUserDb(user_id)
   first_name? first_name = first_name: first_name = stored.first_name
   middle_name? middle_name = middle_name: middle_name = stored.middle_name
   last_name? last_name = last_name: last_name = stored.last_name
   user_role? user_role = user_role: user_role = stored.user_role
   user_profile? user_profile = user_profile: user_profile = stored.user_profile

   await updateUserDb(user_id,first_name, middle_name, last_name, user_role, user_profile)
   res.status(200)
   res.json({message:"user details were updated successfully :)"})
   } catch (error) {
      console.log(error)
      res.status(500)
      res.json({message:"Process was interrupted!Try again at another time :("}) 
   }

}

export {getUsers,getUserEmail, registerUser,loginUser, filteredRoles, updateUser}