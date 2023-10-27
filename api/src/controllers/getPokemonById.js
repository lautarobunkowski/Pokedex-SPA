const axios = require("axios");
const url = "https://pokeapi.co/api/v2/pokemon/";
const {Pokemon,Type} = require("../db.js")

const getPokemonById = async(req,res) => {
    const {idPokemon} = req.params;
    try {
        const pokemonDB = await Pokemon.findByPk(idPokemon,{
            include:{
                model:Type,
                attributes:["type"],
                through:{
                    attributes:[],
                },
            },
        })
        if(pokemonDB !== null){
            const typesArray = pokemonDB.dataValues.types.map((type) => type.type);
            pokemonDB.dataValues.types = typesArray;
            
            return res.status(200).send(pokemonDB.dataValues)
        }
        const {data} = await axios(url+idPokemon)
        const pokeTypes = data.types.map(type => {
            return type.type.name
        })
        const pokemon = {
            "id":data.id,
            "name":data.name,
            "image":data.sprites.other["official-artwork"].front_default,
            "health":data.stats[0].base_stat,
            "attack":data.stats[1].base_stat,
            "defense":data.stats[2].base_stat,
            "speed":data.stats[5].base_stat,
            "sp-attack":data.stats[3].base_stat,
            "sp-defense":data.stats[4].base_stat,
            "height":data.height,
            "weight":data.weight,
            "created":false,
            "types":pokeTypes,
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