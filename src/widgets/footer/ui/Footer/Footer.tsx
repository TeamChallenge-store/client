import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from '~entities/logo';

import { JoinUs } from '../JoinUs';
import { Info } from '../Info';
import { Catalog } from '../Catalog';

import css from './Footer.module.scss';

const Footer: FC = () => {
  const location = useLocation();

  const isCheckoutPage = location.pathname === '/checkout';
  const isThankYou = location.pathname === '/thank-you';

  const isError = location.key === 'default';

  return (
    <footer className={`${css.footer} ${isError ? css.errorFooter : ''}`}>
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
        <div className={`${css.contentLinks} ${isError ? css.errorLinks : ''}`}>
          {!isError && !isCheckoutPage && !isThankYou && <JoinUs />}
          <span
            className={`${css.copyright} ${isError ? css.copyrightError : ''}`}
          >
            Campfire@ 2024. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
