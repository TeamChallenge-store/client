import { ProductList } from '~widgets/product-list';
import { products } from '~entities/product';
import { Layout } from './ui/Layout';
import { CustomSelect } from '~shared/ui/CustomSelect';

import options from './model/selectOptions';
import { ProductListFilters } from '~features/product-list';

const ProductPage = () => (
  <Layout
    sidebar={null}
    sortBy={<CustomSelect options={options} startValue="Popularity" />}
    filtersMob={<ProductListFilters />}
    productList={<ProductList products={products} />}
    pagination={null}
  />
);

export { ProductPage };
