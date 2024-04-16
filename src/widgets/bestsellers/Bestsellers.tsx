import { useBestsellersProductQuery } from '~entities/product';
import { ShowMoreProducts } from '~shared/ui/ShowMoreProducts';
import { Loader } from '~shared/ui/Loader';

const Bestsellers = () => {
  const { data, isLoading } = useBestsellersProductQuery('rate');

  if (isLoading) {
    return <Loader />;
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
