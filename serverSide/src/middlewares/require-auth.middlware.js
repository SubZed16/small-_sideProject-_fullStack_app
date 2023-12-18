const { verifyToken } = require("../utils/jwt.utils");

const requireAdminAuth = async (req, res, next) => {
    try {

        let cookies_list = req.headers.cookie;

        if (!cookies_list) return res.status(401).json({ success: false, respond :{ error :"No valid auth token" } })
        
        cookies_list = cookies_list.split(";")

        const login_token = cookies_list.find(cookie => cookie.startsWith("login=") || cookie.startsWith(" login="))?.split("=")[1];

        if (!login_token) {
            return res.status(401).json({ success: false, respond :{ error :"No token was provided"} })
        }
        //verifing the token 
        const { error } = verifyToken(login_token);
        
        if (error ) {
            return res.status(401).json({ success: false, respond :{ error } })
        }
        
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, respond: { data: "", msg: "", error: "server error" } })
    }
}
module.exports = requireAdminAuth