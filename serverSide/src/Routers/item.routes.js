const express =require("express")
const requireAdminAuth = require("../middlewares/require-auth.middlware")
const { getItemById, createItem, patchItemById, deleteItemById, getAllItem } = require("../controllers/item.controller")



const router = express.Router()

/* router.use(requireAdminAuth) */
router.route("/getall").get(getAllItem)
router.route("/").post(createItem)
router.route("/:id").get(getItemById).patch(patchItemById).delete(deleteItemById)

module.exports = router