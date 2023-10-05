const axios = require("axios")
const URL = "https://pokeapi.co/api/v2/pokemon/";
const {Pokemon, PokemonType} = require("../db.js")

const getPokemonByName = async(req,res) => {
    const {name} = req.query;
    try {
        const pokemonDB = await Pokemon.findOne({
            where: {name:name},
            include:{
                model:PokemonType,
                attributes:["type"],
                through:{
                    attributes:[],
                },
            },
        })
        if(pokemonDB !== null){
            return res.status(200).send(pokemonDB.dataValues)
        }
        const {data} = await axios(URL+name.toLowerCase())
        res.status(200).send(data)

    } catch (error) {
        if(error.response.status === 404) {
            return res.status(404).send(`Pokemon con el nombre ${name} no Encontrado`)
        }
        res.status(500).send(error.message)
    }
}

module.exports = getPokemonByName