import React from 'react'
import Button from './Button'

const Preview = (props) => {
    return (
        <div className='preview'>
            <div className='banner'>
                <span className='text'>This is TEXT</span>
            </div>

            <pre className='code_block'>
                <code>width: {props.widthValue}</code>
            </pre>

            <div>
                <Button text='Сохранить PNG' type='button' />
                <Button text='Скопировать код' type='button' />
            </div>
        </div>
    )
}

export default Preview
