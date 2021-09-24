const express = require('express')
const { join } = require('path')
const path = require('path')

const router = express.Router()
const app = express()
const port = 4001

app.use(express.static(__dirname + '/public'))

router.get('/', (req, res) => {

    res.sendFile(path.join(__dirname + '/public/html/homePage.html'))

})

router.get('/calculator', (req, res) => {

    res.sendFile(path.join(__dirname + '/public/html/calculadora.html'))

})

app.use('/', router)

app.listen(port), () => {
    console.log("Rodando na porta 4001")
}