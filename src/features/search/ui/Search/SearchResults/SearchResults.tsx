import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useSearchProductsQuery } from '../SearchApi';
import css from './SearchResults.module.scss';

type TSearchResultsProps = {
  searchText: string;
  className: string;
  isExpanded: boolean;
  handleFormClose: () => void;
};

const SearchResults: FC<TSearchResultsProps> = ({
  searchText,
  className,
  isExpanded,
  handleFormClose,
}) => {
  const { data: products, error } = useSearchProductsQuery(
    searchText.length > 0 ? searchText : '',
  );
  // console.log(products);

  return (
    isExpanded && (
      <div className={cn(className)}>
        {error ? (
          <span className={css.errorMessage}>
            Sorry, your item was not found
          </span>
        ) : (
          <>
            <NavLink
              to="/allProducts"
              className={css.link}
              onClick={handleFormClose}
            >
              All search results
            </NavLink>
            {products?.slice(0, 5)?.map(product => (
              <NavLink
                key={product.id}
                to={`${product.id}`}
                className={css.link}
                onClick={handleFormClose}
              >
                {product.name}
              </NavLink>
            ))}
          </>
        )}
      </div>
    )
  );
};

export { SearchResults };
