import {getOpeningsDb, makeBookingDb, showBookingsDb, getSlotsDb, insertAvailabilityDb, countSessionsDb} from '../model/availabilitiesDb.js'
const getOpenings = async(req,res)=>{
    
    res.json(await getOpeningsDb(req.params.id, req.params.month))
}
const makeBooking = async (req,res)=>{
   
    try {
        let {recipient, requesting, app_date, slot_id, min_allocated, topic  } = req.body
        await makeBookingDb(recipient, requesting, app_date, slot_id, min_allocated, topic )
        
        let data = await showBookingsDb(requesting)
        res.status(200)
        res.json({message:'booking was made successfully! :)', myData:data}) 
    } catch (error) {
        console.log(error)
        res.status(409)
        res.json({message:'Booking was not processed! Please try again at another time :('}) 
    }
}
const showBookings = async (req,res)=>{
// res.send('this works')
    res.json(await showBookingsDb(req.params.id))
}
const getSlots = async (req, res)=>{
    res.json(await getSlotsDb())
}
const insertAvailability = async(req,res)=>{
    try {
    let { slot_id, date, minutes_available} = req.body
    let user_id = req.body.user.id
    let count = await countSessionsDb(user_id, slot_id, date)
    if(count.count==0){
    await insertAvailabilityDb(user_id, slot_id, date, minutes_available)
    res.status(200)
    res.json({message:"Data was insert for user id: "+user_id+ " :)"})
    }else{
        res.status(208)
    res.json({message:"There is already an entry for this session"})
    }
    } catch (error) {
        res.status(400)
        console.log(error)
    }

}

export {getOpenings, makeBooking, showBookings,getSlots, insertAvailability}