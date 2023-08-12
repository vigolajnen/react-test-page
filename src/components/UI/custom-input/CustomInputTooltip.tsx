import React, { ClassAttributes, InputHTMLAttributes } from 'react';
import { FieldHookConfig, useField } from 'formik';
import SvgTooltip from '../../icons/Tooltip';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

interface ICustomInputTooltip extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  textTooltip?: string;
  id?: string;
}

const CustomInputTooltip = ({
  label,
  textTooltip,
  id,
  ...props
}: ICustomInputTooltip &
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
      <div className='form__item mb-2'>
        <div className='form__tooltip-label'>
          <label className='form__label-name form-label' htmlFor={id}>
            {label}
          </label>
          <OverlayTrigger
            delay={{ hide: 450, show: 300 }}
            overlay={(props) => (
              <Tooltip {...props}>
                {textTooltip}
              </Tooltip>
            )}
            placement='bottom'
          >
            <button className='button button--tooltip' type='button'><SvgTooltip /></button>
          </OverlayTrigger>
        </div>
        <input
          {...field}
          {...props}
          id={id}
          className={inputStyle('form-control')}
        />
        <span className='invalid-feedback'>{textTooltip}</span>
      </div>

      {meta.touched && meta.error ? (
        <small className='is-invalid'>{meta.error}</small>
      ) : null}
    </>
  );
};

export { CustomInputTooltip };
