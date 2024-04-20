import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setIsModalOpen } from '~shared/ui/Modal/model/slice';
import { useNewProductQuery } from '~entities/product';
import { ShowMoreProducts } from '~shared/ui/ShowMoreProducts';
import { Loader } from '~shared/ui/Loader';
import { ErrorPopUp } from '~widgets/error-pop-up';

const NewBlock = () => {
  const { data, isLoading } = useNewProductQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(setIsModalOpen(true));
    }
  }, [dispatch, data]);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <ErrorPopUp />;
  }

  const trimmedData = data.slice(0, 8);

  return (
    <div>
      <ShowMoreProducts title="new" products={trimmedData} />
    </div>
  );
};

export { NewBlock };
