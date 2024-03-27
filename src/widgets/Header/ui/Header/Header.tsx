import { ReactNode, FC } from 'react';
import { Navbar } from '../Navbar';
import { Icons } from '../Icons';

import { Logo } from '~entities/logo';
import { Icon } from '~shared/ui/Icon';

import css from './Header.module.scss';

type THeaderProps = {
  searchSlot?: ReactNode;
};

const Header: FC<THeaderProps> = props => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.inner}>
          <div className={css.leftHeader}>
            <Logo type="header" />
            <Navbar />
            <Icon type="burger" btnStyle={css.burger} />
          </div>
          <div className={css.rightHeader}>
            {props.searchSlot}
            <Icons />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
