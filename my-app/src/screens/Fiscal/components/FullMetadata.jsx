import React from 'react'

import './FullMetadata.css';

const FullMetadata = ({metadado}) => {
    return ( 
        <section className='wrapFullMetadata'>
            <img id='imgFullMetadata' src={metadado.imgPath} alt="Imagem do patrimônio"/>
            <div>
                <p><strong>uuid: </strong>{metadado.uuid}</p>
                <p className='loteQuadra'>
                    <span><strong>Lote: </strong> {metadado.lote}</span>
                    <span><strong>Quadra: </strong>{metadado.quadra}</span>
                </p>
                <p><strong>Proprietário: </strong>{metadado.proprietario}</p>
                <p><strong>Metragem do solo: </strong>{metadado.metragem_solo}m<sup>2</sup></p>
                <p><strong>Metragem construída: </strong>{metadado.metragem_construida}m<sup>2</sup></p>
                <p><strong>Endereço: </strong>{metadado.endereco}</p>
            </div>
        </section>
     );
}
 
export default FullMetadata;