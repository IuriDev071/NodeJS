const express = require('express')
const mongoose = require('mongoose')
// const axios = require('axios').create({baseURL: "https://localhost:3000"})
const app = express()
const port = 3002
const User = mongoose.model('User', {nome: String, senha: String})

app.use(express.json())

mongoose.connect('mongodb+srv://Admin:<password>@cluster0.ndtwj.mongodb.net/test')

app.use(express.static(__dirname + '/private/frontend'))

app.get('/', (req, res) => {
    res.json('Backend funcionado')
      res.status(200, 'Ok')
})

app.get('/login', (req, res) => {
    res.json(req.body)
     res.status(200, 'OK')
})

app.get('/usuarios', (req, res) => {
    if(nome != null || senha != null) {
        const newUser = new User(req.body)
          newUser.save()
          .then((result) => {
              console.log(result)
          }).catch((error) => {
              console.log(error)
          })
            res.status(201, 'Created')
    }
})

app.listen(port, () => {
    console.log("Rodando na porta 3002\nDigite a URL: localhost:3000")
})
