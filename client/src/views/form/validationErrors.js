const validationErrors = (errors) => {
  if(errors.name || errors.image || errors.height || errors.weight || errors.types){
    return false
  }
  return true
}

export default validationErrors