const validationSubmit = (pokemon) => {
    if(pokemon.name && pokemon.image && pokemon.health && pokemon.attack && pokemon.defense && pokemon.types.length >= 1){
        return true
    }
    return false
}

export default validationSubmit