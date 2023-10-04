const axios = require("axios")
const url = 'https://pokeapi.co/api/v2/type'

const getTypesPokemon = async(req,res) => {
    try {
        const {data} = await axios(url)
        const pokemonTypes = data.results.map(e => {
            return e.name
        })

        res.status(200).json(pokemonTypes)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getTypesPokemon