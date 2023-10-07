const axios = require("axios")
const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
const {Pokemon} = require("../db.js")

const pokeApi = async(url) => {
    const {data} = await axios(url)
    const pokePromises = data.results.map(async e=> {
        const {data} = await axios(e.url)
        return data;
    })

    const infoPokemons = await axios.all(pokePromises)
    
    return infoPokemons.map(p => {
        const pokeTypes = p.types.map(type => {
            return type.type.name
        })
        
        return {
            "abilities":p.abilities,
            "base_experience":p.base_experience,
            "forms":p.forms,
            "height":p.height,
            "id":p.id,
            // "moves":p.moves,
            "name":p.name,
            "order":p.order,
            "images":p.sprites.other["official-artwork"],
            "stats":p.stats,
            "types":pokeTypes,
            "weight":p.weight,
        }
    })
}

const pokeDB = async(model) => {
    const data = await model.findAll()
    return data.map(e => {
        return {...e.dataValues}
    })
}

const getPokemons = async(req,res) => {
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