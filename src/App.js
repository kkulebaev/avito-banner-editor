import React, { useState } from 'react'
import Button from './components/Button'
import Label from './components/Label'
import Input from './components/Input'
import { SliderPicker } from 'react-color'
import html2canvas from 'html2canvas'

function App() {
    let [state, setState] = useState({
        banner: {
            width: 500,
            height: 500,
            borderRadius: 20,
            backgroundColor: '#e1cfe9',
            backgroundImage: 'https://purepng.com/public/uploads/large/red-edition-audi-luxury-car-jdc.png',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'background-size': '100%',
            position: 'relative',
        },
        bannerText: {
            text: 'Продают собственники',
            fontSize: 75,
            color: '#191c4d',
            textAlign: 'right',
            position: 'absolute',
            width: 'inherit',
            overflow: 'hidden',
            padding: '5px',
            'word-wrap': 'break-word',
            'line-height': 1,
            left: 0,
            bottom: 0,
        },
    })

    let [showCode, setShowCode] = useState({
        showHtml: true,
        showCss: false,
        showJson: false,
    })

    function changeWidthValue(event) {
        if (event.target.value <= 500) {
            setState((prev) => {
                return {
                    ...prev,
                    banner: { ...prev.banner, width: event.target.value },
                }
            })
        }
    }

    function changeHeightValue(event) {
        if (event.target.value <= 500) {
            setState((prev) => {
                return {
                    ...prev,
                    banner: { ...prev.banner, height: event.target.value },
                }
            })
        }
    }

    function changeRadiusValue(event) {
        if (event.target.value <= 250) {
            setState((prev) => {
                return {
                    ...prev,
                    banner: { ...prev.banner, borderRadius: event.target.value },
                }
            })
        }
    }

    function changeColorValue(event) {
        setState((prev) => {
            return {
                ...prev,
                banner: { ...prev.banner, backgroundColor: event.target.value },
            }
        })
    }

    function updateColor(updateColor) {
        setState((prev) => {
            return {
                ...prev,
                banner: { ...prev.banner, backgroundColor: updateColor.hex },
            }
        })
    }

    function changeBackgroundValue(event) {
        setState((prev) => {
            return {
                ...prev,
                banner: { ...prev.banner, backgroundImage: event.target.value },
            }
        })
    }

    function changeTextValue(event) {
        setState((prev) => {
            return {
                ...prev,
                bannerText: { ...prev.bannerText, text: event.target.value },
            }
        })
    }

    function changeSizeTextValue(event) {
        if (event.target.value <= 80) {
            setState((prev) => {
                return {
                    ...prev,
                    bannerText: { ...prev.bannerText, fontSize: event.target.value },
                }
            })
        }
    }

    function changeColorTextValue(event) {
        setState((prev) => {
            return {
                ...prev,
                bannerText: { ...prev.bannerText, color: event.target.value },
            }
        })
    }

    function updateColorText(updateColor) {
        setState((prev) => {
            return {
                ...prev,
                bannerText: { ...prev.bannerText, color: updateColor.hex },
            }
        })
    }

    let onClickTextAlign = (event) => {
        setState((prev) => {
            return {
                ...prev,
                bannerText: { ...prev.bannerText, textAlign: event.target.value },
            }
        })
    }

    let bannerStyle = {
        width: `${state.banner.width}px`,
        height: `${state.banner.height}px`,
        borderRadius: `${state.banner.borderRadius}px`,
        backgroundColor: `${state.banner.backgroundColor}`,
        backgroundImage: `url(${state.banner.backgroundImage})`,
    }

    let textStyle = {
        fontSize: `${state.bannerText.fontSize}px`,
        color: `${state.bannerText.color}`,
        textAlign: `${state.bannerText.textAlign}`,
    }

    let onClickHTML = () => {
        setShowCode((prev) => {
            return {
                ...prev,
                showHtml: true,
                showCss: false,
                showJson: false,
            }
        })
    }

    let onClickCSS = () => {
        setShowCode((prev) => {
            return {
                ...prev,
                showHtml: false,
                showCss: true,
                showJson: false,
            }
        })
    }

    let onClickJSON = () => {
        setShowCode((prev) => {
            return {
                ...prev,
                showHtml: false,
                showCss: false,
                showJson: true,
            }
        })
    }

    let newWin = () => {
        let printContents = document.getElementById('banner')
        html2canvas(printContents).then(async function (canvas) {
            let win = window.open()
            await win.document.write("<br><img src='" + canvas.toDataURL() + "'/>")
            win.print()
        })
    }

    return (
        <div className='App'>
            <div className='wrapper'>
                <div className='app'>
                    <form action='/' className='form'>
                        <div className='form__group'>
                            <Label text='Ширина' />
                            <Input onChange={changeWidthValue} value={state.banner.width} type='text' />
                        </div>
                        <div className='form__group'>
                            <Label text='Высота' />
                            <Input onChange={changeHeightValue} value={state.banner.height} type='text' />
                        </div>
                        <div className='form__group'>
                            <Label text='Радиус' />
                            <Input onChange={changeRadiusValue} value={state.banner.borderRadius} type='text' />
                        </div>
                        <div className='form__group'>
                            <Label text='Цвет фона' />
                            <div>
                                <Input onChange={changeColorValue} value={state.banner.backgroundColor} type='text' />
                                <SliderPicker color={state.banner.backgroundColor} onChange={updateColor} />
                            </div>
                        </div>
                        <div className='form__group'>
                            <Label text='Картинка (URL)' />
                            <Input onChange={changeBackgroundValue} value={state.banner.backgroundImage} type='text' />
                        </div>
                        <div className='form__group'>
                            <Label text='Текст (35 символов)' />
                            <Input onChange={changeTextValue} value={state.bannerText.text} type='text' maxLength='35' />
                        </div>
                        <div className='form__group'>
                            <Label text='Размер текста' />
                            <Input onChange={changeSizeTextValue} value={state.bannerText.fontSize} type='text' />
                        </div>
                        <div className='form__group'>
                            <Label text='Выравнивание' />
                            <div>
                                <input className='radio__label radio__label_left' onChange={onClickTextAlign} type='radio' name='textAlign' value='left' />
                                <input className='radio__label radio__label_center' onChange={onClickTextAlign} type='radio' name='textAlign' value='center' />
                                <input className='radio__label radio__label_right' onChange={onClickTextAlign} type='radio' name='textAlign' value='right' />
                            </div>
                        </div>
                        <div className='form__group'>
                            <Label text='Цвет текста' />
                            <div>
                                <Input onChange={changeColorTextValue} value={state.bannerText.color} type='text' />
                                <SliderPicker color={state.bannerText.color} onChange={updateColorText} />
                            </div>
                        </div>

                        <Button text='Сохранить PNG' type='button' className='btn btn_create' onClick={newWin} />
                    </form>
                    <div className='preview'>
                        <a href='https://avito.ru' target='_blank' rel='noreferrer'>
                            <div className='banner' style={bannerStyle} id='banner'>
                                <span className='banner__text' style={textStyle}>
                                    {state.bannerText.text}
                                </span>
                            </div>
                        </a>
                        <div className='code_blocks'>
                            {showCode.showHtml ? (
                                <div className='code_html'>
                                    <pre className='code_block'>
                                        <code>
                                            &lt;div className='banner'&gt;
                                            <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;span className='text'&gt;{state.bannerText.text}&lt;/span&gt;
                                            <br />
                                            &lt;/div&gt;
                                        </code>
                                    </pre>
                                </div>
                            ) : null}
                            {showCode.showCss ? (
                                <div className='code_css'>
                                    <pre className='code_block'>
                                        <code>
                                            .banner &#123;
                                            <br />
                                            width: {state.banner.width}px;
                                            <br />
                                            height: {state.banner.height}px;
                                            <br />
                                            border-radius: {state.banner.borderRadius}px;
                                            <br />
                                            background-color: {state.banner.backgroundColor};
                                            <br />
                                            background-image: url({state.banner.backgroundImage});
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
                                            font-size: {state.bannerText.fontSize}px;
                                            <br />
                                            color: {state.bannerText.color};
                                            <br />
                                            text-align: {state.bannerText.textAlign};
                                            <br />
                                            padding: 5px;
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
                            ) : null}
                            {showCode.showJson ? (
                                <div className='code_json'>
                                    <pre className='code_block'>
                                        <code>{JSON.stringify(state, null, 2)}</code>
                                    </pre>
                                </div>
                            ) : null}
                        </div>
                        <div className='btn_actions'>
                            <Button text='HTML' type='button' onClick={onClickHTML} className='btn' />
                            <Button text='CSS' type='button' onClick={onClickCSS} className='btn' />
                            <Button text='JSON' type='button' onClick={onClickJSON} className='btn' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
