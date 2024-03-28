import { Link } from 'react-router-dom';

import css from './Logo.module.scss';

interface LogoProps {
  type: 'header' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ type }) => {
  const logoClassName = type === 'header' ? css.headerLogo : css.footerLogo;

  return (
    <Link to="/" className={`${css.logo} ${logoClassName}`}>
      campfire
    </Link>
  );
};

export { Logo };
