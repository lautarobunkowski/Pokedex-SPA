const validationSubmit = (errors) => {
    
    if(errors.name || errors.image || errors.speed || errors.height || errors.weight || errors.types){
        return false
    }
    return false
}

export default validationSubmit