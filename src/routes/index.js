const { Router } = require("express");
const dogsHandler = require("../handlers/dogsHandler");
const dogByIdHandler = require("../handlers/dogsByIdHandler");
const dogPostHandler = require("../handlers/dogPostHandler");
const temperamentsHandler = require("../handlers/temperamentsHandler");

const router = Router();

router.get("/dogs", dogsHandler);

router.get("/dogs/:id", dogByIdHandler);

router.post("/dogs", dogPostHandler);

router.get("/temperaments", temperamentsHandler);

module.exports = router;
