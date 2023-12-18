const Admin = require("../DB/models/admin.models");
const { createToken } = require("../utils/jwt.utils");
const { validateAdminLoginData } = require("../utils/validators/validators");

const logout = (req, res) => {
    res.clearCookie("ADLOI");
    res.clearCookie("ASEO");
    return sendResponse(res, true, 200, { msg: "Admin logged out successfully! 🐱‍👤" })
}

const login = async (req, res) => {
    try {
    
        const { error, value } = validateAdminLoginData(req.body)
        if (error) return res.status(400).json({ success: false, respond: { error: error.details[0].message } })

        const { input, password } = value
        // Find the user by username and check if the password is correct
        const user = await Admin.findOne({ username: input })
        if (!user || !(await Admin.verifyPassword(password, user.password))) return res.status(401).json({ success: false, respond: { error: "Invalid email or password" } })

        const token = createToken(input,"15m")
        console.log({token})
        res.cookie("login", token, { maxAge: 8 * 60 * 60 * 1000, httpOnly: true });

        // Return success response with the login token, admin logged in successfully:D! 
        return res.status(200).json({success:true,respond:{data: user.username,token} })

    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false, error:"Server Error"})
    }
}


module.exports={
    login,
    logout
}