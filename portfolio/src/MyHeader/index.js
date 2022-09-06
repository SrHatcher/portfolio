import React from "react";
import "./header.css"

function MyHeader(){
    const [selected, setSelected] = React.useState("inicio")

    return(
        <header>
            <nav className='nav-container'>
              <ul>
                    <li><a href='#presentacion'>INICIO</a></li>
                    <li><a href='#proyectos' >PROYECTOS</a></li>
                    <li><a href='#about'>ABOUT</a></li>
                    <li><a href="#contacto">CONTACTO</a></li>
              </ul>
          </nav>
        </header>
    )
}

export { MyHeader }