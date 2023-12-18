const express =require("express")
const requireAdminAuth = require("../middlewares/require-auth.middlware")
const { logout, login } = require("../controllers/admin.controller")



const router = express.Router()

router.route("/login").post(login)
router.use(requireAdminAuth)
router.route("/logout").delete(requireAdminAuth,logout)

module.exports = router