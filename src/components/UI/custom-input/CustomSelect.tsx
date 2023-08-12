import React, {
  ClassAttributes,
  InputHTMLAttributes,
  SelectHTMLAttributes,
} from 'react';
import { FieldHookConfig, useField } from 'formik';

interface ICustomSelect extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CustomSelect = ({
  label,
  ...props
}: ICustomSelect &
  SelectHTMLAttributes<HTMLSelectElement> &
  ClassAttributes<HTMLSelectElement> &
  FieldHookConfig<string>): JSX.Element => {
  const [field, meta] = useField(props);

  const inputStyle = (style: string): string => {
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
        <select
          {...field}
          {...props}
          className={inputStyle('form-control form-select input-words')}
        />
        {meta.touched && meta.error ? (
          <p className='is-invalid'>{meta.error}</p>
        ) : null}
      </label>
    </>
  );
};

export { CustomSelect };
