import React, { FC } from 'react';
import './styles.scss';
// import LogoPic from '../../../images/logo.svg';
import SvgLogo from '../../icons/Logo';


const LogoLink: FC = () => {
  return (
    <a className="logo" href="/" >
      <SvgLogo aria-label="Логотип компании Фитнес Хаус" />
      {/* <img src={LogoPic} alt="Логотип компании Фитнес Хаус" width="160" height="27" loading="lazy" /> */}
    </a>
  )
}

export { LogoLink };
