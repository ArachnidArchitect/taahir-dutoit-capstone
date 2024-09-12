import {pool} from '../config/config.js'
import { updateUser } from '../controller/usersCont.js'

const getUsersDb= async ()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}
const filteredRolesDb= async (role)=>{
    let [data] = await pool.query('SELECT * FROM users where user_role =?',[role] )
    return data
}

const getUserEmailDb = async (email)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE email_add = ?',[email])
    return data
}
const getUserDb = async (id)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE user_id = ?',[id])
    return data
}
const registerUserDb = async(first_name, middle_name, last_name, user_role, email_add, user_pass, user_id)=>{
    await pool.query('INSERT INTO users (first_name, middle_name, last_name, user_role, email_add, user_pass) VALUES (?,?,?,?,?,?);',[first_name, middle_name, last_name, user_role, email_add, user_pass])
}
const updateUserDb = async(user_id, first_name, middle_name, last_name, user_role, user_profile)=>{
    await pool.query('update users set first_name=?, middle_name=?, last_name=?, user_role=?, user_profile=? where user_id=?',[first_name, middle_name, last_name, user_role, user_profile,user_id])
}
export {getUsersDb, getUserDb, getUserEmailDb, registerUserDb, filteredRolesDb, updateUserDb}