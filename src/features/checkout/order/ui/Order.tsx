import { FC } from 'react';
import { IProductCard } from '~entities/product';
// eslint-disable-next-line max-len
import defaultImage from '../../../../shared/ui/LayoutProductCard/defaultImage.png';

import css from './Order.module.scss';

const products: IProductCard[] = [
  {
    id: 0,
    // eslint-disable-next-line max-len
    name: 'Kelty Tallboy Family Car Camping Tent, 4 or 6 Person Freestanding Shelter',
    price: '1 250',
    image:
      // eslint-disable-next-line max-len
      'https://s3-alpha-sig.figma.com/img/cccf/b39d/cd4907b7fe6f30aa4dfc7e10b4ea9f12?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cch45HuB8f~xw0TKMuDzcHgF0Xkit3iPi18OUHWrr2ArTZU~qy1ZnZ-kIGWRW-V~zwYcQo9TFQCLs1le7fNK0MwHVzz-BvoJsm~i78JAeeMqkwa5Ef3ON4JBE2Cg-EwYdG4ayDqNtqYveEd4SK6eqipVNAURHfAfI~vLyibii4PhyonXg7YiyLEESDXIkNPgHC7flRbWAVabk6Afulmm2fuCrB9qCaJy0IiNtC-eJ9FK6Cew1HUC1RM-~AM18vXuc5f0eubGwUwn2JywCETKaGU8eT3cjGVWa-zYI3Wi9kj8FhLyAppKL6OH1BwIaPwnJVhGVLHQeEIldoGI36yJ7w__',
  },
  {
    id: 1,
    // eslint-disable-next-line max-len
    name: 'Kelty Tallboy Family Car Camping Tent, 4 or 6 Person Freestanding Shelter',
    price: '8 699',
    image:
      // eslint-disable-next-line max-len
      'https://s3-alpha-sig.figma.com/img/c80b/eb1a/633e1085cba49b5c2e17bc3492fc27ba?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OA6RAnQm9xcR4umJVLS9~giI4u5m8hm66SVsgoAua0y8HpJ81yrkbpgVW32RwnYZocdvFqzrOygzhYYdJTb-kxltLajieSLd46n23p9pai9NSe-bvZU0c94DaiWZxCF0Bk4WnIHgnqNI8Vc6-5R7gHbyyeVBRGqM3MTGmQiohex-1m6EQNDFIluwBEtXhW9rZtFiSB8ag8tRAkWEJQLVe26SbFuyfzdq3jmqnaKv7A-fYIH8YazHj~sujxw-aodHFqI4e6suFyAOjIb0MZ2Kc3A0O-8orRfseztf4O0L4Ucg3bwkwhJLDXTuC9-QyL9~EwTF5qXquimOdHpoQt2FxQ__',
  },
];

const Order: FC = () => {
  return (
    <div className={css.orderContainer}>
      <ul className={css.orderList}>
        {products?.map(item => (
          <li key={item.id} className={css.orderItem}>
            <div className={css.imageContainer}>
              <img
                src={item.image || defaultImage}
                alt={item.name}
                className={css.image}
              />
            </div>
            <p className={css.productName}>{item.name}</p>
            <span className={css.productPrice}>{`${item.price} ₴`}</span>
          </li>
        ))}
      </ul>
      <button type="button" className={css.editButton}>
        Edit products
      </button>
    </div>
  );
};

export { Order };
