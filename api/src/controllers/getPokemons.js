const axios = require("axios")
const url = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async(req,res) => {
    try {
        const {data} = await axios(url)
        const pokePromises = data.results.map(async e=> {
            const {data} = await axios(e.url)
            return data
        })

        Promise.all(pokePromises)
        .then((response) => {
            res.status(200).json(response)
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getPokemons