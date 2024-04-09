import { useState } from 'react';
import cn from 'classnames';
import { Icon } from '~shared/ui/Icon';
import css from './Search.module.scss';
import { SearchResults } from './SearchResults';

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.relatedTarget || !event.relatedTarget.closest('form')) {
      setIsExpanded(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const clearSearchText = () => {
    setSearchText('');
  };

  const handleFormClose = () => {
    setSearchText('');
    setIsExpanded(false);
  };

  return (
    <form
      className={cn(css.searchForm, {
        [css.expanded]: isExpanded,
      })}
    >
      <label className={css.label}>
        <Icon
          className={css.searchIcon}
          btnStyle={css.searchButton}
          type="search"
        />
        <input
          className={css.searchInput}
          type="text"
          placeholder="Search.."
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={searchText}
          onChange={handleChange}
        />
        {searchText && (
          <Icon
            type="close"
            onClick={clearSearchText}
            className={css.clearButton}
          />
        )}
      </label>
      <SearchResults
        searchText={searchText}
        className={css.searchResults}
        isExpanded={isExpanded}
        handleFormClose={handleFormClose}
      />
    </form>
  );
};

export { Search };
