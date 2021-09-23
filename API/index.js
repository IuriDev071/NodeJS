const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./Rotas/userRoutes')

const app = express()
const port = 4000

app.use(bodyParser.urlencoded({ extended: false }))
userRoute(app)

app.get('/', (req,res) => {
    res.send("Hello World in NodeJS")
})

app.listen(port, () => console.log("Rodando na porta 4000"))