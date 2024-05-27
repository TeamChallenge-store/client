import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '~widgets/Header/ui/Navbar/model/slice';
import { navigationData } from './config/navigationData';

import css from './Catalog.module.scss';

const Catalog: FC = () => {
  const dispatch = useDispatch();

  const handleCategorySelect = (categoryId: string) => {
    dispatch(setSelectedCategory(categoryId));
  };

  return (
    <article className={css.catalog}>
      <h4 className={css.catalogTitle}>Catalog</h4>
      <ul className={css.catalogList}>
        {navigationData.map(item => (
          <li key={item.id}>
            <NavLink
              to={item.url}
              onClick={() => handleCategorySelect(item.id)}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </article>
  );
};

export { Catalog };
