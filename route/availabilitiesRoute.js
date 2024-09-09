import express from 'express'
import {getOpenings, makeBooking, showBookings} from '../controller/availabilitiesCont.js'
import {showBookingsDb} from '../model/availabilitiesDb.js'

const router = express.Router()

router.get('/fetchOpenings/:id/:month', getOpenings)
router.get('/myBookings/:id', showBookings)
router.post('/book', makeBooking)

export default router
