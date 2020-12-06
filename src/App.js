import React, { useState } from 'react'
import Button from './components/Button'
import Label from './components/Label'
import Input from './components/Input'

function App() {
    let [widthValue, setWidthValue] = useState(500)
    let [heightValue, setHeightValue] = useState(500)
    let [radiusValue, setRadiusValue] = useState(20)
    let [colorValue, setColorValue] = useState('#e1cfe9')
    let [backgroundValue, setBackgroundValue] = useState('https://purepng.com/public/uploads/large/red-edition-audi-luxury-car-jdc.png')
    let [textValue, setTextValue] = useState('Продают собственники')
    let [sizeTextValue, setSizeTextValue] = useState(60)
    let [colorTextValue, setColorTextValue] = useState('#000')
    let [htmlBtn, setHtmlBtn] = useState('block')
    let [cssBtn, setCssBtn] = useState('none')
    let [jsonBtn, setJsonBtn] = useState('none')

    function changeWidthValue(event) {
        if (event.target.value <= 500) {
            setWidthValue(event.target.value)
        }
    }

    function changeHeightValue(event) {
        if (event.target.value <= 500) {
            setHeightValue(event.target.value)
        }
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
        console.log(event)
    }

    function changeSizeTextValue(event) {
        if (event.target.value <= 100) {
            setSizeTextValue(event.target.value)
        }
    }

    function changeColorTextValue(event) {
        setColorTextValue(event.target.value)
    }

    let bannerStyle = {
        width: `${widthValue}px`,
        height: `${heightValue}px`,
        borderRadius: `${radiusValue}px`,
        backgroundColor: `${colorValue}`,
        backgroundImage: `url(${backgroundValue})`,
    }

    let textStyle = {
        fontSize: `${sizeTextValue}px`,
        color: `${colorTextValue}`,
    }

    let styleHtml = {
        display: `${htmlBtn}`,
    }

    let onClickHTML = () => {
        setHtmlBtn('block')
        setCssBtn('none')
        setJsonBtn('none')
    }

    let styleCss = {
        display: `${cssBtn}`,
    }

    let onClickCSS = () => {
        setHtmlBtn('none')
        setCssBtn('block')
        setJsonBtn('none')
    }

    let styleJson = {
        display: `${jsonBtn}`,
    }

    let onClickJSON = () => {
        setHtmlBtn('none')
        setCssBtn('none')
        setJsonBtn('block')
    }

    return (
        <div className='App'>
            <div className='wrapper'>
                <div className='app'>
                    <form action='/' className='form'>
                        <div className='form__group'>
                            <Label text='Ширина (px)' />
                            <Input onChange={changeWidthValue} value={widthValue} type='text' placeholder='500' />
                        </div>
                        <div className='form__group'>
                            <Label text='Высота (px)' />
                            <Input onChange={changeHeightValue} value={heightValue} type='text' />
                        </div>
                        <div className='form__group'>
                            <Label text='Радиус (px)' />
                            <Input onChange={changeRadiusValue} value={radiusValue} type='text' />
                        </div>
                        <div className='form__group'>
                            <Label text='Цвет заливки (HEX)' />
                            <Input onChange={changeColorValue} value={colorValue} type='text' />
                        </div>
                        <div className='form__group'>
                            <Label text='Картинка (URL)' />
                            <Input onChange={changeBackgroundValue} value={backgroundValue} type='text' />
                        </div>
                        <div className='form__group'>
                            <Label text='Текст (35 symbols)' />
                            <Input onChange={changeTextValue} value={textValue} type='text' maxLength='35' />
                        </div>
                        <div className='form__group'>
                            <Label text='Размер текста (px)' />
                            <Input onChange={changeSizeTextValue} value={sizeTextValue} type='text' />
                        </div>
                        <div className='form__group'>
                            <Label text='Цвет текста (HEX)' />
                            <Input onChange={changeColorTextValue} value={colorTextValue} type='text' />
                        </div>

                        <Button text='Сохранить PNG' type='button' />
                    </form>
                    <div className='preview'>
                        <div className='banner' style={bannerStyle}>
                            <span className='text' style={textStyle}>
                                {textValue}
                            </span>
                        </div>

                        <div className='code_blocks'>
                            <div className='code_html' style={styleHtml}>
                                <pre className='code_block'>
                                    <code>`className='banner' className='text' {textValue}`</code>
                                </pre>
                            </div>
                            <div className='code_css' style={styleCss}>
                                <pre className='code_block'>
                                    <code>
                                        .banner &#123;
                                        <br />
                                        width: {widthValue}px;
                                        <br />
                                        height: {heightValue}px;
                                        <br />
                                        border-radius: {radiusValue}px;
                                        <br />
                                        background-color: {colorValue};
                                        <br />
                                        background-image: url({backgroundValue});
                                        <br />
                                        background-position: center;
                                        <br />
                                        background-repeat: no-repeat;
                                        <br />
                                        &#125;
                                        <br />
                                        <br />
                                        .text &#123;
                                        <br />
                                        position: absolute;
                                        <br />
                                        width: inherit;
                                        <br />
                                        overflow: hidden;
                                        <br />
                                        font-size: {sizeTextValue}px;
                                        <br />
                                        color: {colorTextValue};
                                        <br />
                                        text-align: left;
                                        <br />
                                        word-wrap: break-word;
                                        <br />
                                        line-height: 1;
                                        <br />
                                        left: 0;
                                        <br />
                                        bottom: 0;
                                        <br />
                                        &#125;
                                    </code>
                                </pre>
                            </div>
                            <div className='code_json' style={styleJson}>
                                <pre className='code_block'>
                                    <code>
                                        &#123;'banner:' &#123;width: {widthValue}, height: {heightValue}, borderRadius: {radiusValue}, backgroundColor: {colorValue},
                                        backgroundImage: url(
                                        {backgroundValue}, background-position: center, background-repeat: no-repeat&#125; 'text:' &#123;position: absolute, width: inherit,
                                        overflow: hidden, font-size: {sizeTextValue}, color: {colorTextValue}, text-align: left, word-wrap: break-word, line-height: 1, left: 0,
                                        bottom: 0,&#125;
                                    </code>
                                </pre>
                            </div>
                        </div>
                        <div className='btn_actions'>
                            <Button text='HTML' type='button' onClick={onClickHTML} />
                            <Button text='CSS' type='button' onClick={onClickCSS} />
                            <Button text='JSON' type='button' onClick={onClickJSON} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
