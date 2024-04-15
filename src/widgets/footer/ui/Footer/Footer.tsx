import { FC } from 'react';
import cn from 'classnames';
import { checkLocation } from '~features/check-location/checkLocation';
import { Logo } from '~entities/logo';
import { JoinUs } from '../JoinUs';
import { Info } from '../Info';
import { Catalog } from '../Catalog';

import css from './Footer.module.scss';

const Footer: FC = () => {
  const { isCheckoutPage, isThankYou, isError } = checkLocation();

  return (
    <footer className={cn(css.footer, { [css.miniFooter]: isError })}>
      <div className="container">
        {!isError && !isCheckoutPage && !isThankYou && (
          <div className={css.content}>
            <Logo type="footer" />
            <div className={css.contentInfo}>
              <Catalog />
              <Info />
            </div>
          </div>
        )}
        <div className={cn(css.contentLinks, { [css.miniLinks]: isError })}>
          {!isError && !isCheckoutPage && !isThankYou && <JoinUs />}
          <span className={cn(css.copyright, { [css.miniCopyright]: isError })}>
            Campfire@ 2024. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
