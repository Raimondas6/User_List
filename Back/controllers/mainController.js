const posts = []

module.exports = {
    createPost: (req, res) => {
        // req.body - paema is front endo reiksmes
        posts.push(req.body)
        console.log(posts)

        res.send({message: "ok"})
    }
}