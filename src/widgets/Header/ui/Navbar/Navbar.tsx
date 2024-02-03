import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import css from './Navbar.module.scss';

const active = ({ isActive }: { isActive: boolean }) =>
  classNames(css.link, {
    '': isActive,
  });

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={active} to="/about">
            About us
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={active} to="/contacts">
            Contacts
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={active} to="/payment">
            Payment
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={active} to="/delivery">
            Delivery
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
