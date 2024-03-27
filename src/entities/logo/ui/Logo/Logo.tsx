import { Link } from 'react-router-dom';

import headerLogo from '~shared/headerLogo.png';
import footerLogo from '~shared/footerLogo.png';

import css from './Logo.module.scss';

interface LogoProps {
  type: 'header' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ type }) => {
  const logoSrc = type === 'header' ? headerLogo : footerLogo;
  const logoClassName = type === 'header' ? css.headerLogo : css.footerLogo;

  return (
    <Link to="/" className={`${css.logo} ${logoClassName}`}>
      <img src={logoSrc} alt="logo" />
    </Link>
  );
};

export { Logo };
