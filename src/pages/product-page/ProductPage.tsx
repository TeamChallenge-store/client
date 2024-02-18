import { FC } from 'react';

import { ProductList } from '~widgets/product-list';
import { products } from '~entities/product';
import { Layout } from './ui/Layout';

type TProductPageProps = object;

const ProductPage: FC<TProductPageProps> = () => (
  <Layout
    sidebar={null}
    sortBy={null}
    productList={<ProductList products={products} />}
    pagination={null}
  />
);

export { ProductPage };
