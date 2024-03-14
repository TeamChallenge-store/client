import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ProductList } from '~widgets/product-list';

import 'swiper/css';

import css from './PromotionalOffers.module.scss';

const PromotionalOffers = () => {
  const products = [
    {
      id: 0,
      name: 'Tent Te Terra Incognita  ALFA 2',
      price: '4 800',
      image:
        // eslint-disable-next-line max-len
        'https://s3-alpha-sig.figma.com/img/1166/41f3/6479e8303ea19583b11bde39ecc87de2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=meaTyC2JjotLmvB7zc-r-PmNxaeUdU-qlPcrr1gVVUjFMGHeMi7SnzfCpb9i4jVpAU0RgScx5hDrcbzLBZTHtDmtuftyJvlLdkSQ-c86V9Eb2WfocGobBo11ndzQMHdi6oKuwyEu5TKAJ8rixbqlwbD-85MDvbVGkgMD3YxmNovWCa5wMp0LNK6ieQvZiOEnntGQBT5x~z58HWYVvJnE5A1XxYDgTGalr-qOfpAK-r8ebnd-Q85-K1k15g32pZh8HWkYqTjcpAOTOnf~RsfBFYzE3pFxww9b183FY5apd~Luog6Jxy9gtEIR0qHLcXJkN~4XFTdJOj2yUA5beB5HzA__',
      oldPrice: '4 800',
    },
    {
      id: 1,
      name: 'Tent Te Terra Incognita  ALFA 2',
      price: '4 800',
      image:
        // eslint-disable-next-line max-len
        'https://s3-alpha-sig.figma.com/img/c69a/7b12/5a4feacc62202e9af1ce97e8964439c4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aZ3CzQ4jevObcZ7Ca5mNAxCz5JavZkoYst~XjURZLRTIRsbxFW0VJC5EuqwKSN2PYrKq7XqrZ8eAIBL9gd3Yf6R51VUbt3FzdxAvZfJDoSgb8g47Kk5W3VKzLqiQ~O9fi-ao1UAB~LByq1Yg-Kwbf8NUoWSLPclZFLA30vDLILMhqfj06wz8F49x6TFvJjCS9NFiiX-72E0qUN12CvDkW6mDmq8jzy8mOhSBGHtZ406Yc2K6o5wivDmqy9TUKNeQQ1gsSlkzuoCYYXZTzjZGmcK1sYn4RoRVTLzyMUtqSqA3D23mdSjlhy72apMVtlGfTPyMDIL-rahaZYg0oBklQQ__',
    },
    {
      id: 2,
      name: 'Tent Te Terra Incognita  ALFA 2',
      price: '4 800',
      image:
        // eslint-disable-next-line max-len
        'https://s3-alpha-sig.figma.com/img/e314/9993/97b23bd958c5ba1f5ceae596be180801?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WfjCKSl1xSY4wryFOx0AY1~AP0KH8wyMfGw0QvpUQX~GHxBsUw3wrNpo3aq50XPLi4faNEcKY~gYNnP4ktm7fwxLyf5vrEPSwfuzNb36UpbWE3Mzkg3miuK4Cm0mP7Um0IGDbASun2eDgTwzGtybJ0Gytl58pyD7IFXNrQUGkAqEXZJO9Dv630xIfquw-0q0JeppVRM~wWXgB39DXvNrhh166ZBUMrQ8j24ZbNDQXr3-qMWqBw6tm1jyfCMz9Hn3yaH~G-DJ0XLjugU4H7LbVzXUqz2TmfQaKACgND4BJV7dS2irInep-knn7-ifLq98Fkl6nfz7tgweAFMBlRrl-w__',
      oldPrice: '4 800',
    },
    {
      id: 3,
      name: 'Tent Te Terra Incognita  ALFA 2',
      price: '4 800',
      image:
        // eslint-disable-next-line max-len
        'https://s3-alpha-sig.figma.com/img/a620/60f9/a89486e32ed4bb35b52789006e692e62?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nF7dWUKh65Gguow26YbwfgixbXKwU6G8j6Y8FwvdwaMZ5m8L6Qfu9X7JTcIhy3o2gJCi1K7i5eoEwHUcYpjUQ8OOIE-nMhBRqUXjw0dbHcEJJjtu5MMN~VyO79H0UJAM5XoPMhBAOSj-q7NcpHyNX2TLNozC4C9nRDpcUnjBGwJP98z5j5GAzjBP3FVtFYs7mRqD20IxprUS0KZ1LhsIIg6HQZdYvRMdLgTKSFGGcHz9Fy6oIPM8MQwDcpAumiRjpoO4zPI1blkVdoxFhh6nbxo0xA4tB13ETONnLqV63OsfO9z1c~GyoGLa~np8wSrX~NXJUCBMbX8V5PEsvMV5LA__',
    },
    {
      id: 4,
      name: 'Tent Te Terra Incognita  ALFA 2',
      price: '4 800',
      image:
        // eslint-disable-next-line max-len
        'https://s3-alpha-sig.figma.com/img/1166/41f3/6479e8303ea19583b11bde39ecc87de2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=meaTyC2JjotLmvB7zc-r-PmNxaeUdU-qlPcrr1gVVUjFMGHeMi7SnzfCpb9i4jVpAU0RgScx5hDrcbzLBZTHtDmtuftyJvlLdkSQ-c86V9Eb2WfocGobBo11ndzQMHdi6oKuwyEu5TKAJ8rixbqlwbD-85MDvbVGkgMD3YxmNovWCa5wMp0LNK6ieQvZiOEnntGQBT5x~z58HWYVvJnE5A1XxYDgTGalr-qOfpAK-r8ebnd-Q85-K1k15g32pZh8HWkYqTjcpAOTOnf~RsfBFYzE3pFxww9b183FY5apd~Luog6Jxy9gtEIR0qHLcXJkN~4XFTdJOj2yUA5beB5HzA__',
    },
    {
      id: 5,
      name: 'Tent Te Terra Incognita  ALFA 2',
      price: '4 800',
      image:
        // eslint-disable-next-line max-len
        'https://s3-alpha-sig.figma.com/img/c69a/7b12/5a4feacc62202e9af1ce97e8964439c4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aZ3CzQ4jevObcZ7Ca5mNAxCz5JavZkoYst~XjURZLRTIRsbxFW0VJC5EuqwKSN2PYrKq7XqrZ8eAIBL9gd3Yf6R51VUbt3FzdxAvZfJDoSgb8g47Kk5W3VKzLqiQ~O9fi-ao1UAB~LByq1Yg-Kwbf8NUoWSLPclZFLA30vDLILMhqfj06wz8F49x6TFvJjCS9NFiiX-72E0qUN12CvDkW6mDmq8jzy8mOhSBGHtZ406Yc2K6o5wivDmqy9TUKNeQQ1gsSlkzuoCYYXZTzjZGmcK1sYn4RoRVTLzyMUtqSqA3D23mdSjlhy72apMVtlGfTPyMDIL-rahaZYg0oBklQQ__',
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
          <Link to="/sale" className={css.offersLink}>
            FIND YOURS
          </Link>
        </div>
      </div>
      <div className={`${css.offersSlider} container`}>
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          navigation={{
            prevEl: '#swiper-prev',
            nextEl: '#swiper-next',
            disabledClass: css.swiperArrowDisabled,
          }}
          modules={[Navigation, Pagination]}
          className={`swiper-wrapper ${css.swiperWrapper}`}
        >
          {products.map(product => (
            <SwiperSlide key={product.id} className={css.slide}>
              <div className={css.imageInner}>
                <ProductList products={[product]} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
              strokeWidth="3"
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
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export { PromotionalOffers };
