import express from 'express'
import {getOpenings, makeBooking} from '../controller/availabilitiesCont.js'

const router = express.Router()

router.get('/:id/:month', getOpenings)
router.post('/book', makeBooking)

export default router