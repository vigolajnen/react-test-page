

// Тариф дает возможность посещать 4 клуба
// export const clubsAddress = [
//   'Московское ш., 4, корп. 4',
//   'Красноармейская ул., 131',
//   'Ул. Стара Загора, 58',
//   'Южное ш., 5',
// ];

export const clubsAddress = [
  {
    id: '349577',
    address: 'Московское ш., 4, корп. 4',
  },
  {
    id: '349578',
    address: 'Красноармейская ул., 131',
  },
  {
    id: '349576',
    address:  'Южное ш., 5',
  },
  {
    id: '349577',
    address:  'Ул. Стара Загора, 58',
  },
];

export const tariffData = [
  {
    id: 1,
    title: 'Абонемент на месяц в 1 клуб',
    price: 1900,
    clubs: clubsAddress.slice(0, 3),
    countClubs: clubsAddress.slice(0, 3).length,
    subscription: true,
    products: [
      {
        product_name: 'Абонемент на месяц в 1 клуб',
        product_price: 1900,
        product_price_id: '',
      },
      {
        product_name: 'Членский взнос',
        product_price: 5000,
        product_price_id: '68195',
      },
    ]
  },
  {
    id: 2,
    title: 'Абонемент на месяц во все клубы',
    price: 3900,
    clubs: clubsAddress,
    countClubs: clubsAddress.length,
    subscription: true,
    products: [
      {
        product_name: '1 месяц Членский взнос',
        product_price: 3900,
        product_price_id: '68194',
      },
      {
        product_name: 'Членский взнос',
        product_price: 5000,
        product_price_id: '68195',
      },
    ]
  },
  {
    id: 3,
    title: 'Абонемент на месяц в 1 клуб',
    price: 7900,
    clubs: clubsAddress.slice(0, 3),
    countClubs: clubsAddress.slice(0, 3).length,
    subscription: false,
    products: [
      {
        product_name: 'Абонемент на месяц в 1 клуб',
        product_price: 7900,
        product_price_id: '',
      },
    ]
  },
  {
    id: 4,
    title: 'Абонемент на месяц во все клубы',
    price: 9900,
    clubs: clubsAddress,
    countClubs: clubsAddress.length,
    subscription: false,
    products: [
      {
        product_name: 'Мультикарта 1 месяц Все клубы Самары',
        product_price: 9900,
        product_price_id: '349579',
      },
    ]
  },
];

export const tariffMinPrice = [...tariffData].sort(function (a, b) {
  return a.price - b.price;
}).shift();


export const formatPrice = (price: any) => {
  return price.toString().slice(0, 1) + '.' + price.toString().slice(1);
}
