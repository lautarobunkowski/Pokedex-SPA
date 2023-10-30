const axios = require("axios")

const genPokemons = [
    {name:"firstGen", offset: 0, limit:151},
    {name:"secondGen", offset: 151, limit:100},
    {name:"thirdGen", offset: 251, limit:135},
    {name:"fourthGen", offset: 386, limit:107},
    {name:"fifthGen", offset: 493, limit:156},
    {name:"sixthGen", offset: 649, limit:72},
    {name:"seventhGen", offset: 721, limit:88},
    {name:"eighthGen", offset: 809, limit:96},
    {name:"ninthGen", offset: 905, limit:112},
]

const getPokemonGen = async(req,res) => {
    const pokeApi = async(url) => {
        const {data} = await axios(url)
        const pokePromises = data.results.map(pokemon => axios(pokemon.url))
    
        return Promise.all(pokePromises)
        .then(responses => {
            return responses.map(p => {
                return {
                    "created": false,
                    "id":p.data.id,
                    "name":p.data.name,
                    "attack":p.data.stats[1].base_stat,
                    "image":p.data.sprites.other["official-artwork"].front_default,
                    "types":p.data.types.map(type => {
                        return type.type.name
                    }),
                }
            })
        })
    }
    try {
        const {gen} = req.query
        const currentGen = genPokemons.find(generation => generation.name === gen)
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=${currentGen.offset}&limit=${currentGen.limit}`
        const pokemonsApi = await pokeApi(url) //recibe la url para mapear a todos los pokemons
        res.status(200).json(pokemonsApi)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getPokemonGen