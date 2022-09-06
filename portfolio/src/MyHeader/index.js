import React from "react";
import "./header.css"

function MyHeader(){
    const [selected, setSelected] = React.useState("inicio")

    return(
        <header>
            <nav className='nav-container'>
              <ul>
                    <li onClick={()=> setSelected("inicio")} className={(selected === "inicio" ? 'nav-item--selected': undefined) }><a href='#presentacion'>INICIO</a></li>
                    <li onClick={()=> setSelected("proyectos")} className={(selected === "proyectos" ? 'nav-item--selected' : undefined) }><a href='#proyectos' >PROYECTOS</a></li>
                    <li onClick={()=> setSelected("about")} className={(selected === "about" ? 'nav-item--selected' : undefined) }><a href='#about'>ABOUT</a></li>
                    <li onClick={()=> setSelected("contacto")} className={(selected === "contacto" ? 'nav-item--selected' : undefined) }><a href="#contacto">CONTACTO</a></li>
              </ul>
          </nav>
        </header>
    )
}

export { MyHeader }