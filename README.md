# [HackathonWeb3](https://patrimoniodauniaonaweb3.hackerearth.com/pt-br/#overview)
Paricipantes
* [Guilherme Fumagali Marques](https://github.com/Guilherme-Fumagali)
* [Leonardo Toshi Kimura](https://github.com/leonardotkimura)
* [Rafael Loureiro Castro](https://github.com/leafax)
* [Rodrigo Amaral](https://github.com/rodrigoamral)

## Introdução


Vídeo de apresentação do protótipo: <https://drive.google.com/file/d/12y6-hVuRCDkjuo1U4NaOmHZg-1B6UCN1/view?usp=sharing>

## Instalação
Instruções para instalação e inicialização da ferramenta nas distribuições linux Ubuntu:

### Dependências 
#### 1. nodejs
```
sudo apt update
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```
#### 2. Git
```
sudo apt-get install git
```

### Download
```
git clone https://github.com/Guilherme-Fumagali/HackathonWeb3.git
```
### Inicialização
O sistema é composto por dois diferentes partes que atuam em conjunto. Abrindo um terminal no diretório do projeto para cada módulo, execute:

#### 1. Back-end
```
cd backendMetadatas
npm install
npm start
```

#### 2. Front-end
```
cd my-app
npm install
npm start
```

## Arquitetura do protótipo

### Blockchain
Utilizando a rede [Alfajores Testnet](https://explorer.celo.org/alfajores/) mantida pela [CELO](https://celo.org/pt), foi desenvolvido a tokenização dos patrimônios, com base no modelo [ERC721](https://ethereum.org/pt/developers/docs/standards/tokens/erc-721/) (NFT equivalente). 

Esses NFTs foram gerados a partir de um Smart Contract implementado com o auxílio da ferramenta [OpenZeppelin](https://www.openzeppelin.com/). A principal regra que este contrato propõe, é criar junto ao token um URI que leva ao metadado relacionado a ele.

O Smart Contract foi compilado na [IDE Remix](https://remix-project.org/), que já contém as bilbiotecas usadas pelo OpenZeppelin. Os detalhes do deploy desse contrato pode ser acessado no site da CELO: <https://explorer.celo.org/alfajores/address/0x13eC92477C338dBae4043513Ca3c95cD715EEB63>

O código-fonte do Smart Contract pode ser consultado em: <https://github.com/Guilherme-Fumagali/HackathonWeb3/blob/ffd688e465ecc36ca0d4a938109aa8956f232ae8/contract.sol>

### Back-end
Esse módulo do protótipo tem como objetivo manter os metadados dos NFTs, nele, com o framework [Express](https://expressjs.com/pt-br/), foi criada as URLs nas quais os NFTs redirecionam. 

Esses metadados incluem as informações de uma certidão de matrícula, dando ênfase as usadas durante a incorporação do imóvel.

### Front-end
Para oferecer uma interface aos fiscais, foi desenvolvido também algumas telas com a ferramenta [React](https://pt-br.reactjs.org/):

| Tela dos imóveis disponíveis para fiscalização | Imóveis sob avaliação do fiscal | Perfil do fiscal | 
|----------|----------|----------|
| <img src="https://user-images.githubusercontent.com/77642873/206871923-e3665df8-c0db-4ec4-97c6-55884dd42a76.png" alt="drawing" width="400"/> | <img src="https://user-images.githubusercontent.com/77642873/206873433-7dbd5919-9b89-46cf-b18a-94fa4793df23.png" alt="drawing" width="400"/> | <img src="https://user-images.githubusercontent.com/77642873/206872191-ec901077-f26b-406f-969d-01aa05ede574.png" alt="drawing" width="380"/>
