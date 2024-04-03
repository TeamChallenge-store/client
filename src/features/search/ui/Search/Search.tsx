import { useState } from 'react';
import { Icon } from '~shared/ui/Icon';

import cn from 'classnames';
import css from './Search.module.scss';

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  return (
    <form className={cn(css.searchForm, {
      [css.expanded]: isExpanded,
    })}>
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
        />
      </label>
    </form>
  );
};

export { Search };
