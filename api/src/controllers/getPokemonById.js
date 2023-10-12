const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon/";
const {Pokemon,PokemonType} = require("../db.js")

const getPokemonById = async(req,res) => {
    const {idPokemon} = req.params;
    try {
        const pokemonDB = await Pokemon.findByPk(idPokemon,{
            include:{
                model:PokemonType,
                attributes:["type"],
                through:{
                    attributes:[],
                },
            },
        })
        if(pokemonDB !== null){
            return res.status(200).send(pokemonDB.dataValues)
        }
        const {data} = await axios(url+idPokemon)
        const pokeTypes = data.types.map(type => {
            return type.type.name
        })
        const pokeStats = data.stats.map(stat => {
            return {
                "name":stat.stat.name,
                "base_state":stat.base_stat
            }
        })
        const pokemon = {
            "abilities":data.abilities,
            "base_experience":data.base_experience,
            "forms":data.forms,
            "height":data.height,
            "id":data.id,
            // "moves":p.moves,
            "name":data.name,
            "order":data.order,
            "images":data.sprites.other["official-artwork"],
            "stats":pokeStats,
            "types":pokeTypes,
            "weight":data.weight,
        }
        res.status(200).send(pokemon)
    } catch (error) {
        // if(error.response.status === 404) {
        //     return res.status(404).send(`Pokemon con id ${idPokemon} no Encontrado`)
        // }
        res.status(500).send(error.message)
    }
}

module.exports = getPokemonById