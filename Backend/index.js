const express = require('express')
const mongoose = require('mongoose')
// const axios = require('axios').create({baseURL: "https://cep.awesomeapi.com.br/%22%7Dr"})
const User = mongoose.model('User',  { email: String, nome: String, senha: String})
mongoose.connect('mongodb+srv://Iuri:<password>@cluster0.ndtwj.mongodb.net/test')

const app = express()

app.use(express.json())

app.post('/cadastro', (req, res) => {
    
    const {email, senha} = res.json(req.body)

    if (email != null && senha != null) {

        const newUser = new User(req.body)

        newUser.save()
        .then(() => {
            console.log("Good")
        }).catch(() => {
            console.log("Bad")
        })

        res.status(201, 'Created').json(req.body)

    } else {

        return res.status(400, 'Bad request').json( {mensagem: "O campo de email e senha estão incorretos"} )

    }
})

app.get('/usuarios/login', async (req, res) => {
    const usuarios = await User.find()

    res.status(200, 'OK')
    res.json(usuarios)
})

// app.delete('/usuarios', (req, res) => {
//     res.status(200, 'DELETE')
//     res.json(req.body)
// })

app.listen(3001, () => {
    console.log("Rodando na porta 3001.\nDigite localhost:3001")
})