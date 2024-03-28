import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ProductList } from '~widgets/product-list';

import 'swiper/css';

import css from './PromotionalOffers.module.scss';
import { CustomButton } from '~shared/ui/CustomButton';

const PromotionalOffers = () => {
  const products = [
    {
      id: 0,
      name: 'Tent Te Terra Incognita  ALFA 2',
      price: '4 800',
      image:
        // eslint-disable-next-line max-len
        'https://s3-alpha-sig.figma.com/img/1166/41f3/6479e8303ea19583b11bde39ecc87de2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gfepnp60GQtY7wWdzlJnC2vWV47e2FXAXon6x4NdnxhY3bS4V3xgPbb73FJyY8LZD-BlTbetpPMVcp3Ym8L9CZg4eSgPXN36ASCc31i0KOPlxJQMlLh5TePAfVGnFTK-NTHqdj5P8WlDYRLiI9DvW-XmU50N1aq2WLjY8annaYFU9K5ea~lmW8hS2fORPv58BfwVGnBd9Mf9KndrYT~01qk4X-8kdKGa0FMr3VEUMggZvGohmRmeNo6IGnnDUaPsvVCnLqUjbCinysOjIa1blauk2M0nj-2XbBwfdP84wmC4TS7PirUi2nzWy7lLlQcySxsow6dc6CLju15t~sMLUQ__',
      oldPrice: '4 800',
    },
    {
      id: 1,
      name: 'Tent Te Terra Incognita  ALFA 2',
      price: '7 777',
      image:
        // eslint-disable-next-line max-len
        'https://s3-alpha-sig.figma.com/img/e314/9993/97b23bd958c5ba1f5ceae596be180801?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cu~lSvti7FHpcEFVqvIaHRzNZHUe3kqkA56UrIS8U9OUu6Tx64bGQxvd4n7KVVWgU2wiBFEDq7TGM4ybvjfpqvr7CgkAhU6PVL2-eP585PHL2YsXoLNwGnJhNLsLw4p1l3LOYy74vOVXTUgIrnwuN4tkJs95ub1Y---2qnHNmTe8KN8ilZq6O3kXTgNY7ZHrYfcLnEPNXBucQsfSSWhT8CfTa9hkoiq4Z~zDuI4RQvy7gb1WCcLucDzhKzU~LRebjzvMuIsixzMwZl5lBqz8TV8k1e5EcEALPa~5itf7ukCWaVI-LSCzQL8nzACPRHWlEPuyX~vm2nNAdFCyusHjTw__',
    },
    {
      id: 2,
      name: 'Tent Te Terra Incognita  ALFA 2',
      price: '9 787',
      image:
        // eslint-disable-next-line max-len
        'https://s3-alpha-sig.figma.com/img/a620/60f9/a89486e32ed4bb35b52789006e692e62?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJeUQfOCWL5vA6WD--3qKEmH~q-8q3l635NXnU~KaIj8hldPLEbA76LXkmXzM0I3kr8stuepmfTtSnIkAzw8oMhnVTMKoO4Kj00FVUsOxRYiUwBXWWlEjt7OWny9Rbq44mUfPiTuUL8goRTFkrvSd5UsAPUvwS0hXJaPwas~UBU4BsWDVO6SbrPC6JdSb8FIpgsyqBn40IA0URtRcbEFt6XHdllQmptFP4x0sslPbbvL45d5WIzl6HfTSqOzTnOPZbVxi5UnjgBePucOktFtk8h7FqRdl9II0A4LD9VYD0qwf42MWbBJs1Cp6b8S8QLgdrJZ7KykFAy-p9sDUtONsg__',
      oldPrice: '4 800',
    },
    {
      id: 3,
      name: 'Tent Te Terra Incognita  ALFA 2',
      price: '2 158',
      image:
        // eslint-disable-next-line max-len
        'https://s3-alpha-sig.figma.com/img/c69a/7b12/5a4feacc62202e9af1ce97e8964439c4?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hha08xraJtRNLNq3JLnBRLdgIpU~GXn8L0zUcN9XBV93XHGlkudSbcC6sVxQwGltaCks6bTfW9qGuYF82d2gFH2MN1lErYR7IoiTUMDoH~79ioDMLvX4CXhohYiNYDtefz5ipw6W326Fxr5iVr3dOQbqJ0fWFTioUKH0LCJgvvx~5QdX9y7PjUtMaY9F5sbPkM5PWnnANU9LT~P~RnyUKmnZOtwGNow6cEvBHj4e4mmLQtNdcbve~LzpzrpcrInVZQxkx5jiw8QbjXnjKKFF4G0NNIgFTw2o7esFmjKT2xY47RIjzOCWVbBBWHBfYDZyshmdgko3akPVTHlq5TNiJQ__',
    },
    {
      id: 4,
      name: 'Tent Te Terra Incognita  ALFA 2',
      price: '4 800',
      image:
        // eslint-disable-next-line max-len
        'https://s3-alpha-sig.figma.com/img/e314/9993/97b23bd958c5ba1f5ceae596be180801?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cu~lSvti7FHpcEFVqvIaHRzNZHUe3kqkA56UrIS8U9OUu6Tx64bGQxvd4n7KVVWgU2wiBFEDq7TGM4ybvjfpqvr7CgkAhU6PVL2-eP585PHL2YsXoLNwGnJhNLsLw4p1l3LOYy74vOVXTUgIrnwuN4tkJs95ub1Y---2qnHNmTe8KN8ilZq6O3kXTgNY7ZHrYfcLnEPNXBucQsfSSWhT8CfTa9hkoiq4Z~zDuI4RQvy7gb1WCcLucDzhKzU~LRebjzvMuIsixzMwZl5lBqz8TV8k1e5EcEALPa~5itf7ukCWaVI-LSCzQL8nzACPRHWlEPuyX~vm2nNAdFCyusHjTw__',
    },
    {
      id: 5,
      name: 'Tent Te Terra Incognita  ALFA 2',
      price: '4 800',
      image:
        // eslint-disable-next-line max-len
        'https://s3-alpha-sig.figma.com/img/c69a/7b12/5a4feacc62202e9af1ce97e8964439c4?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hha08xraJtRNLNq3JLnBRLdgIpU~GXn8L0zUcN9XBV93XHGlkudSbcC6sVxQwGltaCks6bTfW9qGuYF82d2gFH2MN1lErYR7IoiTUMDoH~79ioDMLvX4CXhohYiNYDtefz5ipw6W326Fxr5iVr3dOQbqJ0fWFTioUKH0LCJgvvx~5QdX9y7PjUtMaY9F5sbPkM5PWnnANU9LT~P~RnyUKmnZOtwGNow6cEvBHj4e4mmLQtNdcbve~LzpzrpcrInVZQxkx5jiw8QbjXnjKKFF4G0NNIgFTw2o7esFmjKT2xY47RIjzOCWVbBBWHBfYDZyshmdgko3akPVTHlq5TNiJQ__',
    },
  ];

  return (
    <div className={css.offers}>
      <div className={css.offersBunner}>
        <div className={css.offersBunnerContent}>
          <span className={css.offersSubtitle}>Shoes and jackets</span>
          <h3 className={css.offersTitle}>Final sale up to 30%</h3>
          <p className={css.offersDescription}>
            Final сlearance on apparel and footwear
          </p>
          <CustomButton to="/sale" bgColor='white' className={css.offersLink}>
            see more
            <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    // eslint-disable-next-line max-len
                    d="M8.64239 6.43312L18.1442 7.34961L17.2277 16.8515M17.4207 7.94582L6.8577 16.6504"
                    stroke="rgba(17, 29, 19, 1)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
          </CustomButton>
        </div>
      </div>
      <div className={`${css.offersSlider} container`}>
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          navigation={{
            prevEl: '#swiper-prev',
            nextEl: '#swiper-next',
            disabledClass: css.swiperArrowDisabled,
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 3,
              
            },
            1024: {
              slidesPerView: 4,
            }
          }}
          modules={[Navigation, Pagination]}
          className={`swiper-wrapper ${css.swiperWrapper}`}
        >
          {products.map(product => (
            <SwiperSlide key={product.id} className={`${css.swiperSlide} swiper-slide`}>
              <div className={css.imageInner}>
                <ProductList products={[product]} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={css.swiperNavigationArrows}>
        <div id="swiper-prev" className={`swiper-prev ${css.swiperPrev} `}>
          <svg
            width="19.94"
            height="20.85"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M10.2929 19.0977L1.82227 10.6271L10.2929 2.15648M2.99874 10.6271L20.1752 10.6271"
              stroke="#111D13"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div id="swiper-next" className={`swiper-next ${css.swiperNext}`}>
          <svg
            width="19.94"
            height="20.85"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M10.2929 19.0977L1.82227 10.6271L10.2929 2.15648M2.99874 10.6271L20.1752 10.6271"
              stroke="#111D13"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export { PromotionalOffers };
