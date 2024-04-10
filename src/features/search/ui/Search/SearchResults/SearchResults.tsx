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
  const {
    data: products,
    isLoading,
    error,
  } = useSearchProductsQuery(searchText.length > 0 ? searchText : '');

  return (
    isExpanded && (
      <div className={cn(className)}>
        {isLoading && <div className={css.loading}>Loading...</div>}
        {(error || products?.length === 0) && (
          <span className={css.errorMessage}>
            Sorry, your item was not found
          </span>
        )}
        {products && products.length > 0 && !isLoading && !error && (
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
