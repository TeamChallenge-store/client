import firstProductImage from '../categories-banner/images/1.jpg';
import secondProductImage from '../categories-banner/images/2.jpg';
import thirdProductImage from '../categories-banner/images/3.jpg';

const categories = [
  {
    id: 0,
    backgroundImage: firstProductImage,
    title: 'Tents',
    subtitle: 'Shelter Haven: Your Gateway to Outdoor Bliss',
    linkToProduct: '/product1',
  },
  {
    id: 1,
    backgroundImage: secondProductImage,
    title: 'Backpacks',
    linkToProduct: '/product2',
  },
  {
    id: 2,
    backgroundImage: thirdProductImage,
    title: 'Backpacks',
    linkToProduct: '/product3',
  },
];

export default categories;
