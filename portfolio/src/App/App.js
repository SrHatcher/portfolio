import React from 'react';
import { PrimeraVista } from '../PrimeraVista';
import { MyHeader } from '../PrimeraVista/MyHeader';
import { Presentacion } from '../PrimeraVista/Presentacion';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <PrimeraVista>
        <MyHeader>
          <nav className='nav-container'>
            <ul>
              <li className='nav-item--selected'>INICIO</li>
              <li>PROYECTOS</li>
              <li>ABOUT</li>
              <li>CONTACTO</li>
            </ul>
          </nav>
        </MyHeader>
        <Presentacion>
          
        </Presentacion>
      </PrimeraVista>
    </React.Fragment>
  );
}

export default App;
  