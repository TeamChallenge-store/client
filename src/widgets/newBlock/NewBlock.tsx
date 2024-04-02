import { useNewProductQuery } from './newBlockApi';
import { ShowMoreProducts } from '~shared/ui/ShowMoreProducts';
import css from './NewBlock.module.scss';

const NewBlock = () => {
  const { data, isLoading } = useNewProductQuery();

  if (isLoading) {
    return 'Loading ...';
  }

  if (!data) {
    return 'Something went wrong';
  }

  const trimmedData = data.slice(0, 8);

  return (
    <div className={css.newBlock}>
      <ShowMoreProducts title="new" products={trimmedData} />
    </div>
  );
};

export { NewBlock };
