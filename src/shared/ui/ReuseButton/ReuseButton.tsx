import React, { FC } from 'react';
import { Link, Path } from 'react-router-dom';
import cn from 'classnames';

import css from './ReuseButton.module.scss';

type TButtonColor = 'green' | 'white';

type TReuseButtonProps = {
  children: React.ReactNode;
  className?: string;
  to?: string | Partial<Path>;
  bgColor?: TButtonColor;
  onClick?: (e: React.MouseEvent) => void;
  buttonType?: 'button' | 'submit' | 'reset';
};

const ReuseButton: FC<TReuseButtonProps> = ({
  children,
  className = '',
  to = '/',
  bgColor = 'green',
  onClick = () => {},
  buttonType = 'button',
}) => {
  const hasIcon = React.Children.count(children) > 1;

  return to ? (
    <Link
      to={to}
      className={cn(
        css[bgColor],
        className,
        css.navigation,
        hasIcon && css.icon,
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={cn(css[bgColor], className, css.navigation)}
      /* eslint-disable react/button-has-type */
      type={buttonType}
    >
      {children}
    </button>
  );
};

export { ReuseButton };
