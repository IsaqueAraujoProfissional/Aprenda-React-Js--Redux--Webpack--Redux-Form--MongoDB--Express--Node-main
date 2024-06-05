/* eslint-disable react/require-render-return */
import React, {Component} from "react";

export default class ComponenteClasse extends Component {
    render(){
        return (
            <div><h1>{this.props.valor || 'Padrão'}</h1></div>
        )
    }
}