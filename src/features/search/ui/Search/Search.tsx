import { useState } from 'react';
import cn from 'classnames';
import { Icon } from '~shared/ui/Icon';
import css from './Search.module.scss';

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const clearSearchText = () => {
    setSearchText('');
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
          onFocus={handleFocus}
          onBlur={handleBlur}
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
    </form>
  );
};

export { Search };
