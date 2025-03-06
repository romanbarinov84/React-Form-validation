 export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password)
}


export const checkPasswordMatch = (password,confirmPassword) => {
    return password === confirmPassword
}

export const checkRequiredFields =(fields) =>{
   return fields.every((field) => field.trim())
}