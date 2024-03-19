import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import tent from '~shared/tent.jpg';
import mountainView from './bannerImg/mountainView.jpg';
import people from './bannerImg/people.jpg';

import css from './Banner.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <>
      <div className={css.bannerSwiper}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 9000,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            bulletClass: `swiper-pagination-bullet ${css.swiperPaginationBullet}`,
            bulletActiveClass: `swiper-pagination-bullet-active ${css.swiperPaginationBulletActive}`,
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          modules={[Autoplay, Scrollbar, Navigation, Pagination]}
        >
          <SwiperSlide>
            <div className={css.bannerImg}>
              <img src={mountainView} alt="mountain" />
            </div>
            <div className={css.bannerInfo}>
              <span className={css.bannerTitle}>
                Innovations for Your Adventure Life: Convenience, Quality,
                Nature
              </span>
              <Link to="products/:category">
                <button type="button" className={css.bannerBtn}>
                  Shop now
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.bannerImg}>
              <img src={people} alt="people are on a hike" />
            </div>
            <div className={css.bannerInfo}>
              <span className={css.bannerTitle}>
                Innovations for Your Adventure Life: Convenience, Quality,
                Nature
              </span>
              <Link to="products/:category">
                <button type="button" className={css.bannerBtn}>
                  Shop now
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.bannerImg}>
              <img src={tent} alt="tent" />
            </div>
            <div className={css.bannerInfo}>
              <span className={css.bannerTitle}>
                Innovations for Your Adventure Life: Convenience, Quality,
                Nature
              </span>
              <Link to="products/:category">
                <button type="button" className={css.bannerBtn}>
                  Shop now
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <div className={`swiper-button-prev ${css.swiperButtonPrev}`} />
          <div className={`swiper-button-next ${css.swiperButtonPrev}`} />
          <div className={`swiper-pagination ${css.swiperPagination}`}>
            <span>
              className=
              {css.swiperPaginationBullet}
            </span>
          </div>
        </Swiper>
      </div>

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
    </>
  );
};

export { Banner };
