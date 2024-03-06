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
  const isErrorPage = location.key === 'default';

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
            {!isErrorPage && <Navbar />}
            {!isErrorPage && <Icon type="burger" btnStyle={css.burger} />}
          </div>
          <div className={css.rightHeader}>
            {!isErrorPage && props.searchSlot}
            {!isErrorPage && <Icons />}
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
