import React from 'react';
import { MyHeader } from '../MyHeader';
import { Presentacion } from '../Presentacion';
import { Proyectos } from '../Proyectos';
import { About } from '../About';
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
        <Proyectos />
        {/*
        <About />
  */}
    </React.Fragment>
  );
}

export default App;
  