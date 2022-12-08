const express = require('express')
const app = express()
const cors = require('cors');

app.use(express.json())
var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

const metadata = [
    {
        "uuid": "1234567890-0",
        "lote": "34",
        "quadra": "3",
        "proprietario": "João da Silva",
        "metragem_solo": "1000",
        "metragem_construida": "500",
        "endereco": "Rua das Flores, 123",
        "imgPath": "/assets/casa1.jpg" 
    },
    {
        "uuid": "1234567890-1",
        "lote": "2",
        "quadra": "2",
        "proprietario": "João de Camargo",
        "metragem_solo": "250",
        "metragem_construida": "195",
        "endereco": "Rua das Flores, 430",
        "imgPath": "/assets/casa2.jpg" 
    },
    {
        "uuid": "1234567890-2",
        "lote": "10",
        "quadra": "2",
        "proprietario": "Tiago Almeida",
        "numero do contrato": "01435736552",
        "metragem_solo": "500",
        "metragem_construida": "495",
        "endereco": "Rua dos Lírios, 23",
        "imgPath": "/assets/casa3.jpg" 
    },
    {
        "uuid": "1234567890-3",
        "lote": "20",
        "quadra": "5",
        "proprietario": "Joaquim Cesar",
        "numero do contrato": "01234567893",
        "metragem_solo": "352",
        "metragem_construida": "502",
        "endereco": "Rua dos Lírios, 52",
        "imgPath": "/assets/casa4.jpg" 
    },
    {
        "uuid": "1234567890-4",
        "lote": "2",
        "quadra": "5",
        "proprietario": "Luciano Hugo",
        "numero do contrato": "01234227893",
        "metragem_solo": "700",
        "metragem_construida": "600",
        "endereco": "Rua 121, 52",
        "imgPath": "/assets/casa5.jpg"
    },
]

app.get('/tokenMetadata', (req, res) => {
    console.log("solicitado metadata")
    const id = req.query.id
    if(!id)
        res.send(metadata)
    else 
        res.send(metadata[req.query.id])
})

app.use(cors());

app.listen(8080, () => {
    console.log('Example app listening on port 8080!')
})
