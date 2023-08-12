import React, { FC, DetailedHTMLProps } from 'react';
import { FieldHookConfig, useField } from 'formik';
// import ReactInputMask from 'react-input-mask';
import { IMaskInput } from 'react-imask';

interface ICustomInputPhone {
  label: string;
}

export const CustomInputPhone = ({
  label,
  ...props
}: any) => {
  const [field, meta] = useField(props);
  const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const phoneMask = '+{7}(000)000-00-00';

  const inputStyle = (style: string): string => {
    if (meta.touched && meta.error) {
      return `is-invalid ${style}`;
    } else if (meta.touched && !meta.error) {
      return `is-valid ${style}`;
    } else {
      return style;
    }
  };

  return (
    <label className='form-label form__item '>
      <span className='form__item-name'>{label}</span>
      <IMaskInput
        {...field}
        mask={phoneMask}
        {...props}
        className={inputStyle('form-control input-words')} 
      >
      </IMaskInput>
      {meta.touched && meta.error ? (
        <p className='is-invalid'>{meta.error}</p>
      ) : null}
    </label>
  );
};
