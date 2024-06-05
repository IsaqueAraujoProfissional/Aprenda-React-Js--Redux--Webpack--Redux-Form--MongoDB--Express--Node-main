/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Filho from "./FIlho";

export default props => {
    const notificarSaida = lugar => alert(`Liberado para o ${lugar}`)

    return (
        <div>
            <Filho notificarSaida={notificarSaida}></Filho>
        </div>
    )
}