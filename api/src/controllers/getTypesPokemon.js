const axios = require("axios")
const url = 'https://pokeapi.co/api/v2/type'
const {PokemonType} = require("../db.js")

const getTypesPokemon = async(req,res) => {
    try {
        const {data} = await axios(url)
        const pokemonTypesNames = data.results.map(e => {
            return e.name
        })

        const pokemonTypesPromises = pokemonTypesNames.map(async e => {
            const [pokemonType] = await PokemonType.findOrCreate({
                where:{type:e},
                defaults:{
                    type:e
                }
            })
            console.log(pokemonType)
            return pokemonType.dataValues
        })

        Promise.all(pokemonTypesPromises)
        .then(response => {
            res.status(200).json(response)
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getTypesPokemon