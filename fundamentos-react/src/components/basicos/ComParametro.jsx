import React from "react"

export default function ComParametro(props) {
    const aniversario = props.numero === 15 ? 'É dia do Isaque' : 'Não é dia do Isaque'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <h4>{props.numero}</h4>
            <h5>{aniversario}</h5>
        </div>
    )
}