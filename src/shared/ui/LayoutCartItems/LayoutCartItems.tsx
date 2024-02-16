import { FC } from 'react';

import css from './LayoutCartItems.module.scss';

type TLayoutCartItemsProps = {
  product?: {
    img: string;
    title: string;
    price: number;
    name: string;
  };
};

const LayoutCartItems: FC<TLayoutCartItemsProps> = props => {
  const { product } = props;

  if (!product) {
    return null;
  }

  // const { img, title, price, name } = product;

  return (
    <article className={css.card}>
      ....
      {/* <img className={css.cardImg} src={img} alt={name} />
      <div className={css.content}>
        <h3 className={css.cardTitle}>{title}</h3>
        <div className={css.cardActionInner}>
          <span className={css.cardPrice}>{`$ ${price}`}</span>
        </div>
      </div> */}
    </article>
  );
};

// LayoutCartItems.defaultProps = {
//   product: {
//     img: card,
//     title: 'Tent Te Terra Incognita  ALFA 2',
//     price: 4800,
//     name: 'card',
//   },
// };

export { LayoutCartItems };
