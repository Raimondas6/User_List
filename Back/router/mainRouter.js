const express = require("express")
const router = express.Router()
const {createPost} = require("../controllers/mainController")
const {validateForm} = require("../middleware/validators")

router.post("/createPost", validateForm, createPost)

module.exports = router