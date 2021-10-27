const mongoose = require('mongoose')
const User = mongoose.model('User', { nome: String, email: String, senha: String, senhaConfirm: String })
const axios = require('axios').create({ baseURL: "http://localhost:3031/" })

mongoose.connect('mongodb+srv://Iuri:admin123@cluster0.ndtwj.mongodb.net/test')

function UserRoute(app) {
    app.route('/usuario')
        .get((req, res) => {
            const { nome, email, senha, senhaConfirm } = req.body
            const newUser = new User(req.body)
            if (nome != null && email != null && senha != null && senhaConfirm != null) {
                newUser.save(req.body)
                    .then((result) => {
                        res.json(result)
                    }).catch((error) => {
                        res.json(error)
                    })
                return res.status(201, 'Created').json(req.body)
            } else {
                return res.status(400, 'Bad request').json('erro no post')
            }
        })

    app.route('/usuario/login/')
        .get(async (req, res) => {
            const { email, senha } = req.query
            const usuarios = await User.find({ email, senha })
            res.status(200, 'Ok').json(usuarios)
        })

    app.route('/usuario/remove/')
        .get(async (req, res) => {
            const { nome, email, senha, senhaConfirm } = req.body
            const usersDel = await User.remove({ nome })
            res.status(202, 'Accepted').json(usersDel)
        })
}

module.exports = UserRoute;