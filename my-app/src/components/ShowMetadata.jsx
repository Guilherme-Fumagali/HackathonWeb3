import React from 'react'

import './ShowMetadata.css'

const ShowMetadata = ({metadado}) => {
    console.log(metadado);
    
    return (  
        <div className='wrap'>
            <section>
                <img src={metadado.imgPath}/>            
            </section>
            <section>
                <p>{metadado.uuid}</p>
                <p>Lote: {metadado.lote}</p>
                <p>Quadra: {metadado.quadra}</p>
                <p>Endereço: {metadado.endereco}</p>
            </section>
            <button>Ver detalhes</button>
        </div>
    );
}
 
export default ShowMetadata;