import React from 'react';
import { Field,ErrorMessage } from 'formik';
import Texterror from './Texterror';

const FormikRadioButton = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <>
      <label className="p-1" htmlFor={name}>{label}</label>
      <Field name={name} {...rest} >
        {
          ({ field }) => {
            return options.map(option => {
              return (
                <React.Fragment key={option.key}>
                  <input
                  
                    type='radio'
                    id={option.id}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.id} className="p-1" >{option.key}</label>

                </React.Fragment>
              );
            })
          }
        }
      </Field>
      <br/>
      <div style={{ color: 'red'}}>
      <ErrorMessage name={name}  componet={Texterror} />
      </div>
    </>
  );
};

export default FormikRadioButton;