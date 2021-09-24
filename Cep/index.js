const express = require('express')
const axios = require('axios').create({baseURL: "https://cep.awesomeapi.com.br/%22%7Dr"})

const app = express()

app.use(express.json())

app.get('/cep', (req, res) =>{
    const cepData = axios({
        url: "/json/88058222",
        method: "GET"
    }).then((response) => {
        console.log(response);
        res.json(response.data);
    }).catch((error) => {
        console.log(error);
        res.json(error);
    })
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001.\nDigite localhost:3001")
})