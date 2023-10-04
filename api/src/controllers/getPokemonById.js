const axios = require("axios")
const URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonById = async(req,res) => {
    try {
        const {id} = req.params;
        const {data} = await axios(URL+id)
        res.status(200).send(data)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getPokemonById