const express = require('express')

const router = express()

const BuildingsController = require('../app/controller/BuildingsController')
const RoomsController = require('../app/controller/RoomsController')
const AmenityController =require('../app/controller/AmenityController')
const TanentController = require('../app/controller/TanentsConroller')
const ReviewsController = require('../app/controller/ReviewsController')

router.get('/buildings', BuildingsController.list)
router.post('/buildings', BuildingsController.create)
router.get('/buildings/:id',BuildingsController.show)
router.delete('/buildings/:id',BuildingsController.destroy)
router.put('/buildings/:id',BuildingsController.update)

router.get('/rooms', RoomsController.list)
router.post('/rooms',RoomsController.create)
router.get('/rooms/:id',RoomsController.show)
router.delete('/rooms/:id',RoomsController.destroy)
router.put('/rooms/:id',RoomsController.update)

router.get('/amenities', AmenityController.list)
router.post('/amenities',AmenityController.create)
router.get('/amenities/:id',AmenityController.show)
router.delete('/amenities/:id',AmenityController.destroy)
router.put('/amenities/:id',AmenityController.update)

router.get('/tanents', TanentController.list)
router.post('/tanents',TanentController.create)
router.get('/tanents/:id',TanentController.show)
router.delete('/tanents/:id',TanentController.destroy)
router.put('/tanents/:id',TanentController.update)

router.get('/reviews',ReviewsController.list)
router.post('/reviews',ReviewsController.create)
router.get('/reviews/:id',ReviewsController.show)
router.delete('/reviews/:id',ReviewsController.destroy)
router.put('/reviews/:id',ReviewsController.update)

module.exports = router