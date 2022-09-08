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
      <React.Fragment>
        <MyHeader>
        </MyHeader>
        <Presentacion />
        <Proyectos />
        <About />
        <Contacto />
        <Footer />
      </React.Fragment>
  );
}

export default App;
  