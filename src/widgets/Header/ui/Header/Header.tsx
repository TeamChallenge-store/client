import { ReactNode, FC, useState } from 'react';
import { Navbar } from '../Navbar';
import { Icons } from '../Icons';

import { Logo } from '~entities/logo';
import { Icon } from '~shared/ui/Icon';

import css from './Header.module.scss';
import { TopHeader } from '../TopHeader';
import { BurgerMenu } from '../BurgerMenu';

type THeaderProps = {
  searchSlot?: ReactNode;
};

const Header: FC<THeaderProps> = props => {
  const [openBurger, setOpenBurger] = useState(false);

  const handleBurger = () => {
    setOpenBurger(!openBurger);
  };

  return (
    <header className={css.header}>
      <TopHeader />
      <div className="container">
        <div className={css.inner}>
          <div className={css.leftHeader}>
            <Logo type="header" />
            <Navbar />
            <Icon type="burger" btnStyle={css.burger} onClick={handleBurger} />
          </div>
          <div className={css.rightHeader}>{props.searchSlot}</div>
          <Icons />
        </div>
      </div>
      <BurgerMenu isOpen={openBurger} setIsOpen={handleBurger} />
    </header>
  );
};

export { Header };
