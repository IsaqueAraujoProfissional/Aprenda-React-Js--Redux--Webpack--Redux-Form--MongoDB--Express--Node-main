/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {
    const cb = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (10)) + 20
    const gerarNerd = () => Math.random() > 0.5
    
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                _ => cb('Isaque', gerarIdade(), gerarNerd())
            }>Fornecer Informações</button>
        </div>
    )
}