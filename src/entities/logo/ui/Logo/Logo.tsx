import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useErrorPageCheck } from '~features/error-page';

import logo from '~shared/logo.png';

import css from './Logo.module.scss';

const Logo = () => {
  const isErrorPage = useErrorPageCheck();

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
