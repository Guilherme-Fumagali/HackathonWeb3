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
        "imgPath": "/assets/casa1.jpg",
        "tokenLink": "https://explorer.celo.org/alfajores/tx/0x80e77f2feab123743f622052c1da9bbc861479c914e91605be03d5a719fd28ea"
    },
    {
        "uuid": "1234567890-1",
        "lote": "2",
        "quadra": "2",
        "proprietario": "João de Camargo",
        "metragem_solo": "250",
        "metragem_construida": "195",
        "endereco": "Rua das Flores, 430",
        "imgPath": "/assets/casa2.jpg",
        "tokenLink": "https://explorer.celo.org/alfajores/tx/0x556cf373a83058faffb432aec6bcba1a577a2fbdde863a6b1ec15491a0efb002"
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
        "imgPath": "/assets/casa3.jpg" ,
        "tokenLink": "https://explorer.celo.org/alfajores/tx/0x6e578987889a75217dfbeab32cf5264bc087b7853a03857fdffaeed6ff209a1f"
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
        "imgPath": "/assets/casa4.jpg",
        "tokenLink": "https://explorer.celo.org/alfajores/tx/0xd172b19f6b9b140e57a28366c4c4df257feace974560013fdf0cb2e7afdd02cf"
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
        "imgPath": "/assets/casa5.jpg",
        "tokenLink": "https://explorer.celo.org/alfajores/tx/0xa8d011fd3fdd35bd83f1f36c0fcc55d0773c3ba3e29ae6e18e7986e0256704fc/token-transfers"
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
