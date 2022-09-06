import React from 'react';
import { MyHeader } from '../MyHeader';
import { Presentacion } from '../Presentacion';
import { Proyectos } from '../Proyectos';
import { About } from '../About';
import './App.css';

function App() {
  return (
      <div className='hola'>
        <MyHeader>
        </MyHeader>
        <Presentacion />
        <Proyectos />
        <About />
      </div>
  );
}

export default App;
  