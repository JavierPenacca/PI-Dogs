const { Router } = require('express');
const routerDogs = require("./routerDogs");
const routerTemperaments = require("./routerTemperaments");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/dogs", routerDogs);
router.use("/temperaments", routerTemperaments);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
