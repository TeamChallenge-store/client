import { useSearchParams } from 'react-router-dom';

import { ProductList } from '~widgets/product-list';
import { ProductListFilters } from '~features/product-list';
import { useProductCategoryQuery } from '~entities/product';
import { CustomSelect } from '~shared/ui/CustomSelect';

import { Layout } from './ui/Layout';
import options from './model/selectOptions';

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const { data: products, isLoading } = useProductCategoryQuery(
    searchParams.get('sortBy')?.toString() ?? 'rate',
  );

  if (isLoading) {
    return 'Loading';
  }

  if (!products) {
    return 'no category';
  }

  return (
    <Layout
      sidebar={null}
      sortBy={<CustomSelect options={options} startValue="Popularity" />}
      filtersMob={<ProductListFilters />}
      productList={<ProductList products={products} />}
      pagination={null}
    />
  );
};

export { ProductPage };
