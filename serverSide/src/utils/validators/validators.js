const noneValideMail="azeaze>@yahoo.com15"
const isValideMail=email=>{
    let is_valid=false
    const arrayOfValidDomains=["@yahoo.com","@live.com","@yahoo.co.uk","@gmail.com","@outlook","@hotmail.com","@msn.com","@hotmail.co.uk","@hotmail.com","@wanadoo.fr","@yahoo.fr"]
    const arrayOfForbiddenChars=["<",">","script","'",`"`]
    
    if (!/^.+@.+\..+$/.test(email)) return false;
    
    for (let i=0;i<arrayOfValidDomains.length;i++){
        if(email.includes(arrayOfValidDomains[i])){
           is_valid=true 
        }
        //console.log(` is ${arrayOfValidDomains[i]} inculed : ${email.includes(arrayOfValidDomains[i])}`)
    }
    for (let i=0;i<=arrayOfForbiddenChars.length;i++){
        if (email.includes(arrayOfForbiddenChars[i])){
            return false
        }
    }
    return is_valid
}



const joi=require("joi")

const validateAdminLoginData = (data)=>{
    const schema = joi.object({
        input: joi.string().required().min(3).max(30).regex(/^[a-zA-Z0-9_]+$/),
        password: joi.string().required().min(8).max(30)
    })
    return schema.validate(data)
}

module.exports={isValideMail,validateAdminLoginData}
/* 65537n */