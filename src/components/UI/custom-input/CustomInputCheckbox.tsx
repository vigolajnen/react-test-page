import React, { ClassAttributes, InputHTMLAttributes } from 'react';
import { FieldHookConfig, useField } from 'formik';

interface ICustomInputCheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CustomInputCheckbox = ({
  label,
  ...props
}: ICustomInputCheckbox &
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
      <div className='form-check'>
        <input
          {...field}
          {...props}
          className={inputStyle('form-check-input')}
        />

        <label className='form-check-label small'>
          {label}
          <a
            className='link link--primary'
            href='https://market.fitnesshouse.ru/documentation'
            target='_blank'
          >
            {' '}
            Договора Оферты,
          </a>
          <a
            className='link link--primary'
            href='https://market.fitnesshouse.ru/storage/documents/pravila_cluba.pdf'
            target='_blank'
          >
            {' '}
            Правилами Клуба
          </a>
          <span>и даю своё согласие на</span>
          <a
            className='link link--primary'
            href='https://market.fitnesshouse.ru/storage/documents/legal_information.pdf'
            target='_blank'
          >
            {' '}
            обработку персональных данных.
          </a>
        </label>
      </div>

      {meta.touched && meta.error ? (
        <p className='is-invalid'>{meta.error}</p>
      ) : null}
    </>
  );
};

export { CustomInputCheckbox };
