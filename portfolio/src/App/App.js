import React from 'react';
import { PrimeraVista } from '../PrimeraVista';
import { MyHeader } from '../PrimeraVista/MyHeader';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <PrimeraVista>
        <MyHeader>
          <nav className='nav-container'>
            <ul>
              <li>Hola</li>
            </ul>
          </nav>
        </MyHeader>
      </PrimeraVista>
    </React.Fragment>
  );
}

export default App;
  