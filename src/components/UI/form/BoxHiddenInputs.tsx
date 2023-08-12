import React, { FC } from 'react';

interface IBoxHiddenInputs {
  item: any;
}

const BoxHiddenInputs: FC<IBoxHiddenInputs> = ({ item }) => {
  return (
    item &&
    [...item.products].map((el: any, index) => (
      <div key={index}>
        <input
          type='hidden'
          id='product_name'
          name='product_name'
          value={el.product_name}
        />
        <input
          type='hidden'
          id='product_price'
          name='product_price'
          value={el.product_price}
        />
        <input
          type='hidden'
          id='product_price_id'
          name='product_price_id'
          value={el.product_price_id}
        />
      </div>
    ))
  );
};

export { BoxHiddenInputs };
