import { FC } from 'react';
import { Layout } from './ui/Layout';
import { ProductList } from '~widgets/product-list';

type TProductPageProps = object;

const ProductPage: FC<TProductPageProps> = () => (
  <Layout
    sidebar={null}
    sortBy={null}
    productList={<ProductList />}
    pagination={null}
  />
);

export { ProductPage };
