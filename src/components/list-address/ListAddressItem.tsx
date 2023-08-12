import React, { FC } from 'react';
import './styles.scss';
import SvgPin from '../icons/Pin';

interface ListAddressItem {
  address: string;
}

const ListAddressItem: FC<ListAddressItem> = ({ address }) => {
  return (
    <li className='list-address__item'>
      <span>{address}</span>
      <SvgPin />
    </li>
  );
};

export { ListAddressItem };
