/* eslint-disable */
import { object, string, date, bool } from 'yup';
import { clubsAddress } from '../utils/dataTariff';
import 'yup-phone-lite';

const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,3})[ \\-]*)*?[0-9]{2,4}?[ \\-]*[0-9]{2,4}?$/;

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const orderSchema = object().shape({
  firstName: string()
    .trim()
    .min(2, 'Укажите ваше имя')
    .required('Заполните поле'),
  lastName: string()
    .trim()
    .min(2, 'Укажите вашу фамилию')
    .required('Заполните поле'),
  email: string()
    .matches(emailRegex, 'Укажите корректную почту, пример: test@test.ru')
    .email()
    .required('Заполните поле'),
  birthDay: date()
    .nullable()
    .max(
      new Date(Date.now() - 441504000000),
      'Услуга не может быть оказана лицам моложе 14 лет',
    )
    .required('Заполните поле'),
  isCheck: bool()
    .oneOf([true], 'Вам необходимо принять условия')
    .required('Заполните поле'),
  clubs: string()
    .oneOf(
      [
        clubsAddress[0].id,
        clubsAddress[1].id,
        clubsAddress[2].id,
        clubsAddress[3].id,
      ],
      'Выберите адрес клуба',
    )
    .required('Выберите адрес клуба'),
  phone: string()
    .min(11)
    .phone('RU', 'Пожалуйста укажите корректный номер телефона')
    .required('Заполните поле'),
});
