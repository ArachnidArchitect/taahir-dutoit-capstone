import express from 'express'
import {getOpenings, makeBooking, showBookings, getSlots, insertAvailability} from '../controller/availabilitiesCont.js'
import { verifyToken } from '../middleware/authenticate.js'

const router = express.Router()

router.get('/fetchSlots', getSlots)
router.get('/fetchOpenings/:id/:month', getOpenings)
router.get('/myBookings/:id', showBookings)
router.post('/book', makeBooking)
router.post('/insert',verifyToken, insertAvailability)

export default router
