import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '~shared/logo.png';

import { JoinUs } from '../JoinUs';
import { Info } from '../Info';
import { Catalog } from '../Catalog';

import css from './Footer.module.scss';

const Footer: FC = () => {
  const location = useLocation();
  const isErrorPage = location.key === 'default';

  return (
    <footer className={css.footer}>
      <div className="container">
        {!isErrorPage && (
          <Link to="/" className={css.logo}>
            <img src={logo} alt="logo" />
          </Link>
        )}
        {!isErrorPage && (
          <div className={css.content}>
            <Info />
            <Catalog />
            <JoinUs />
          </div>
        )}
        <span className={css.copyright}>
          CompanyName @ 2024. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export { Footer };
