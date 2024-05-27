import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '~shared/ui/Modal/model/slice';
import { Loader } from '~shared/ui/Loader';
import { ErrorPopUp } from '~widgets/error-pop-up';
import { useGetCategoriesQuery } from '~entities/product';

import css from './Subcategory.module.scss';
// import tents from './tents.png';

const Subcategory = ({ categoryId }: { categoryId: string }) => {
  // const { categoryId } = useParams<{ categoryId: string }>();
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories) {
      dispatch(setIsModalOpen(true));
    }
  }, [dispatch, categories]);

  useEffect(() => {
    // console.log('Categories:', categories);
    // console.log('Selected Category ID:', categoryId);
  }, [categories, categoryId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!categories) {
    return <ErrorPopUp />;
  }

  const selectedCategory = categories?.find(
    cat => cat.id.toString() === categoryId,
  );
  // console.log(selectedCategory);

  if (!selectedCategory) {
    // console.error(`Category with id ${categoryId} not found`);
    return <p>Category not found</p>;
  }

  return (
    <div className={css.categoriesBlock}>
      <h2 className={css.category}>{selectedCategory.name}</h2>
      <ul className={css.subcategoriesList}>
        {selectedCategory.subcategories.map(subcategory => (
          <li key={subcategory.id} className={css.subcategoryItem}>
            <img
              src={subcategory.image}
              alt={subcategory.name}
              className={css.subcategoryImg}
            />
            <div className={css.subcategoryName}>{subcategory.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Subcategory };
