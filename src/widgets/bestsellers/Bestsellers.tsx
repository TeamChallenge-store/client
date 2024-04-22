import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setIsModalOpen } from '~shared/ui/Modal/model/slice';
import { useBestsellersProductQuery } from '~entities/product';
import { ShowMoreProducts } from '~shared/ui/ShowMoreProducts';
import { Loader } from '~shared/ui/Loader';
import { ErrorPopUp } from '~widgets/error-pop-up';

const Bestsellers = () => {
  const { data, isLoading } = useBestsellersProductQuery('rate');
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

  const trimmedData = data?.slice(0, 8);

  return <ShowMoreProducts title="bestsellers" products={trimmedData} />;
};

export { Bestsellers };
