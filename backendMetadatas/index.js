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
        "metragem do solo": "1000",
        "metragem construida": "500",
        "endereco": "Rua das Flores, 123",
    },
    {
        "uuid": "1234567890-1",
        "lote": "2",
        "quadra": "2",
        "proprietario": "João de Camargo",
        "metragem do solo": "250",
        "metragem construida": "195",
        "endereco": "Rua das Flores, 430",
    },
    {
        "uuid": "1234567890-2",
        "lote": "10",
        "quadra": "2",
        "proprietario": "Tiago Almeida",
        "numero do contrato": "01435736552",
        "metragem do solo": "500",
        "metragem construida": "495",
        "endereco": "Rua dos Lírios, 23",
    },
    {
        "uuid": "1234567890-3",
        "lote": "20",
        "quadra": "5",
        "proprietario": "Joaquim Cesar",
        "numero do contrato": "01234567893",
        "metragem do solo": "352",
        "metragem construida": "502",
        "endereco": "Rua dos Lírios, 52",
    },
    {
        "uuid": "1234567890-4",
        "lote": "2",
        "quadra": "5",
        "proprietario": "Luciano Hugo",
        "numero do contrato": "01234227893",
        "metragem do solo": "700",
        "metragem construida": "600",
        "endereco": "Rua 121, 52",
    },
]

app.get('/tokenMetadata', (req, res) => {
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
