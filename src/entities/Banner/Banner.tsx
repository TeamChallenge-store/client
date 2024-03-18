import { Link } from 'react-router-dom';
import tent from '~shared/tent.jpg';
import mountainView from './bannerImg/mountainView.jpg';
import people from './bannerImg/people.jpg';

import css from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={css.banner}>
      <div className={css.bannerImg}>
        <img src={mountainView} alt="mountain" />
        <img src={people} alt="people are on a hike" />
        <img src={tent} alt="tent" />
      </div>
      <div className={css.bannerInfo}>
        <span className={css.bannerTitle}>
          Innovations for Your Adventure Life: Convenience, Quality, Nature
        </span>
        <Link to="products/:category">
          <button type="button" className={css.bannerBtn}>
            Shop now
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Banner };
