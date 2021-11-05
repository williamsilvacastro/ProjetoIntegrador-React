import React from 'react'
import './Input.css'

function Input(props) {

    return(
        <>
        <div className="input-container">
            <label className={props.corLabel}>{props.label}:</label>
            <input className="form-control" type={props.type} placeholder={props.placeholder} required={props.required}/>
            <small >{props.small}</small>
        </div>
        </>
    )
}

export default Input