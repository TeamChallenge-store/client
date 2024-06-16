import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import arrow from '../../product-list/ui/icons/arrow.svg';

import { brandList } from '../data/brandList';
import css from './FilterByBrand.module.scss';
import { CustomCheckbox } from '~shared/ui/CustomCheckbox';

type TFilterByBrandProps = {};

const FilterByBrand: FC<TFilterByBrandProps> = () => {
  const [isBrandVisible, setIsBrandVisible] = useState(true);
  const [isShowMore, setIsShowMore] = useState(false);

  const [visibleBrandCount, setVisibleBrandCount] = useState(5);

  useEffect(() => {
    setVisibleBrandCount(isShowMore ? brandList.length : 5);
  }, [isShowMore]);

  return (
    <section className={css.filterBrand}>
      <div className={css.topContainer}>
        <h3 className={css.title}>Brand</h3>
        <button
          className={css.showButton}
          type="button"
          onClick={() => setIsBrandVisible(prevState => !prevState)}
        >
          <img
            src={arrow}
            alt="arrow"
            className={cn(css.arrow, {
              [css.rotateArrow]: !isBrandVisible,
            })}
          />
        </button>
      </div>
      <div
        className={cn(css.buttonContainer, {
          [css.showBrand]: isBrandVisible,
        })}
      >
        {brandList.slice(0, visibleBrandCount).map(brand => (
          <CustomCheckbox
            className={cn(css.brandItem, {
              [css.showBrands]: !isShowMore && brandList.indexOf(brand) >= 5,
            })}
            key={brand}
            labelText={brand}
          />
        ))}

        <button
          type="button"
          onClick={() => setIsShowMore(prevState => !prevState)}
          className={css.showMoreButton}
        >
          <img
            src={arrow}
            alt="showMoreArrow"
            className={cn(css.showMoreArrow, {
              [css.rotateMoreArrow]: !isShowMore,
            })}
          />
          {!isShowMore ? `Show all ${brandList.length}` : 'Show less'}
        </button>
      </div>
    </section>
  );
};

export { FilterByBrand };
