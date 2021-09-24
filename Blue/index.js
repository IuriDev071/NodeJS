const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

const port = 8080

app.use(express.static(__dirname + '/public'))

router.get('/html/feed.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/feed.html'))
})

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/login.html'))
})

app.use('/', router)

app.listen(port, () => {
    console.log('Site rodando na porta 8080')
})