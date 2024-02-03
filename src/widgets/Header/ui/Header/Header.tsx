import { FC } from 'react';
import { Link } from 'react-router-dom';

import logo from '~shared/logo.png';

import { Navbar } from '../Navbar';
import { Search } from '../Search';
import { Icons } from '../Icons';

import css from './Header.module.scss';

type THeaderProps = object;

const Header: FC<THeaderProps> = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.inner}>
          <div className={css.leftHeader}>
            <Link to="/" className={css.logo}>
              <img src={logo} alt="logo" />
            </Link>
            <Navbar />
          </div>
          <div className={css.rightHeader}>
            <Search />
            <Icons />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
