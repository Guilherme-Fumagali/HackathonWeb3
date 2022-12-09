import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import './Header.css';

const Header = () => {

    const navigate = useNavigate();

    const navigateProfile = () => {
      // 👇️ navigate to /perfil
      navigate('/perfil');
    };
  
    const navigateHome = () => {
      // 👇️ navigate to /
      navigate('/');
    };

    return ( 
        <header>
            <span style={{width: "10%"}}></span>
            <span onClick={navigateHome} id="principal">PFRD</span>
            <span onClick={navigateHome} id="principal2">Portal de Fiscalização de Registros Descentralizados</span>
            <span  onClick={navigateProfile} id='usuario'>
                <span id='CgProf'><CgProfile /></span>
                <span>Olá, Abelardo</span>
            </span>
            <span style={{width: "10%"}}></span>
        </header>
    );
}
export default Header;