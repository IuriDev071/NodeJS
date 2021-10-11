const { json } = require('express')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3005

const User = mongoose.model('User', {email: String, senha: String})

mongoose.connect('mongodb+srv://Iuri:iurinm890@cluster0.ndtwj.mongodb.net/test')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200, 'Ok').json('Backend rodando')
})

app.post('/usuario', (req, res) => {
    const {email, senha} = req.query
    const newUser = new User(req.query)
    if (email != null && senha != null) {
        newUser.save(req.query)
        .then((result) => {
            res.json(result)
        }).catch((error) => {
            console.log(error)
        })
        return res.status(201, 'Created').json(req.query)
    } else {
        return res.status(400, 'Bad request').json(error)
    }
})

app.get('/usuario/login/', async (req, res) => {
    const {email, senha} = req.query
    const usuarios = await User.find()
    res.status(200, 'Ok').json(usuarios)
})

app.delete('/usuario/remove/', async (req, res) => {
    const {email, senha} = req.query
    const usersDel = await User.remove()
    res.status(202, 'Accepted').json(usersDel)
})

app.listen(port, () => {
    console.log('Rodando na porta 3005')
})