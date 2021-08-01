import React from 'react'
import FormikInput from './FormikInput'
import FormikRadioButton from './Formikradio';

function FormikControl(props) {
    const {control, ...rest}=props
   switch (control) {
       case 'input': return <FormikInput {...rest}/>;
       case  'radio': return <FormikRadioButton {...rest}/>   
       default: return null
    
   }
}

export default FormikControl
