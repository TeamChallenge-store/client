import { ReactNode, FC } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import { Navbar } from '../Navbar';
import { Icons } from '../Icons';
import { Logo } from '~entities/logo';
import { Icon } from '~shared/ui/Icon';

import css from './Header.module.scss';

type THeaderProps = {
  searchSlot?: ReactNode;
};

const Header: FC<THeaderProps> = props => {
  const location = useLocation();

  const isErrorPage = (pathname: string): boolean => {
    return pathname !== '/' && pathname !== '/product';
  };

  const isError = isErrorPage(location.pathname);

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.inner}>
          <div
            className={cn(css.leftHeader, {
              [css.errorLeftHeader]: isErrorPage,
            })}
          >
            <Logo />
            {!isError && <Navbar />}
            {!isError && <Icon type="burger" btnStyle={css.burger} />}
          </div>
          <div className={css.rightHeader}>
            {!isError && props.searchSlot}
            {!isError && <Icons />}
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
