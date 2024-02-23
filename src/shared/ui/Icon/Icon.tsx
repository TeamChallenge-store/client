import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import account from '~icons/account.svg';
import like from '~icons/like.svg';
import cart from '~icons/cart.svg';
import search from '~icons/search.svg';
import burger from '~icons/burger.svg';
import close from '~icons/close.svg';
import remove from '~icons/remove.svg';

import css from './Icon.module.scss';

type TIconType =
  | 'account'
  | 'like'
  | 'cart'
  | 'search'
  | 'burger'
  | 'close'
  | 'remove';
type TPaths = { [key in TIconType]: string };

type IconProps = {
  type: TIconType;
  className?: string;
  to?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  btnStyle?: string;
  linkStyle?: string;
  disabled?: boolean;
};

const paths: TPaths = {
  account,
  like,
  cart,
  search,
  burger,
  close,
  remove,
};

const Icon: FC<IconProps> = ({
  type,
  to,
  className,
  btnStyle,
  linkStyle,
  onClick,
  disabled = false,
}) => {
  const iconElement = (
    <img className={`${className} ${css.image}`} src={paths[type]} alt={type} />
  );

  return to ? (
    <Link className={cn(linkStyle, css.link)} to={to}>
      {iconElement}
    </Link>
  ) : (
    <button
      disabled={disabled}
      className={btnStyle}
      type="button"
      onClick={onClick}
      aria-label={type}
    >
      {iconElement}
    </button>
  );
};

export { Icon };
