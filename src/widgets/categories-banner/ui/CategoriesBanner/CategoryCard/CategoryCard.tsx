import React from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { CustomButton } from '~shared/ui/CustomButton';

import css from './CategoryCard.module.scss';

interface CategoryCardProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  linkToProduct: string;
  className?: string;
  isLeftSide?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  backgroundImage,
  title,
  subtitle,
  linkToProduct,
  className,
  isLeftSide,
}) => {
  const navigate = useNavigate();

  return (
    <div className={css.cardInner}>
      <button
        className={`${css.card} ${className}`}
        type="button"
        onClick={() => navigate(linkToProduct)}
      >
        <img src={backgroundImage} alt={title} className={css.cardImage} />
        <div className={cn(css.content, { [css.leftCard]: isLeftSide })}>
          <div className={css.contentContainer}>
            <h3 className={css.title}>{title}</h3>
            {subtitle && <p className={css.subtitle}>{subtitle}</p>}
          </div>
          {isLeftSide && (
            <CustomButton
              bgColor="white"
              className={cn(css.cardButton, { [css.leftButton]: isLeftSide })}
              to={linkToProduct}
              onClick={e => e.stopPropagation()}
            >
              See more
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // eslint-disable-next-line max-len
                  d="M8.64239 6.43312L18.1442 7.34961L17.2277 16.8515M17.4207 7.94582L6.8577 16.6504"
                  stroke="rgba(17, 29, 19, 1)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CustomButton>
          )}
          <CustomButton
            bgColor="white"
            className={css.cardButton}
            to={linkToProduct}
            onClick={e => e.stopPropagation()}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                // eslint-disable-next-line max-len
                d="M8.64239 6.43312L18.1442 7.34961L17.2277 16.8515M17.4207 7.94582L6.8577 16.6504"
                stroke="rgba(17, 29, 19, 1)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </CustomButton>
        </div>
      </button>
    </div>
  );
};

export { CategoryCard };
