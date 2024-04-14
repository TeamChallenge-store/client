import { useNewProductQuery } from '~entities/product';
import { ShowMoreProducts } from '~shared/ui/ShowMoreProducts';
import { Loader } from '~shared/ui/Loader';

const NewBlock = () => {
  const { data, isLoading } = useNewProductQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return 'Something went wrong';
  }

  const trimmedData = data.slice(0, 8);

  return (
    <div>
      <ShowMoreProducts title="new" products={trimmedData} />
    </div>
  );
};

export { NewBlock };
