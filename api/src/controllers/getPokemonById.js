const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon/";
const {Pokemon} = require("../db.js")

const getPokemonById = async(req,res) => {
    const {idPokemon} = req.params;
    try {
        const pokemonDB = await Pokemon.findByPk(idPokemon)
        if(pokemonDB !== null){
            return res.status(200).send(pokemonDB.dataValues)
        }
        const {data} = await axios(url+idPokemon)
        res.status(200).send(data)
    } catch (error) {
        if(error.response.status === 404) {
            return res.status(404).send(`Pokemon con id ${idPokemon} no Encontrado`)
        }
        res.status(500).send(error)
    }
}

module.exports = getPokemonById