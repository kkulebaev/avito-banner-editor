import React from 'react'

const Input = (props) => (
    <input
        onChange={props.onChange}
        className={props.className}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        name={props.name}
    />
)

export default Input
