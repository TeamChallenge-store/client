import { FC } from 'react';
import { IProductCard } from '~entities/product';
// eslint-disable-next-line max-len
import defaultImage from '../../../../shared/ui/LayoutProductCard/defaultImage.png';

import css from './Order.module.scss';

const products: IProductCard[] = [
  {
    id: 0,
    // eslint-disable-next-line max-len
    name: 'TwinZipper (System) double bike bag',
    price: '1 250',
    image:
      // eslint-disable-next-line max-len
      'https://s3-alpha-sig.figma.com/img/cccf/b39d/cd4907b7fe6f30aa4dfc7e10b4ea9f12?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qtMPnxgF5W8OGYVRmB-~ML6KwFu1Q4KhJVGz-TI3mueO4tifqze7sKBpMOeWGQdURFBVC2IReQ8eA~jcY~6C1qLyX75awKXO1FCnGu8xrOD9c0D3~ECeRFIe~6bMLfLlfnY1QFpwKQqsZlbDk1oQJEZ87xgwqfBBK21JMnAkLAMeAnY8BNzJ1Xm2Z0lwMR-lrEtvCeVEIYLvO5~3OOMsniqPBzZadyPMFt8wE~2DxRqdWn-o~ETKjoGAikE~XNXNavuMl-IHfycJvFpYKgC4ovTPNBnvpulpDArGpXzbdlzjmCBpTiG8Ix2qWw3NLWBIHydMeGJ8WP0xyRDGega1Zg__',
  },
  {
    id: 1,
    // eslint-disable-next-line max-len
    name: 'Badawi Long 6 Persons - Family Tent',
    price: '8 699',
    image:
      // eslint-disable-next-line max-len
      'https://s3-alpha-sig.figma.com/img/c80b/eb1a/633e1085cba49b5c2e17bc3492fc27ba?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LPmwYXNtJP1m87Y0KQuP~lOWuRST7AnzbtQ3O8nHf-BUhReBe7mkw7qZ0y2USg~~xO~KoJJjTVrTLCJw2aS3aNjIZAc-P1HoneZBStxf4OilQEKvDxy2eAIuZayKlvN05RUbpeMk3b7sLje15LEBuhdCkhr41Zk0if~eUNG5tPFwfeex35zI5cwROqSUNzZMqQnKQsmWj109v7UGEP-NXW8cQQ-rmfe8hlYtIK2Du4EZRGhSpBlTG27shRAyTmwnjGtZXUd1oSLIALhr2ha~oGng07yZbjxMlzBZjaH-rE~FTC2UoLHOs9Udlvwborn4Ri7snrdf~UkBhhfgvo5MKQ__',
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
