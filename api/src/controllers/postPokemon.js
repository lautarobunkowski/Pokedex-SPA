const axios = require("axios")
const { v4: uuidv4 } = require('uuid');
const {Pokemon, PokemonType} = require("../db.js")

const postPokemon = async(req,res) => {
    try {
        const {name, image, health, attack, defense, types, speed, heigth, weigth} = req.body;
        if(name === undefined || image === undefined || health === undefined || attack === undefined || defense === undefined || types === undefined){
            return res.status(400).send({error:"Faltan datos"})
        }
        if(types.length < 2 || health < 0 || attack < 0 || defense < 0 || speed < 0 || heigth < 0 || weigth < 0){
            return res.status(400).send({error:"Datos Incorrectos"})
        }
        const [pokemon, created] = await Pokemon.findOrCreate({
            where:{name},
            defaults:{
                id:`${uuidv4()}`,
                name,
                image, 
                health, 
                attack, 
                defense, 
                speed: null || speed,
                heigth: null || heigth,
                weigth: null || weigth,
            },
            // include:{
            //     model:PokemonType,
            //     attributes:["type"],
            //     through:{
            //         attributes:[],
            //     },
            // },
        })

        pokemon.addPokemonType(types)
        if(created) return res.status(200).send(pokemon)
        res.status(200).send(`Ya hay un Pokemon creado con el nombre ${name}`)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = postPokemon