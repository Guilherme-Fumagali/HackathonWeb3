import React from 'react'

import Header from '../components/Header'
import './Perfil.css';

const Perfil = () => {
    return (
        <div>
        <Header></Header>
        <div id="body">         
            <div id="perfil" class="profile">
                <div class="image">
                    <img class="round" id='planta' alt='Foto de perfil' src={'/assets/planta.jpeg'} width="100%"/>    
                </div>

                <div class="info">
                    <h1>Abelardo P.</h1>
                    <ul>
                        <li>
                            <div id="progressoElement" class="progress-element">
                                <p id="progressoLabel" class="progress-label">Pontuação</p>
                                <div class="progress">
                                    <progress id="progresso" value="75" max="100">75</progress>
                                </div>
                            </div>    
                        </li> 
                        <li> Locais avaliados: 12 </li>
                        <li>Avaliações aprovadas: 11</li>
                        <li>Avaliações reprovadas: 1</li>
                        
                    </ul>
                </div>
            </div>
        </div>   
        </div> 
    );
}
 
export default Perfil;
