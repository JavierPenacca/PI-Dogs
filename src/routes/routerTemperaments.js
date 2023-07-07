const { Router } = require('express');
const { getAllTemperamentsHandler } = require('../handlers/temperamentHandler')

const routerTemperaments = Router();

routerTemperaments.get("/", getAllTemperamentsHandler)

module.exports = routerTemperaments;