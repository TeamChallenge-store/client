import { FC } from 'react';
import { Logo } from '~entities/logo';

import css from './HeaderMini.module.scss';

const HeaderMini: FC = () => {
  return (
    <>
      <Logo type="header" className={css.logo} />
      <div className={css.info}>
        <span className={css.infoItem}>(044) 545 - 54 - 89</span>
        <span className={css.infoItem}>Daily from 9:00 to 18:00</span>
      </div>
    </>
  )
}

export { HeaderMini };