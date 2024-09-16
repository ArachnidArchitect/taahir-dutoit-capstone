import express from 'express'
import cors from 'cors'
import userRouter from './route/usersRoute.js'
import availabilitiesRouter from './route/availabilitiesRoute.js'

const  app = express()

// middleware goes here
app.use(express.json())
app.use(cors({
    origin:['http://localhost:8080','https://lc-booking-51405.web.app/', '*'],
    credentials:true
}))
app.use('/users', userRouter)
app.use('/availabilities', availabilitiesRouter)


let port = 5005
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})