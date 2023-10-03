const axios = require("axios")
const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async(req,res) => {
    try {
        const {data} = await axios(URL)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getPokemons