import { Icon } from '~shared/ui/Icon';

import css from './Search.module.scss';

const Search = () => {
  return (
    <form className={css.searchForm}>
      <label className={css.label}>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Search tent, fishing rod and more..."
        />
        <Icon
          disabled
          className={css.searchIcon}
          btnStyle={css.searchButton}
          type="search"
        />
      </label>
    </form>
  );
};

export { Search };
