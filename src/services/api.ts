// 1 раз объявляем базовый урл
import { BASE_URL } from '../utils/constants';
// export const BASE_URL = 'https://norma.nomoreparties.space/api/';

// создаем функцию проверки ответа на `ok`
export const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  // не забываем выкидывать ошибку, чтобы она попала в `catch`
  // return Promise.reject(`Ошибка ${res.status}`);
  return Promise.reject(`${res.status}`);
};

// создаем функцию проверки на `success`
export const checkSuccess = (res: any) => {
  if (res && res.success) {
    return res;
  }
  // не забываем выкидывать ошибку, чтобы она попала в `catch`
  return Promise.reject(`Ответ не success: ${res}`);
};

// создаем универсальную фукнцию запроса с проверкой ответа и `success`
// В вызов приходит `endpoint`(часть урла, которая идет после базового) и опции
export const generalRequest = async (endpoint: string, options?: any): Promise<any> => {
  // а также в ней базовый урл сразу прописывается, чтобы не дублировать в каждом запросе
  return await fetch(`${BASE_URL}${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess);
};
