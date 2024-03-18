import { FC } from 'react';
import { Link } from 'react-router-dom';
import css from './CategoriesButton.module.scss';

interface CategoriesButtonProps {
  type: 'text' | 'icon' | 'text-icon';
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
      {type === 'text-icon' && text && icon && (
        <div className={css.textAndIcon}>
          <span className={css.text}>{text}</span>
          <div className={css.iconContainer}>
            <img src={icon} alt="" />
          </div>
        </div>
      )}
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
