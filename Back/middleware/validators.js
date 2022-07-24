const {createPost} = require("../controllers/mainController")

module.exports = {
    validateForm: (req, res, next) => {
        console.log(req.body)
        const form = req.body
        if (form.name.length < 1 || form.name.length > 30) return res.send({message: "username can't be longer than 30 letters"})
        if (form.name.toLowerCase() === "john") return res.send({message: "name john can't be used"})
        next()
    }
}