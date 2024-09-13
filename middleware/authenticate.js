import { compare } from 'bcrypt';
import { getUserEmailDb } from '../model/userDb.js';
import jwt from 'jsonwebtoken';
import {config} from 'dotenv'
config()

const checkUser = async (req,res, next)=>{
  let {email_add, user_pass}= req.body
  console.log(email_add, user_pass)
  let storedPassword = await getUserEmailDb(email_add)
  console.log(storedPassword)
if(!storedPassword){
  res.json({
    message:"Looks like you haven't signed up yet :("
 })
}else{
console.log(storedPassword.user_id)
compare(user_pass, storedPassword.user_pass, (err, hash)=>{
  if (!hash) {
    res.json({
      message:"Passwords don't match! :("
   })
    res.status(400)
  } else{
    let token = jwt.sign({id:storedPassword.user_id, email_add:email_add}, process.env.TOKEN_SECRET, { expiresIn: '1h' })
    req.body.token = token
    console.log(token)
    res.status(200)
    next()
  }
})
}

}

const verifyToken =(req,res,next)=>{
  console.log(req.headers);
  
  let token = req.headers.authorization
  // let token = cookie && cookie.split('token=')[1]
  // console.log('headers:'+JSON.stringify(cookie))
  console.log('token is'+token)

  jwt.verify(token, process.env.TOKEN_SECRET,(err,decoded)=>{
      if(err){
          res.json({message:'Token has expired', error: err, cookie:token})
          return
      }
      
      req.body.user = decoded
      console.log(decoded);
      next()
  })
  
  
}

export { checkUser,verifyToken };