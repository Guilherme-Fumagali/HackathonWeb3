import './App.css';
import axios from 'axios';
import React from 'react';

const baseURL = 'http://localhost:8080';
function App() {
  const [tokenMetadata, setTokenMetadata] = React.useState()

  React.useEffect(() => {
    axios.get(`${baseURL}/tokenMetadata`).then((response) => {
      setTokenMetadata(response.data);
    })
  }, []);

  console.log(tokenMetadata);
  return (
    <h1>App</h1>
  );
}

export default App;
