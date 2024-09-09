import {pool} from '../config/config.js'

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
const registerUserDb = async(first_name, middle_name, last_name, user_role, email_add, user_pass)=>{
    await pool.query('INSERT INTO users (first_name, middle_name, last_name, user_role, email_add, user_pass) VALUES (?,?,?,?,?,?);',[first_name, middle_name, last_name, user_role, email_add, user_pass])
}
export {getUsersDb, getUserDb, getUserEmailDb, registerUserDb, filteredRolesDb}