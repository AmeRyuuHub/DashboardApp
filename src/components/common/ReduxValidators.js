export const requeredLogin = value => {
    if (value)  return undefined;
    return "Fild is requered";
}

export const checkHexidecimal = value => {

    let macPattern = (value!==undefined)? new RegExp("[0-9A-Fa-f]{"+value.length+",}", "g"): null;
    if (macPattern===null || macPattern.test(value)) return undefined;
    return "Value is not in Hexаdecimal type"
}

export const checkRequired = value => {

    if (value && value.length>0) return undefined;
    return "Fild is required"
}


export const maxLengthCheck =(maxLength) => (value) =>{

    if (value.length>maxLength) return `Max length is ${maxLength} symbols`
}

export const loginCheck = value => {

    let macPattern = (value!==undefined)? new RegExp("[0-9A-Za-z]{"+value.length+",}", "g"): null;
    if (macPattern===null || macPattern.test(value)) return undefined;
    return "Login consists of latin characters only"
}

export const emailCheck = value => {

    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address'
      }
      return undefined;
}



