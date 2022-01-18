// var express = require ('express');
// var port = 3000
// const app = express();

// app.listen(3000, () => 
// console.log('Servidor iniciado na porta 3000')
// );

// app.get('/', function(req, res) {
// res.json({status:'servidor rodando'})
// });

const express = require('express');
const app = express();
app.use("/public", express.static(__dirname + "/public"));


// const tabela = require()
// const aplicacao = require('app')
// const style = require('style')

app.get('/', (req, res) => {
    return res.sendFile(__dirname + "/view/index.html")
})

// app.get('/', (req, res) => {
//     return res.sendFile(__dirname + "/app.js")
// })

app.listen(3000);