import { FC } from 'react';

import { Logo } from '~entities/logo';

import { JoinUs } from '../JoinUs';
import { Info } from '../Info';
import { Catalog } from '../Catalog';

import css from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.content}>
          <Logo type="footer" />
          <div className={css.contentInfo}>
            <Catalog />
            <Info />
          </div>
        </div>
        <div className={css.contentLinks}>
          <JoinUs />
          <span className={css.copyright}>
            CompanyName @ 2024. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
