const axios = require("axios")
const {Pokemon, Type} = require("../db.js")

// const pokeApi = async(url) => {
//     const {data} = await axios(url)
//     const pokePromises = data.results.map(async pokemon=> {
//         const {data} = await axios(pokemon.url)
//         return data;
//     })

//     const infoPokemons = await axios.all(pokePromises)
    
//     return infoPokemons.map(p => {
//         return {
//             // "abilities":p.abilities,
//             // "base_experience":p.base_experience,
//             // "forms":p.forms,
//             // "height":p.height,
//             // "moves":p.moves,
//             // "order":p.order,
//             // "stats":p.stats,
//             // "weight":p.weight,
//             "id":p.id,
//             "name":p.name,
//             "image":p.sprites.other["official-artwork"].front_default,
//             "types":p.types.map(type => {
//                 return type.type.name
//             }),
//         }
//     })
// }
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
    const {offset, limit} = req.query
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    console.log(url)
    try {
        const pokemonsApi = await pokeApi(url) //recibe la url para mapear a todos los pokemons
        const pokemonsDB = await pokeDB(Pokemon) //recibe el modelo y me trae a todos los pokemons de la DB
        const pokemons = [...pokemonsApi, ...pokemonsDB]
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// const getPokemons = async(req,res) => {
//     try {
//         const {data} = await axios(url)
//         const pokePromises = data.results.map(async pokemon=> axios(pokemon.url))

//         Promise.all(pokePromises)
//         .then(responses => {
//             const pokemons = responses.map(p => {
//                 const pokeTypes = p.data.types.map(type => type.type.name)
                    
//                 return {
//                     "abilities":p.data.abilities,
//                     "base_experience":p.data.base_experience,
//                     "forms":p.data.forms,
//                     "height":p.data.height,
//                     "id":p.data.id,
//                     // "moves":p.moves,
//                     "name":p.data.name,
//                     "order":p.data.order,
//                     "image":p.data.sprites.other["official-artwork"].front_default,
//                     "stats":p.data.stats,
//                     "types":pokeTypes,
//                     "weight":p.data.weight,
//                 }
//             })
//             res.status(200).json(pokemons)
//         })
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// }

module.exports = getPokemons