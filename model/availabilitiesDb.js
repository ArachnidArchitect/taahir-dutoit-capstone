import {pool} from "../config/config.js";

const getOpeningsDb = async (id,month)=>{
    let [data] = await pool.query('SELECT id_availabilities,slot_id, availabilities.date,  slots.slot_name, availabilities.minutes_available FROM availabilities LEFT JOIN slots USING(slot_id)  WHERE user_id = ? AND MONTH(date) = ?',[id, month])
    return data
}
const makeBookingDb = async (recipient, requesting, app_date, slot_id, min_allocated, topic )=>{
    await pool.query('INSERT INTO bookings (recipient_id, requesting_id, booking_date, slot_id, allocated_minutes, topic ) VALUES(?,?,?,?,?,?)', [recipient, requesting, app_date, slot_id, min_allocated, topic ])
}
export{getOpeningsDb, makeBookingDb}