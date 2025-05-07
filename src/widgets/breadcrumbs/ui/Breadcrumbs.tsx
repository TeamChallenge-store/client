import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import homeIcon from '../homeIcon.svg';
import arrowRight from '../arrowRight.svg';
import css from './Breadcrumbs.module.scss';

type BreadcrumbsProps = {
  mainPage: string;
  categoryName: string;
  className?: string;
};

const Breadcrumbs: FC<BreadcrumbsProps> = ({ mainPage, categoryName, className }) => {
  return (
    <div className={clsx(css.breadcrumbs, className)}>
      <span className={css.breadcrumbItem}>
        <Link to="/">
          <img className={css.home} src={homeIcon} alt="home" />
        </Link>
      </span>
      <span className={css.breadcrumbSeparator}>
        <img className={css.arrow} src={arrowRight} alt="arrow" />
      </span>
      <span className={css.breadcrumbItem}>
        <Link to="/products">{mainPage}</Link>
      </span>
      {mainPage !== categoryName && (
        <>
          <span className={css.breadcrumbSeparator}>
            <img className={css.arrow} src={arrowRight} alt="arrow" />
          </span>
          <span className={css.breadcrumbItem}>{categoryName}</span>
        </>
      )}
    </div>
  );
};

export { Breadcrumbs };