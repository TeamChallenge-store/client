import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import css from './BurgerMenu.module.scss';
import { Icon } from '~shared/ui/Icon';
import { Logo } from '~entities/logo';
import { Socials } from '../Socials';

type TBurgerMenuProps = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const BurgerMenu: FC<TBurgerMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div className={css.menu}>
          <div className={css.menuTop}>
            <Logo type="header" className={css.burgerLogo} />
            <Icon type="close" onClick={setIsOpen} className={css.closeBtn} />
          </div>
          <ul className={css.navigation}></ul>
          <ul className={css.info}>
            <li>
              <NavLink to="/delivery">Delivery</NavLink>
            </li>
            <li>
              <NavLink to="/payment">Payment</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs">About us</NavLink>
            </li>
          </ul>
          <Socials />
        </div>
      )}
    </>
  );
};

export { BurgerMenu };
