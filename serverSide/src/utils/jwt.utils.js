const JWT = require("jsonwebtoken");


require("dotenv").config()

//verify the token 
const verifyToken = (token) => {
 const secret=process.env.SERCRET
  try {
    const {payload} = JWT.verify(token, secret);
    return { error: null, payload };
  } catch (error) {
    return { error:error.message, payload: null };
  }
};


// operating on a signle token 
const createToken = (value,expiry) => {
  const secret=process.env.SERCRET
  console.log({secret})
  return JWT.sign(value, secret,  { algorithm: "HS256" },{expiresIn:expiry});
 };



module.exports ={ createToken, verifyToken };
