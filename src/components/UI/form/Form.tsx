import React, { FC } from 'react';
import './styles.scss';
import { Button } from '../button/Button';

import { useParams } from 'react-router-dom';
import { tariffData } from '../../../utils/dataTariff';

const Form: FC = () => {
  const { id } = useParams();
  const item = [...tariffData].find((item) => item.id === Number(id));

  return (
    <form className='form needs-validation' action='http://echo.htmlacademy.ru' method='POST'>
      <label className='form-label form__item form__item--50'>
        <span className='form__label-name'>Имя</span>
        <input
          type='text'
          id='customer_first_name'
          className='form-control input-words'
          name='first_name'
          placeholder='Имя'
          required
        />
        <span className="invalid-feedback"> Заполните поле</span>
      </label>

      <label className='form-label form__item form__item--50'>
        <span className='form__label-name'>Фамилия</span>
        <input
          type='text'
          id='customer_last_name'
          className='form-control input-words'
          name='last_name'
          placeholder='Фамилия'
          required
        />
        <span className="invalid-feedback"> Заполните поле</span>
      </label>

      {item?.countClubs !== 4 && (
        <label className='form-label form__item'>
          <span className='form__label-name'>Выберете клуб</span>
          <select
            className='form-select form-control'
            size={1}
            name='price_id'
            aria-label='клуб'
            required
          >
            <option disabled value=''>
              Выберете клуб
            </option>
            {item &&
              [...item.clubs].map((club) => (
                <option value={club.id} key={club.id}>
                  {club.address}
                </option>
              ))}
          </select>
          <span className="invalid-feedback"> Заполните поле</span>
        </label>
      )}

      <label className='form-label form__item'>
        <span className='form__label-name'>Номер телефона</span>
        <input
          type='tel'
          id='customer_phone'
          className='form-control input-words'
          name='phone'
          placeholder='+7 999 999 99 99'
          autoComplete='off'
          minLength={11}
          required
        />
        <span className="invalid-feedback"> Заполните поле</span>
      </label>

      <div className='form__item'>
        <div className='form__tooltip-label'>
          <label
            className='form__label-name form-label'
            htmlFor='customer_birth_day'
          >
            Дата рождения
          </label>
          <button
            className='button button--tooltip'
            type='button'
            data-bs-toggle='tooltip'
            data-bs-placement='right'
            title='Услуга не может быть оказана лицам моложе 14 лет'
          ></button>
        </div>
        <input
          className='form-control'
          type='date'
          id='customer_birth_day'
          name='birth_day'
          min='1900-01-01'
          max='2009-01-01'
          required
        />
        <span className='valid-feedback'>Успешно</span>
        <span className='invalid-feedback'>
          Услуга не может быть оказана лицам моложе 14 лет
        </span>
      </div>
      <label className='form-label form__item'>
        <span className='form__label-name'>Email</span>
        <input
          type='text'
          id='customer_email'
          className='form-control input-words'
          name='email'
          placeholder='Email'
          required
        />
      </label>

      {item &&
        [...item.products].map((el: any, index) => (
          <div key={index}>
            <input
              type='hidden'
              id='product_name'
              name='name'
              value={el.product_name}
            />
            <input
              type='hidden'
              id='product_price'
              name='name'
              value={el.product_price}
            />
            <input
              type='hidden'
              id='product_price_id'
              name='name'
              value={el.product_price_id}
            />
          </div>
        ))}

      <Button btnType='submit'>Вперед</Button>
    </form>
  );
};

export { Form };
