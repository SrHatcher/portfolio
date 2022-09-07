import React from 'react';
import { MyHeader } from '../MyHeader';
import { Presentacion } from '../Presentacion';
import { Proyectos } from '../Proyectos';
import { About } from '../About';
import { Contacto } from '../Contacto';
import { Footer } from '../Footer';
import './App.css';

function App() {
  return (
      <div className='hola'>
        <MyHeader>
        </MyHeader>
        <Presentacion />
        <Proyectos />
        <About />
        <Contacto />
        <Footer />
      </div>
  );
}

export default App;
  