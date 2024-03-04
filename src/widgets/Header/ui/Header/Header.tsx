import { ReactNode, FC } from 'react';
import cn from 'classnames';
import { useErrorPageCheck } from '~features/error-page';

import { Navbar } from '../Navbar';
import { Icons } from '../Icons';
import { Logo } from '~entities/logo';
import { Icon } from '~shared/ui/Icon';

import css from './Header.module.scss';

type THeaderProps = {
  searchSlot?: ReactNode;
};

const Header: FC<THeaderProps> = props => {
  const isErrorPage = useErrorPageCheck();

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
