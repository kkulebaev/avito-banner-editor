import React, { useState } from 'react'
import Button from './Button'
import Label from './Label'
import Input from './Input'

const Form = (props) => {
    let [widthValue, setWidthValue] = useState(500)
    let [heightValue, setHeightValue] = useState(450)
    let [radiusValue, setRadiusValue] = useState(20)
    let [colorValue, setColorValue] = useState('#121212')
    let [backgroundValue, setBackgroundValue] = useState('http')
    let [textValue, setTextValue] = useState('test')

    function changeWidthValue(event) {
        setWidthValue(event.target.value)
    }

    function changeHeightValue(event) {
        setHeightValue(event.target.value)
    }

    function changeRadiusValue(event) {
        setRadiusValue(event.target.value)
    }

    function changeColorValue(event) {
        setColorValue(event.target.value)
    }

    function changeBackgroundValue(event) {
        setBackgroundValue(event.target.value)
    }

    function changeTextValue(event) {
        setTextValue(event.target.value)
    }

    return (
        <form action='/' className='form'>
            <div className='form__group'>
                <Label text='Ширина' />
                <Input onChange={changeWidthValue} value={widthValue} type='text' />
            </div>
            <div className='form__group'>
                <Label text='Высота' />
                <Input onChange={changeHeightValue} value={heightValue} type='text' />
            </div>
            <div className='form__group'>
                <Label text='Радиус' />
                <Input onChange={changeRadiusValue} value={radiusValue} type='text' />
            </div>
            <div className='form__group'>
                <Label text='Цвет заливки' />
                <Input onChange={changeColorValue} value={colorValue} type='text' />
            </div>
            <div className='form__group'>
                <Label text='Картинка' />
                <Input onChange={changeBackgroundValue} value={backgroundValue} type='text' />
            </div>
            <div className='form__group'>
                <Label text='Текст' />
                <Input onChange={changeTextValue} value={textValue} type='text' />
            </div>

            <Button text='Создать баннер' type='button' />
        </form>
    )
}

export default Form
