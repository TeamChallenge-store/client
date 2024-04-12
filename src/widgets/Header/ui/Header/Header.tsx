import { ReactNode, FC } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderDefault } from '../HeaderDefault';
import { HeaderMini } from '../HeaderMini';

import css from './Header.module.scss';

type THeaderProps = {
  searchSlot?: ReactNode;
};

const Header: FC<THeaderProps> = ({ searchSlot }) => {
  const location = useLocation();

  const isCheckoutPage = location.pathname === '/checkout';
  const isThankYou = location.pathname === '/thank-you';
  const isError = location.key === 'default';

  return (
    <header className={css.header}>
      {!isCheckoutPage && !isThankYou && !isError ? (
        <HeaderDefault searchSlot={searchSlot} />
      ) : (
        <HeaderMini />
      )}
    </header>
  );
};

export { Header };
