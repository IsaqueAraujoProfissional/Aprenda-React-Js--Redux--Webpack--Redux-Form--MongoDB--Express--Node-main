/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {
    return (
        <div>
            <span>{props.texto} </span>
            <span>{props.bool ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}