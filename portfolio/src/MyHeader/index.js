import React from "react";
import "./header.css"

function MyHeader({children}){
    return(
        <header>
            {children}
        </header>
    )
}

export { MyHeader }