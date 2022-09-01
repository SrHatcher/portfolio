import React from 'react';
import { MyHeader } from '../MyHeader';
import { Presentacion } from '../Presentacion';
import './App.css';

function App() {
  return (
    <React.Fragment>
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
        <Presentacion />
        
    </React.Fragment>
  );
}

export default App;
  