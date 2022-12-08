import React from 'react'

import './ShowMetadata.css'

const ShowMetadata = ({metadado}) => {
    console.log(metadado);
    
    return (  
        <div className='wrap'>
            <section>
                <img src={metadado.imgPath}/>            
            </section>
            <section className='dados'>
                <p id='uuid'>{metadado.uuid}</p>
                <div>
                    <p>
                        <span><strong>Lote:</strong> {metadado.lote}</span> 
                        <span><strong>Quadra:</strong> {metadado.quadra}</span>
                    </p>
                    <p><strong>Endereço: </strong>{metadado.endereco}</p>
                </div>
            </section>
            <button>Ver detalhes</button>
        </div>
    );
}
 
export default ShowMetadata;