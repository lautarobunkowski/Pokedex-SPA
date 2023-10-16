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

if(pokemon.name === '' ){
    errors.name = "nombre obligatorio"
}

// ----------------------------------------
//   URL ----------------------------------
if(pokemon.image){
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
    if(!regex.test(pokemon.image)){
        errors.image = "debe contener un URL valida"
    }
}
if(pokemon.image === ''){
    errors.image = "url obligatorio"
}
// ----------------------------------------------
// HEALTH ---------------------------------------
if(pokemon.health){
    if(pokemon.health < 1 || pokemon.health > 200){
        errors.health = "debe tener un rango de entre 1 a 200"
    }
}
if(pokemon.health === ''){
    errors.image = "health obligatorio"
}
// ----------------------------------------------
// ATTACK ---------------------------------------
if(pokemon.attack){
    if(pokemon.attack < 1 || pokemon.attack > 200){
        errors.attack = "debe tener un rango de entre 1 a 200"
    }
}
if(pokemon.attack === ''){
    errors.attack = "attack obligatorio"
}
// ----------------------------------------------
// DEFENSE ---------------------------------------
if(pokemon.defense){
    if(pokemon.defense < 1 || pokemon.defense > 200){
        errors.defense = "debe tener un rango de entre 1 a 200"
    }
}
if(pokemon.defense === ''){
    errors.defense = "defense obligatorio"
}
// ----------------------------------------------
// SPEED ---------------------------------------
if(pokemon.speed){
    if(pokemon.speed < 1 || pokemon.speed > 200){
        errors.speed = "debe tener un rango de entre 1 a 200"
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