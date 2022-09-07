import React from 'react'
import "./contacto.css"

function Contacto(){
    return(
        <section className='contacto-container' id='contacto'>
            <div className='contacto-content'>
                <div className='contacto-text'>
                    <div className='contacto-text_title'></div>
                    <p>Actualmene estoy en busqueda de ofertas laborales en donde pueda aplicar todo el conocimiento que he adquirido y asi elevar la calidad de mi trabajo con la experiencia que obtenga.</p>
                </div>
                <div className='contacto-form'>
                    <form className='form-container'>
                        <label for="form-nombre">Nombre:</label>
                        <input type="text" id="form-nombre"/>
                        <label for="form-email">Correo Electronico:</label>
                        <input type="text" id="form-email"/>
                        <label for="form-message">Mensaje:</label>
                        <input type="text" id="form-message"></input>

                        <button className='form-button'>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export { Contacto }