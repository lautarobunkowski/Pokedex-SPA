const axios = require("axios")
const URL = "https://pokeapi.co/api/v2/pokemon/";
const {Pokemon, Type} = require("../db.js")

const getPokemonByName = async(req,res) => {
    const {name} = req.query;
    try {
        let pokemonDB = await Pokemon.findOne({
            where: {name:name},
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

        const {data} = await axios(URL+name.toLowerCase())
        const pokeTypes = data.types.map(type => {
            return type.type.name
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
            "image":data.sprites.other["official-artwork"].front_default,
            "stats":data.stats,
            "types":pokeTypes,
            "weight":data.weight,
        }
        res.status(200).send(pokemon)

    } catch (error) {
        if(error.response.status === 404) {
            return res.status(404).send(`Pokemon con el nombre ${name} no Encontrado`)
        }
        res.status(500).send(error.message)
    }
}

module.exports = getPokemonByName