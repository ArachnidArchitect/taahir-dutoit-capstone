import {getOpeningsDb, makeBookingDb} from '../model/availabilitiesDb.js'
const getOpenings = async(req,res)=>{
    
    res.json(await getOpeningsDb(req.params.id, req.params.month))
}
const makeBooking = async (req,res)=>{
    let {recipient, requesting, app_date, slot_id, min_allocated, topic  } = req.body
    await makeBookingDb(recipient, requesting, app_date, slot_id, min_allocated, topic )
    res.send('alls good')
}

export {getOpenings, makeBooking}