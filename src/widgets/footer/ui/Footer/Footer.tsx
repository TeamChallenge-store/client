import { FC } from 'react';
import { Link } from 'react-router-dom';

import logo from '~shared/logo.png';

import { JoinUs } from '../JoinUs';
import { Info } from '../Info';
import { Catalog } from '../Catalog';

import css from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <Link to="/" className={css.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={css.content}>
          <Info />
          <Catalog />
          <JoinUs />
        </div>
        <p className={css.copyright}>
          CompanyName @ 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
