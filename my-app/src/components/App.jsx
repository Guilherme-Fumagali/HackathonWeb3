import React from 'react';

import './App.css';

import ShowMetadata from './ShowMetadata';

import axios from 'axios';
const baseURL = 'http://localhost:8080';

function App() {
  const [tokenMetadata, setTokenMetadata] = React.useState(null)
  React.useEffect(() => {
    axios.get(`${baseURL}/tokenMetadata`).then((response) => {
      setTokenMetadata(response.data);
    })
  }, []);

  let viewMetadata

  if (tokenMetadata) viewMetadata = tokenMetadata.map((metadado, i) => {
      return (
        <ShowMetadata metadado={metadado} key={i} />
      )
    })
  else viewMetadata = <p>Carregando...</p>

 

  return (
    <>
     {tokenMetadata && viewMetadata}
    </>
  );
}

export default App;