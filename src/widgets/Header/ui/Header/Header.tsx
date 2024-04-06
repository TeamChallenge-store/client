import { ReactNode, FC } from 'react';
import { Navbar } from '../Navbar';
import { Icons } from '../Icons';

import { Logo } from '~entities/logo';
import { Icon } from '~shared/ui/Icon';

import css from './Header.module.scss';
import { TopHeader } from '../TopHeader';

type THeaderProps = {
  searchSlot?: ReactNode;
};

const Header: FC<THeaderProps> = props => {
  return (
    <header className={css.header}>
      <TopHeader />
      <div className="container">
        <div className={css.inner}>
          <div className={css.leftHeader}>
            <Logo type="header" />
            <Navbar />
            <Icon type="burger" btnStyle={css.burger} />
          </div>
          <div className={css.rightHeader}>
            {props.searchSlot}
          </div>
          <Icons />
        </div>
      </div>
    </header>
  );
};

export { Header };
