import React from "react";
import { Field, ErrorMessage } from "formik";
import Texterror from "./Texterror.js";

function FormikInput(props) {
  const { label, name, ...rest } = props;
  return (
    <div className='p-2'>
      <label htmlFor={name}>{label}</label>
      <br/>
      <Field id={name} name={name} {...rest} />
      <br/>
      <div style={{ color: 'red'}}>
      <ErrorMessage name={name}  componet={Texterror} />
      </div>
    </div>
  );
}

export default FormikInput;
