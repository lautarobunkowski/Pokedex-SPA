const { Router } = require('express');
const getPokemons = require("../controllers/getPokemons.js")
const getPokemonById = require("../controllers/getPokemonById.js")
const getPokemonByName = require("../controllers/getPokemonByName.js")
const postPokemon = require("../controllers/postPokemon.js")
const getTypesPokemon = require("../controllers/getTypesPokemon.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.get('/pokemons', getPokemons)
router.get('/pokemons/:id', getPokemonById)
router.get('/pokemons/', getPokemonByName)
router.post('/pokemons', postPokemon)
router.get('/types', getTypesPokemon)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
