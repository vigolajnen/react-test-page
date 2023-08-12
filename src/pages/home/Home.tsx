import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Promo } from '../../components/promo/Promo';
import { tariffMinPrice } from '../../utils/dataTariff';
import { Timer } from '../../components/timer/Timer';
import { Profit } from '../../components/profit/Profit';
import { Gallery } from '../../components/gallery/Gallery';
import { Advantages } from '../../components/advantages/Advantages';
import { Faq } from '../../components/faq/Faq';
import { useModal } from '../../hooks/useModal';

const HomePage: FC = () => {
  const { openModal } = useModal();

  return (
    <main className='main'>
      <Promo onClick={openModal} minTariff={tariffMinPrice} />
      <Timer />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Profit onClick={openModal} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Gallery />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Advantages />
      </motion.div>

      <Faq title='Отвечаем на Вопросы' />
    </main>
  );
};

export { HomePage };
