import React from 'react'

import './MetadataMinimo.css'

const MetadataMinimo = ({imgPath, lote, quadra, endereco}) => {
    return (  
        <div className='wrap'>
            <section>
                <img id='imgMetadataMinimo' src={imgPath}/>            
            </section>
            <section className='dados'>
                <div>
                    <p>
                        <span><strong>Lote:</strong> {lote}</span> 
                        <span><strong>Quadra:</strong> {quadra}</span>
                    </p>
                    <p><strong>Endereço: </strong>{endereco}</p>
                </div>
            </section>
            <button>Ver detalhes</button>
        </div>
    );
}
 
export default MetadataMinimo;