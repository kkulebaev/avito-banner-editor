// import React, { useState } from 'react'
// import Button from './Button'
// import Label from './Label'
// import Input from './Input'
// import { SliderPicker } from 'react-color'

// const Form = (props) => {
//     let [state, setState] = useState({
//         inputs: [
//             { label: 'Ширина', value: 500 },
//             { label: 'Высота', value: 500 },
//             { label: 'Радиус', value: 20 },
//             { label: 'Цвет фона', value: '#e1cfe9' },
//             { label: 'Картинка (URL)', value: 'https://purepng.com/public/uploads/large/red-edition-audi-luxury-car-jdc.png' },
//             { label: 'Текст (35 символов)', value: 'Продают собственники' },
//             { label: 'Размер текста', value: 75 },
//             { label: 'Цвет текста', value: '#000000' },
//         ],
//     })

//     let inputs = state.inputs.map((input, index) => {
//         if (input.label == 'Цвет фона' || input.label == 'Цвет текста') {
//             return (
//                 <div className='form__group'>
//                     <Label text={input.label} />
//                     <div>
//                         <Input value={input.value} type='text' />
//                         <SliderPicker />
//                     </div>
//                 </div>
//             )
//         } else
//             return (
//                 <div className='form__group'>
//                     <Label text={input.label} />
//                     <Input value={input.value} type='text' />
//                 </div>
//             )
//     })

//     return (
//         <form action='/' className='form'>
//             {inputs}
//             <Button text='Создать баннер' type='button' />
//         </form>
//     )
// }

// export default Form
