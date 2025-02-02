import express from 'express'
import cors from 'cors'
import userRouter from './route/usersRoute.js'
import availabilitiesRouter from './route/availabilitiesRoute.js'

const  app = express()

// middleware goes here
app.use(express.json())
app.use(cors({
    origin:'*',
    credentials:true,
    headers:['Content-type', 'Authorization']
}))
app.use('/users', userRouter)
app.use('/availabilities', availabilitiesRouter)


let port = 5005
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
