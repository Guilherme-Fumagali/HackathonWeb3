import React from 'react'

import './FullMetadata.css';

const FullMetadata = ({metadado}) => {
    return ( 
        <section className='wrap'>
            <img id='imgFullMetadata' src={metadado.imgPath}/>
            <p>uuid: {metadado.uuid}</p>
            <p>Lote: {metadado.lote}</p>
            <p>Quadra: {metadado.quadra}</p>
            <p>Proprietário: {metadado.proprietario}</p>
            <p>Metragem do solo: {metadado.metragem_solo}</p>
            <p>Metragem construída: {metadado.metragem_construida}</p>
            <p>Endereço: {metadado.endereco}</p>
        </section>
     );
}
 
export default FullMetadata;