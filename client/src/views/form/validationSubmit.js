const validationSubmit = (pokemon) => {
    const errors = {}
    // datos obligatorios que se envien sin modificar nada (deben validarse)
    if(pokemon.name === ""){
        errors.name = "debe contener un nombre"
    }
    if(pokemon.types.length === 0){
        errors.types = "debe contener al menos un tipo"
    }
    // datos obligatorios que se envian modificados sin nada (deben validarse)
    if(pokemon.name.length > 0){
        const regexName = /^[a-zA-Z]+$/
        if(pokemon.name.length < 3 || pokemon.name.length > 15){
            errors.name = "debe de tener entre 3 a 15 caracteres"
        }
        if(!regexName.test(pokemon.name)){
        errors.name = "debe de contener solo letras"
        }
    }
    // datos no obligatorios que se envian con errores (deben validarse)
    if(pokemon.height !== null){
        if(pokemon.height <= 0 || pokemon.height >= 1000){
            errors.height = "debe ser mayor a 0kg y menor a 1000kg"
        }
    }
    if(pokemon.weight !== null){
        if(pokemon.height <= 0 || pokemon.height >= 1000){
            errors.height = "debe ser mayor a 0kg y menor a 1000kg"
        }
    }
    return errors
}

export default validationSubmit