import React from 'react'

const Button = (props) => {
    return (
        <button className='btn btn_create' type={props.type} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button
