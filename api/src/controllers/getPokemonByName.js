const axios = require("axios")
const URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonByName = async(req,res) => {
    try {
        const {name} = req.query;
        const {data} = await axios(URL+name.toLowerCase())
        res.status(200).send(data)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getPokemonByName