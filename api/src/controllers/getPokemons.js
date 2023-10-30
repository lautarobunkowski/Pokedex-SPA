const axios = require("axios")
const {Pokemon, Type} = require("../db.js")

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

const pokeDB = async(model) => {
    const data = await model.findAll({
        include:{
            model:Type,
            attributes:["type"],
            through:{
                attributes:[],
            },
        },
    })

    return data.map(e => {
        const typesArray = e.dataValues.types.map((type) => type.type);
        return {...e.dataValues, types:[...typesArray]}
    })
}

const getPokemons = async(req,res) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`
    try {
        const pokemonsApi = await pokeApi(url) //recibe la url para mapear a todos los pokemons
        const pokemonsDB = await pokeDB(Pokemon) //recibe el modelo y me trae a todos los pokemons de la DB
        const pokemons = [...pokemonsApi, ...pokemonsDB]
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getPokemons