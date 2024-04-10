import { ReactNode, FC } from 'react';
import css from './Header.module.scss';
import { HeaderDefault } from '../HeaderDefault';
import { useLocation } from 'react-router-dom';
import { HeaderMini } from '../HeaderMini';

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
       <div className="container">
        <div className={css.inner}>
      {!isCheckoutPage && !isThankYou && !isError ? (
        <HeaderDefault searchSlot={searchSlot} />
      ) : (
        <HeaderMini />
      )}
      </div>
      </div>
    </header>
  );
};

export { Header };
