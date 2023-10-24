const validation = (pokemon) => {
    const errors = {}
//   typeName -----------------------
if(pokemon.name){
    const regexName = /^[a-zA-Z]+$/
    if(pokemon.name.length < 3 || pokemon.name.length > 12){
        errors.name = "rango de 3 a 12 caracteres"
    }
    if(!regexName.test(pokemon.name)){
        errors.name = "debe contener solo letras"
    }
}
// ----------------------------------------------
// HEIGHT ---------------------------------------
if(pokemon.height){
    if(pokemon.height <= 0 || pokemon.height >= 1000){
        errors.height = "rango: 0kg - 1000kg"
    }
}
// ----------------------------------------------
// WEIGHT ---------------------------------------
if(pokemon.weight){
    if(pokemon.weight <= 0 || pokemon.weight >= 20){
        errors.weight = "rango: 0m - 20m"
    }
}
// ----------------------------------------------


return errors;
}

export default validation