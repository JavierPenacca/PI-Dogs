const { Router } = require('express');
const {
    getAllDogsHandler,
    getDogByIdHandler,
    // getDogsByNameHandler,
    createDogHandler,
    deleteDogHandler,
} = require('../handlers/dogHandler')

const routerDogs = Router();

routerDogs.get("/", getAllDogsHandler);
// routerDogs.get("/", getDogsByNameHandler);
routerDogs.get("/:id", getDogByIdHandler);
routerDogs.post("/", createDogHandler);
routerDogs.delete("/:id", deleteDogHandler);

module.exports = routerDogs;