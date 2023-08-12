import React, { FC, useMemo, useCallback } from 'react';
import { Form, Formik } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.scss';

import { Button } from '../button/Button';
import { tariffData } from '../../../utils/dataTariff';
import { CustomInput } from '../custom-input/CustomInput';
import { CustomSelect } from '../custom-input/CustomSelect';
import { CustomInputPhone } from '../custom-input/CustomInputPhone';
import { orderSchema } from '../../../schemas';

import { CustomInputCheckbox } from '../custom-input/CustomInputCheckbox';
import { CustomInputTooltip } from '../custom-input/CustomInputTooltip';
import { generalRequest } from '../../../services/api';

// types
import { IFormValues, IProductValues } from '../../../types/index';
import { BASE_URL } from '../../../utils/constants';

const Form2: FC<IFormValues> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = [...tariffData].find((item) => item.id === Number(id));

  const productValues: Array<IProductValues> = [];
  item &&
    [...item.products].map((el) => {
      return productValues.push({
        name: el.product_name,
        price: el.product_price,
        price_id: el.product_price_id,
      });
    });

  const phoneWithoutFormatting = (str: string) => {
    return str
      .replace(/[^0-9]/g, '')
      .slice(1)
      .trim();
  };

  const dataForm = useCallback(
    (values: any): any => {
      return {
        products: productValues,
        customer: {
          first_name: values.firstName,
          last_name: values.lastName,
          middle_name: values.middleName,
          birth_day: values.birthDay,
          phone: phoneWithoutFormatting(values.phone),
          email: values.email,
        },
        recurrentable: true,
      };
    },
    [productValues],
  );

  const optionsRequestData = (values: any) => {
    return {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(dataForm(values), null, 2),
      redirect: 'follow',
    };
  };

  const onSubmit = useCallback(
    async (values: any, actions: any): Promise<void> => {
      await generalRequest('/', optionsRequestData(values));
      actions.resetForm();
      navigate(BASE_URL, { replace: true });
    },
    [dataForm],
  );

  const initialValues = {
    firstName: '',
    lastName: '',
    middleName: '',
    clubs: '',
    phone: '',
    birthDay: '',
    email: '',
    isCheck: false,
  };

  const formikProps = useMemo(
    () => ({
      initialValues,
      onSubmit,
      validationSchema: orderSchema,
    }),
    [initialValues, onSubmit],
  );

  return (
    <Formik {...formikProps}>
      {(isSubmitting) => (
        <Form {...onSubmit}>
          <div className='row'>
            <div className='col-md-6'>
              <CustomInput
                label='имя'
                name='firstName'
                type='text'
                placeholder='Введите ваше имя'
              />
            </div>
            <div className='col-md-6'>
              <CustomInput
                label='Фамилия'
                name='lastName'
                type='text'
                placeholder='Введите вашу фамилию'
              />
            </div>
          </div>

          <CustomInput
            label='Email'
            name='email'
            type='email'
            placeholder='Введите ваш email'
          />

          <CustomInputPhone
            label='Телефон'
            name='phone'
            type='tel'
            placeholder='Введите ваш телефон'
          />

          <CustomInputTooltip
            label='Дата рождения'
            name='birthDay'
            type='date'
            id='customer_birth_day'
            textTooltip='Услуга не может быть оказана лицам моложе 14 лет'
            placeholder='Дата рождения'
            min='1900-01-01'
            max='2009-01-01'
          />

          <CustomSelect label='Клуб' name='clubs' placeholder='Выберите клуб'>
            <option disabled value=''>
              Выберете клуб
            </option>
            {item &&
              [...item.clubs].map((club) => (
                <option value={club.id} key={club.address}>
                  {club.address}
                </option>
              ))}
          </CustomSelect>

          <CustomInputCheckbox
            type='checkbox'
            name='isCheck'
            label='Я ознакомлен(-на) и согласен(-на) с условиями'
          />

          <Button btnType='submit' disabled={isSubmitting}>
            Оплатить
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { Form2 };
