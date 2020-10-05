const cardController = require('../controllers/cardControllers');
const route = require('express').Router()

route.post("/addCardes",cardController.createCarde)
route.get("/getCardes",cardController.getCardes)

module.exports = route