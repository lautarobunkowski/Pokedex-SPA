const validation = (pokemon) => {
    const errors = {}
//   typeName -----------------------
if(pokemon.name){
    const regexName = /^[a-zA-Z]+$/
    if(pokemon.name.length < 3 || pokemon.name.length > 15){
        errors.name = "debe de tener entre 3 a 15 caracteres"
    }
    if(!regexName.test(pokemon.name)){
        errors.name = "debe de contener solo letras"
    }
}
// ----------------------------------------------
// HEIGHT ---------------------------------------
if(pokemon.height){
    if(pokemon.height <= 0 || pokemon.height >= 1000){
        errors.height = "debe ser mayor a 0kg y menor a 1000kg"
    }
}
// ----------------------------------------------
// WEIGHT ---------------------------------------
if(pokemon.weight){
    if(pokemon.weight <= 0 || pokemon.weight >= 20){
        errors.weight = "debe ser mayor a 0m y menor a 20m"
    }
}
// ----------------------------------------------


return errors;
}

export default validation