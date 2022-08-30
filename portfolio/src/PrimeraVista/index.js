import React from "react";
import "./primeraVista.css"

function PrimeraVista({children}){
    return(
        <div className="PrimeraVista">
            {children}
        </div>
    )
}

export { PrimeraVista }