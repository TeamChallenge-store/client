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
          <NavLink className={active} to="/tents">
            Tents
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={active} to="/clothes">
            Clothes
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={active} to="/accessories">
            Accessories
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={active} to="/equipment">
            Camping equipment
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={active} to="/mountaineering">
            Mountaineering
          </NavLink>
        </li>
        <li className={`${css.item} ${css.itemRed}`}>
          <NavLink className={active} to="/sale">
            Sale
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
