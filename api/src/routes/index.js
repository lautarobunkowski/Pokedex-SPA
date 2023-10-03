const { Router } = require('express');
const getPokemons = require("../controllers/getPokemons.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.get('/pokemons', getPokemons)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
