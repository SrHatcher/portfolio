import React from "react";
import "./presentacion.css"

function Presentacion({children}){
    return(
        <div className="presentacion-container">
            <div className="presentacion-foto"></div>
            <div className="presentacion-nombre"></div>
        </div>
    )
}

export { Presentacion }