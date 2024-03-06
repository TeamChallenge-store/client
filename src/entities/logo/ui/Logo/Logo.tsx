import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import logo from '~shared/logo.png';

import css from './Logo.module.scss';

const Logo = () => {
  const location = useLocation();
  const isErrorPage = location.key === 'default';

  return (
    <Link
      to="/"
      className={cn(css.logo, {
        [css.ErrorLogo]: isErrorPage,
      })}
    >
      <img src={logo} alt="logo" />
    </Link>
  );
};

export { Logo };
