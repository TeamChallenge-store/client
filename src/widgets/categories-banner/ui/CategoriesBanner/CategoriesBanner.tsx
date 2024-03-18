import { useNavigate } from 'react-router-dom';
import { CategoriesButton } from '~shared/ui/CategoriesButton';
import arrowIcon from '~shared/ui/Icon/icons/arrow-up.svg';

import css from './CategoriesBanner.module.scss';

const CategoriesBanner = () => {
  const navigate = useNavigate();

  const productData = [
    {
      index: 1,
      backgroundImage:
        'https://s3-alpha-sig.figma.com/img/84ac/f397/dadc7e6d0a514fe0f8d3b9f023a11da9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q~Bxn-muEsl9ItRJAmb73iUqAWNWN8JGVjWkbf7S1ZmCux8hVSbEJvwIHx7ZFt-Nm4ZdH46EurgB5jc9jCObJ34tjEs-b6DY1moKykrQz9crEIX7XIPJ4acpXnj5vBUWz~NQphaAUyq-FUW744MrNZ7paiXPvx~ZaiZQ3jK7hTSsr25~L26GInKzEUCD1IPg0u58w3l6ufFXeGF0iRdzOws4C8qMOsLAjKMgpXu6tWc-vVUVTyFdDh-KmjAtvhzzxOWyk2Mkc2HMBPo-ojI8U6v7iqJ~-0rlzAmEqW5ICypAE6PpOpq~32rw68PBTIJpGUpuiv1EQ7e~HV9CdkKCeA__',
      title: 'Tents',
      linkToProduct: '/product1',
    },
    {
      index: 2,
      backgroundImage:
        'https://s3-alpha-sig.figma.com/img/d999/7bfe/9e80837d7d3bb13a82f5f855455f3a1b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oSKTxSqqesjXAEgK8KRSGddeOOUVDpqSHB3uEtpHz0j~IOH2qO-OhEHfqiOIvKsfSLEa0HlL7wn0eBmiZVrF8j4DIKFU3TAY4Y~FrdzIDuGS4pbuVTa7L8PA95xze4sunYIZ1XBfDkI9LFhZxyyZEjRdgZA4ZdgWmFoK3S-VAfa798GsDrYeTkDkDlPG~r91Ev5VsK7fCKxF7UpTt2oFzbD0KlKrZ7LEpbOyf2wcexsE2aMJrKbRy1aNbF1vOMK3DAxOtf3vcNsTf0BBHhs0pTLBxJEWr7reZymENnIs3EYsyhGJciqqYX5Sjsv-UCWIx-94nLSDWh5J5FFp1Bj7-Q__',
      title: 'Backpacks',
      linkToProduct: '/product2',
    },
    {
      index: 3,
      backgroundImage:
        'https://s3-alpha-sig.figma.com/img/7a42/d677/6141859943c6c411ebe6f8fa10e58657?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dw4gcGp7HoqRQet~WMvu5wLr6EODwfnLsPXqvkvjEW1szhMbZq5MpPt-s82luf08KGGzOje1e9xmMrXxQ0A52V4ySlyXOYK8h~1kEiMXW2tp3r7orvgh0d8I9a-uMBwBhvtVC7kU-H68nS~ycctlMnvKgBtKWsIUywdyjkXWKiOXqX3esJTLlMLSuqSV6Oao~yiR~o76LcNt-GwLir2DPnCDix4tOeI7dK7qGma-FGJCqTBh0eYIDC6ugD94fCZ3-aPfFvqV7d2lFTy1RMpv55GeElGvtuWE5aURPnGvyW3xqIILocxBCIQOyUhOsB-w-usozT1ePKzsMmAAy8ox3A__',
      title: 'Backpacks',
      linkToProduct: '/product3',
    },
  ];

  const productLink = (index: number) => {
    return productData[index].linkToProduct;
  };

  const productButtons = [
    {
      type: 'text-icon',
      title: 'See more',
      icon: { arrowIcon },
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
          <img
            src={productData[0].backgroundImage}
            alt=""
            className={css.cardImage}
          />
          <div className={css.content}>
            <div className={css.boxLeftContent}>
              <h3 className={css.title}>{productData[0].title}</h3>
              <p className={css.subtitle}>
                Shelter Haven: Your Gateway to Outdoor Bliss
              </p>
            </div>
            <CategoriesButton
              className={css.cardButton}
              type={productButtons[0].type as 'text' | 'icon'}
              text={productButtons[0].title}
              to={productData[0].linkToProduct}
              icon={productButtons[0].icon?.arrowIcon}
            />
          </div>
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
            <img
              src={productData[index + 1].backgroundImage}
              alt=""
              className={css.cardImage}
            />
            <div className={css.content}>
              <h3 className={css.title}>{product.title}</h3>
              <CategoriesButton
                className={css.cardButton}
                type={productButtons[index + 1].type as 'text' | 'icon'}
                text={productButtons[index + 1].title}
                to={product.linkToProduct}
                icon={productButtons[index + 1].icon?.arrowIcon}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CategoriesBanner };
