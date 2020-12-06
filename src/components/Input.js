import React from 'react'

const Input = (props) => {
    return <input onChange={props.onChange} className='form__input' type={props.type} value={props.value} placeholder={props.placeholder} maxLength={props.maxLength} />
}

export default Input
