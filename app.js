const UserRoute = require('./Routes/user')
const { json } = require('express')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3031

var http = require('http')

app.use(bodyParser.urlencoded({ extended: false }))
UserRoute(app)

app.use(express.json())

// const User = mongoose.model('User', { nome: String, email: String, senha: String, senhaConfirm: String })
// mongoose.connect('mongodb+srv://Iuri:admin123@cluster0.ndtwj.mongodb.net/test')
// app.use(require('cors')())


app.get('/', (req, res) => {
    res.status(200, 'Ok').json('Backend rodando')
})

// app.post('/usuario', (req, res) => {
//     const { nome, email, senha, senhaConfirm } = req.body
//     const newUser = new User(req.body)
//     if (nome != null && email != null && senha != null && senhaConfirm != null) {
//         newUser.save(req.body)
//             .then((result) => {
//                 res.json(result)
//             }).catch((error) => {
//                 res.json(error)
//             })
//         return res.status(201, 'Created').json(req.body)
//     } else {
//         return res.status(400, 'Bad request').json('erro no post')
//     }
// })

// app.get('/usuario/login/', async (req, res) => {
//     const { email, senha } = req.body
//     const usuarios = await User.find(email, senha)
//     res.status(200, 'Ok').json(usuarios)
// })

// app.delete('/usuario/remove/', async (req, res) => {
//     const { nome, email, senha, senhaConfirm } = req.body
//     const usersDel = await User.remove(nome)
//     res.status(202, 'Accepted').json(usersDel)
// })

var server = http.createServer(app)
server.listen(PORT)
console.log("rodando na porta 3031")