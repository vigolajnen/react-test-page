import React, { ClassAttributes, InputHTMLAttributes } from 'react';
import { FieldHookConfig, useField } from 'formik';

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CustomInput = ({
  label,
  ...props
}: ICustomInput &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  const inputStyle = (style: string) => {
    if (meta.touched && meta.error) {
      return (style = `is-invalid ` + style);
    } else if (meta.touched && !meta.error) {
      return (style = `is-valid ` + style);
    } else {
      return style;
    }
  };
  return (
    <>
      <label className='form-label form__item mb-2'>
        <span className='form__label-name'>{label}</span>
        <input
          {...field}
          {...props}
          className={inputStyle('form-control input-words')}
        />
        {meta.touched && meta.error ? (
          <p className='is-invalid'>{meta.error}</p>
        ) : null}
      </label>
    </>
  );
};

export { CustomInput };
