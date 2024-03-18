import { FC } from 'react';
import { Link } from 'react-router-dom';
import css from './CategoriesButton.module.scss';

interface CategoriesButtonProps {
  type: 'text' | 'icon';
  className?: string;
  text?: string;
  to: string;
  icon?: string;
}

const CategoriesButton: FC<CategoriesButtonProps> = ({
  type,
  className,
  text,
  to,
  icon,
}) => {
  return (
    <Link
      to={to}
      className={`${css.categoriesButton} ${css[type]} ${className || ''}`}
      onClick={e => e.stopPropagation()}
    >
      {type === 'text' && text && <span className={css.text}>{text}</span>}
      {type === 'icon' && icon && (
        <div className={css.iconContainer}>
          <img src={icon} alt="" />
        </div>
      )}
    </Link>
  );
};

export { CategoriesButton };
