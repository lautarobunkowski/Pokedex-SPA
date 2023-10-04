const axios = require("axios")

const postPokemon = async(req,res) => {
    try {
        const {name, image, health, attack, defense, speed, heigth, weigth} = req.body;
        if(name === undefined || image === undefined || health === undefined || attack === undefined || defense === undefined){
            return res.status(400).send({error:"Faltan datos"})
        }
        if(health < 0 || attack < 0 || defense < 0 || speed < 0 || heigth < 0 || weigth < 0){
            return res.status(400).send({error:"Datos Incorrectos"})
        }
        res.status(200).send({name, image, health, attack, defense, speed, heigth, weigth})

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = postPokemon