const { json } = require('express')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3005

const User = mongoose.model('User', {email: String, senha: String, nome: String})

mongoose.connect('mongodb+srv://admin:iurinm890@cluster0.ofjky.mongodb.net/test')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200, 'Ok').json('Backend rodando')
})

app.get('/usuario/login/', async (req, res) => {
    const {email, senha} = req.query
    const usuarios = await User.find(email, senha)
    res.status(200, 'Ok').json(usuarios)
})

app.post('/usuario', (req, res) => {
    const {nome, email, senha} = req.query
    const newUser = new User(req.query)

      if (email != null && senha != null && nome != null) {
            newUser.save(req.query)
            .then((result) => {
                res.json(result)
            }).catch((error) => {
                console.log(error)
            })
            return res.status(201, 'Created').json(req.query)
        } else {
            return res.status(400, 'Bad request')
        }
    })
    
// app.delete('/usuario/remove/', async (req, res) => {
///     const {email, senha, nome} = req.query
//     const usersDel = await User.remove(email, senha, nome)
//     res.status(202, 'Accepted').json(usersDel)
// })

app.listen(port, () => {
    console.log('Rodando na porta 3005')
})