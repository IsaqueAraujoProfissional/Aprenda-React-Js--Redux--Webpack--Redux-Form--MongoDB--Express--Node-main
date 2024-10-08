import React from 'react'
import If from './if'

const IconButton = props => {  
    return ( 
    <If test={!props.hide}>
        <button className={'btn btn-'+ props.btnStyle} onClick={props.onClick}>
            <i className={'fa fa-'+ props.icon}></i>
        </button>
    </If>)
}

export default IconButton