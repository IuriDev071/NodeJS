const express = require("express")
const app = express()
const port = 3000

const aviao = require("./aviao.js")
const caminhao = require("./caminhao.js")

app.use(express.json())

app.get('/aviao', (req, res) => {
    res.json(aviao)
})

app.get("/caminhao", (req, res) => {
    res.json(caminhao)
})

app.post('/.aviao', function(req, res) {
    aviao.push(req.body)
    res.json(aviao)
})

app.post('/.caminhao', function(req, res) {
    caminhao.push(req.body)
    res.json(caminhao)
})

app.delete("/caminhao/:id", function(req, res) {
    const removido = caminhao[req.params.id]
    caminhao.splice(req.params.id, 1)

    res.json(removido)
})

app.delete("/aviao/:id", function(req, res) {
    const remove = aviao[req.params.id]
    aviao.splice(req.params.id, 1)

    res.json(remove)
})

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = alertContents;
httpRequest.open('GET', "localhost:3000/aviao");
httpRequest.send();

function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

app.listen(port, () => {
  "Rodando na porta 3000"
})