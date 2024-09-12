import {getUsers, getUserEmail, registerUser,loginUser, filteredRoles,updateUser} from '../controller/usersCont.js'
import {getUserEmailDb} from '../model/userDb.js'
import{checkUser, verifyToken} from '../middleware/authenticate.js'
import express from 'express'

const router = express.Router()

router.get('/', verifyToken, getUsers)
router.get('/filtered/:role', filteredRoles)
router.get('/auth',verifyToken, async (req,res)=>{
    console.log(req.body.user.email_add)
    let data = await getUserEmailDb(req.body.user.email_add)
    res.json(data)
})
router.post('/login',checkUser,loginUser)
router.post('/register',registerUser)
router.patch('/update', verifyToken, updateUser)

export default router

