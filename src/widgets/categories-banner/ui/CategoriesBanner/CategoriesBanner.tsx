import { useNavigate } from 'react-router-dom';
import { CategoriesButton } from '~shared/ui/CategoriesButton';
import arrowIcon from '~shared/ui/Icon/icons/arrow-up.svg';

import css from './CategoriesBanner.module.scss';

const CategoriesBanner = () => {
  const navigate = useNavigate();

  const productData = [
    {
      index: 1,
      backgroundImage: '',
      title: 'Purus sagittis fringilla arcu neque.',
      linkToProduct: '/product1',
    },
    {
      index: 2,
      backgroundImage: '',
      title: 'Lorem ipsum dolor',
      linkToProduct: '/product2',
    },
    {
      index: 3,
      backgroundImage: '',
      title: 'Lorem ipsum dolor',
      linkToProduct: '/product3',
    },
  ];

  const productLink = (index: number) => {
    return productData[index].linkToProduct;
  };

  const productButtons = [
    {
      type: 'text',
      title: 'See more',
    },
    {
      type: 'icon',
      icon: { arrowIcon },
    },
    {
      type: 'icon',
      icon: { arrowIcon },
    },
  ];

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
        <div
          key={productData[0].index}
          className={css.card}
          onClick={() => handleCardAction(productLink(0))}
          role="button"
          onKeyDown={event => handleCardAction(productLink(0), event)}
          tabIndex={0}
        >
          <h3 className={css.title}>{productData[0].title}</h3>
          <CategoriesButton
            className={css.cardButton}
            type={productButtons[0].type as 'text' | 'icon'}
            text={productButtons[0].title}
            to={productData[0].linkToProduct}
            icon={productButtons[0].icon?.arrowIcon}
          />
        </div>
      </div>

      <div className={css.rightContainer}>
        {productData.slice(1).map((product, index) => (
          <div
            key={product.index}
            className={css.card}
            onClick={() => handleCardAction(productLink(index + 1))}
            role="button"
            onKeyDown={event => handleCardAction(productLink(index + 1), event)}
            tabIndex={0}
          >
            <h3 className={css.title}>{product.title}</h3>
            <CategoriesButton
              className={css.cardButton}
              type={productButtons[index + 1].type as 'text' | 'icon'}
              text={productButtons[index + 1].title}
              to={product.linkToProduct}
              icon={productButtons[index + 1].icon?.arrowIcon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { CategoriesBanner };
