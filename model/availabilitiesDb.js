import {pool} from "../config/config.js";
import { showBookings } from "../controller/availabilitiesCont.js";

const getOpeningsDb = async (id,month)=>{
    let [data] = await pool.query('SELECT id_availabilities,slot_id, availabilities.date,  slots.slot_name, availabilities.minutes_available FROM availabilities LEFT JOIN slots USING(slot_id)  WHERE user_id = ? AND MONTH(date) = ?',[id, month])
    return data
}
const makeBookingDb = async (recipient, requesting, app_date, slot_id, min_allocated, topic )=>{
    await pool.query('INSERT INTO bookings (recipient_id, requesting_id, booking_date, slot_id, allocated_minutes, topic ) VALUES(?,?,?,?,?,?)', [recipient, requesting, app_date, slot_id, min_allocated, topic ])
}

const showBookingsDb = async (id)=>{
    let [data] = await pool.query(' select booking_id,slot_id,requesting_id,concat(a.first_name, " ", a.last_name) as requesting_name, recipient_id,concat(b.first_name, " ", b.last_name) as recipient_name,booking_date,allocated_minutes,topic,status from bookings left join users as a on a.user_id = bookings.requesting_id  left join users as b on b.user_id = bookings.recipient_id WHERE recipient_id = ? OR requesting_id = ?',[id,id])
    return data
}

showBookingsDb(2)
export{getOpeningsDb, makeBookingDb, showBookingsDb}