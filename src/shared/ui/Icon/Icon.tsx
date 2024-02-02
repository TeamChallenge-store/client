import { FC } from 'react';
import { Link } from 'react-router-dom';

import account from '~icons/account.svg';
import like from '~icons/like.svg';
import cart from '~icons/cart.svg';
import search from '~icons/search.svg';

import css from './Icon.module.scss';

type TIconType = 'account' | 'like' | 'cart' | 'search';
type TPaths = { [key in TIconType]: string };

type IconProps = {
  type: TIconType;
  className?: string;
  to?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const paths: TPaths = {
  account,
  like,
  cart,
  search,
};

const Icon: FC<IconProps> = ({ type, to, className, onClick }) => {
  const iconElement = (
    <img className={`${className} ${css.image}`} src={paths[type]} alt={type} />
  );

  return to ? (
    <Link className={css.link} to={to}>
      {iconElement}
    </Link>
  ) : (
    <button type="button" onClick={onClick} aria-label={type}>
      {iconElement}
    </button>
  );
};

export { Icon };
