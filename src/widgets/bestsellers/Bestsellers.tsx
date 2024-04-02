import { useBestsellersProductQuery } from './bestsellersApi';

import { ShowMoreProducts } from '~shared/ui/ShowMoreProducts';

const Bestsellers = () => {
  const { data, isLoading } = useBestsellersProductQuery();

  if (isLoading) {
    return 'Loading ...';
  }

  if (!data) {
    return 'Something went wrong';
  }

  const trimmedData = data.slice(0, 8);

  return (
    <div>
      <ShowMoreProducts title="bestsellers" products={trimmedData} />
    </div>
  );
};

export { Bestsellers };
