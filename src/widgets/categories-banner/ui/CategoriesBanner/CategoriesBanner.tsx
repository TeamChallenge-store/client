import { useNavigate } from 'react-router-dom';
import { CategoriesButton } from '~shared/ui/CategoriesButton';
import arrowIcon from '~shared/ui/Icon/icons/arrow-up.svg';
import catergoriesData from '../../catergories';

import css from './CategoriesBanner.module.scss';

const CategoriesBanner = () => {
  const navigate = useNavigate();

  const productLink = (index: number) => {
    return catergoriesData[index].linkToProduct;
  };

  const handleCardAction = (
    link: string,
    event?: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (!event || event.key === 'Enter' || event.key === ' ') {
      navigate(link);
    }
  };

  return (
    <div className={css.cardContainer}>
      <div className={css.leftContainer}>
        <div className={css.cardHoverEffect}>
          <div
            key={catergoriesData[0].id}
            className={css.card}
            onClick={() => handleCardAction(productLink(0))}
            role="button"
            onKeyDown={event => handleCardAction(productLink(0), event)}
            tabIndex={0}
          >
            <img
              src={catergoriesData[0].backgroundImage}
              alt={catergoriesData[0].title}
              className={css.cardImage}
            />
            <div className={css.content}>
              <div className={css.boxLeftContent}>
                <h3 className={css.title}>{catergoriesData[0].title}</h3>
                <p className={css.subtitle}>{catergoriesData[0].subtitle}</p>
              </div>
              <CategoriesButton
                className={css.cardButton}
                type="text-icon"
                text="See more"
                to={catergoriesData[0].linkToProduct}
                icon={arrowIcon}
              />
              <CategoriesButton
                className={css.cardButtonArrowFirst}
                type="icon"
                to={catergoriesData[0].linkToProduct}
                icon={arrowIcon}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={css.rightContainer}>
        {catergoriesData.slice(1).map((product, index) => (
          <div className={css.cardHoverEffect} key={product.id}>
            <div
              className={css.card}
              onClick={() => handleCardAction(productLink(index + 1))}
              role="button"
              tabIndex={0}
              onKeyDown={event =>
                handleCardAction(productLink(index + 1), event)
              }
            >
              <img
                src={catergoriesData[index + 1].backgroundImage}
                alt={product.title}
                className={css.cardImage}
              />
              <div className={css.content}>
                <h3 className={css.title}>{product.title}</h3>
                <CategoriesButton
                  className={css.cardButton}
                  type="icon"
                  to={product.linkToProduct}
                  icon={arrowIcon}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CategoriesBanner };
