import { Link } from 'react-router-dom';

import css from './Logo.module.scss';

interface LogoProps {
  type: 'header' | 'footer';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ type, className }) => {
  const logoClassName = type === 'header' ? css.headerLogo : css.footerLogo;

  return (
    <Link to="/" className={`${css.logo} ${logoClassName} ${className}`}>
      campfire
    </Link>
  );
};

export { Logo };
