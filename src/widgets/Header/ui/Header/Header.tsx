import { ReactNode, FC } from 'react';
import { HeaderDefault } from '../HeaderDefault';
import { HeaderMini } from '../HeaderMini';
import { useCheckLocation } from '~features/check-location/checkLocation';
import css from './Header.module.scss';

type THeaderProps = {
  searchSlot?: ReactNode;
};

const Header: FC<THeaderProps> = ({ searchSlot }) => {
  const { isCheckoutPage, isThankYou, isError } = useCheckLocation();

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
