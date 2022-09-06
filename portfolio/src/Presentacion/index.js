import React from "react";
import "./presentacion.css"


function Presentacion(){
    return(
        <section className="presentacion-container" id="presentacion">
            <div className="presentacion-view-container">
                <div className="presentacion_content">
                    <React.Fragment>
                        <div className="presentacion-foto_polygon-background"></div>
                        <div className="presentacion-foto_fotografia"></div>
                        <div className="presentacion-foto_kanji"></div>
                        <div className="presentacion-foto_err-shadow"></div>
                        <div className="presentacion-foto_err-cuadro">
                            <div className="err-cuadro_red-button"></div>
                            <div className="err-cuadro_green-button"></div>
                            <div className="err-cuadro_grey-button"></div>
                            <p>ERR!</p>
                        </div>
                        <div className="presentacion-foto_aceptar-button">Aceptar</div>
                    </React.Fragment>
                    <React.Fragment>
                        <div className="presentacion-nombre_introduccion-shadow"></div>
                        <div className="presentacion-nombre_introduccion">
                            <p>Hola! Yo Soy</p>
                        </div>
                        <h1 className="presentacion-nombre_nombre">ERICK</h1>
                        <h1 className="presentacion-nombre_apellido">MALDONADO</h1>
                        <div className="presentacion-nombre_cargo-shadow"></div>
                        <div className="presentacion-nombre_cargo">
                            <p>Y soy <h2>FRONTEND<br/>DEVELOPER</h2></p>
                        </div>
                    </React.Fragment>
                </div>
            </div>
            <div className="presentacion-footer">
                <div className="presentacion-footer_div1"></div>
                <div className="presentacion-footer_div2"></div>
            </div>
        </section>
    )
}

export { Presentacion }