import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { setIsModalOpen } from '~shared/ui/Modal/model/slice';
import { Loader } from '~shared/ui/Loader';
import { ErrorPopUp } from '~widgets/error-pop-up';
import { useGetCategoriesQuery } from '~entities/product';
import {
  setSelectedSubcategory,
  selectSelectedSubcategory,
} from '~widgets/Header/ui/Navbar/model/slice';

import css from './Subcategory.module.scss';

type TSubcategoryProps = {
  categoryId: string;
  subcategoryId: string;
};

const Subcategory: FC<TSubcategoryProps> = ({ categoryId, subcategoryId }) => {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  const dispatch = useDispatch();
  const selectedSubcategory = useSelector(selectSelectedSubcategory);

  useEffect(() => {
    if (!categories) {
      dispatch(setIsModalOpen(true));
    }
  }, [dispatch, categories]);

  useEffect(() => {
    if (subcategoryId) {
      dispatch(setSelectedSubcategory(subcategoryId));
    }
  }, [dispatch, subcategoryId]);

  const handleSubcategoryClick = (id: string) => {
    dispatch(setSelectedSubcategory(id));
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!categories) {
    return <ErrorPopUp />;
  }

  const selectedCategoryData = categories?.find(
    cat => cat.id.toString() === categoryId,
  );

  if (!selectedCategoryData) {
    return <p>Category not found</p>;
  }

  return (
    <div className={css.categoriesBlock}>
      <h2 className={css.category}>{selectedCategoryData.name}</h2>
      <ul className={css.subcategoriesList}>
        {selectedCategoryData.subcategories.map(subcategory => (
          <li key={subcategory.id}>
            <button
              type="button"
              className={css.subcategoryItem}
              onClick={() => handleSubcategoryClick(`${subcategory.id}`)}
            >
              <img
                src={subcategory.image}
                alt={subcategory.name}
                className={css.subcategoryImg}
              />
              <div
                className={cn(css.subcategoryName, {
                  [css.active]:
                    selectedSubcategory === subcategory.id.toString(),
                })}
              >
                {subcategory.name}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Subcategory };
