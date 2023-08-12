import React, { FC } from 'react';
import './styles.scss';
import { ListAddressItem } from './ListAddressItem';
import { clubsAddress } from '../../utils/dataTariff';

interface IListAddress {
  addClass?: string; 
}

const ListAddress: FC<IListAddress> = ({addClass}) => {
  return (
    <ul className={addClass !== undefined ? `list-address ` + addClass : 'list-address'}>
      {clubsAddress.length > 0 && clubsAddress.map((item, index) => (
        <ListAddressItem key={index} address={item.address} />
      ))}
    </ul>
  );
};

export { ListAddress };
