const express = require("express")
const app = express()
const cors = require("cors")

app.listen(8000)

app.use(cors())
app.use(express.json())

const router = require("./router/mainRouter")
app.use("/", router)