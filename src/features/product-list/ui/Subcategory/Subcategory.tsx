import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '~shared/ui/Modal/model/slice';
import { Loader } from '~shared/ui/Loader';
import { ErrorPopUp } from '~widgets/error-pop-up';
import { useGetCategoriesQuery } from '~entities/product';

import css from './Subcategory.module.scss';
// import tents from './tents.png';

const Subcategory = () => {
  // const { categoryId } = useParams<{ categoryId: string }>();
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories) {
      dispatch(setIsModalOpen(true));
    }
  }, [dispatch, categories]);

  if (isLoading) {
    return <Loader />;
  }

  if (!categories) {
    return <ErrorPopUp />;
  }
  // console.log(categories);

  // const category = categories?.find(cat => cat.id.toString() === categoryId);
  // console.log(category);

  // if (!category) {
  //   return <p>Category not found</p>;
  // }

  return (
    <div className={css.categoriesBlock}>
      {categories.map(category => (
        <div key={category.id}>
          <h2 className={css.category}>{category.name}</h2>
          <ul className={css.subcategoriesList}>
            {category.subcategories.map(subcategory => (
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
      ))}
    </div>
  );
};

export { Subcategory };
