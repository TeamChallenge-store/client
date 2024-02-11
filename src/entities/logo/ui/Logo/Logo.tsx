import { Link } from 'react-router-dom';

import logo from '~shared/logo.png';

import css from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to="/" className={css.logo}>
      <img src={logo} alt="logo" />
    </Link>
  );
};

export { Logo };
