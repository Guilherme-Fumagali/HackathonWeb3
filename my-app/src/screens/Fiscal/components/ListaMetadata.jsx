import React from 'react';

import FullMetadata from './FullMetadata';
import MetadataMinimo from './MetadataMinimo';

import './ListaMetadata.css'
const ListaMetadatas = ({metadados}) => {
    const [selecionado, setSelecionado] = React.useState(1)
    const [servicos] = React.useState([])
    const [click, setClick] = React.useState(false)

    const handleClickButton = (metadado) => {
        const i = servicos.findIndex(obj => obj.uuid === metadado.uuid)
        if(i >= 0)
            servicos.splice(i, 1)
        else
            servicos.push(metadado)
        setClick(!click)
        
    }

    let viewMetadata = <p>Carregando...</p>
    if (metadados) viewMetadata = metadados.map((metadado, i) => {
        return (
        <MetadataMinimo 
            imgPath={metadado.imgPath}
            lote={metadado.lote} 
            quadra={metadado.quadra} 
            endereco={metadado.endereco}
            isSelecionado={selecionado === i}
            onClickFunction={() => setSelecionado(i)}
            onClickButton={() => handleClickButton(metadado)}
            isJob={servicos.findIndex(obj => obj.uuid === metadado.uuid) >= 0}
            key={i} 
          />)
    })

    return ( 
        <div className='metadadosList'>
            <div>{viewMetadata}</div>
            <div>{metadados && <FullMetadata metadado={metadados[selecionado]} />}</div>
        </div>
    );
}
 
export default ListaMetadatas;