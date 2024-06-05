/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {
    const aprovados = ['Isaque', 'Lara', 'Lucas']

    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            { gerarItens(aprovados) }
        </ul>
    )
}