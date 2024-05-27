import tentsIcon from '../../../NavigationIcons/tents.svg';
import clothesIcon from '../../../NavigationIcons/clothes.svg';
import accessoriesIcon from '../../../NavigationIcons/accessories.svg';
import equipmentIcon from '../../../NavigationIcons/equipment.svg';
import mountaineeringIcon from '../../../NavigationIcons/mountaineering.svg';
import saleIcon from '../../../NavigationIcons/sale.svg';

export const navigationData = [
  {
    id: '1',
    title: 'Tents',
    url: 'products/tents',
    icon: tentsIcon,
    submenu: [
      {
        title: 'See all',
        url: '/products/tents/all',
      },
      {
        title: 'Single',
        url: '/single',
      },
      {
        title: 'Double',
        url: '/double',
      },
      {
        title: 'For whole family',
        url: '/forFamily',
      },
    ],
  },
  {
    id: '2',
    title: 'Clothes',
    url: 'products/clothes',
    icon: clothesIcon,
    submenu: [
      {
        title: 'See all',
        url: '/all',
      },
      {
        title: 'Single',
        url: '/single',
      },
      {
        title: 'Double',
        url: '/double',
      },
      {
        title: 'For whole family',
        url: '/forFamily',
      },
    ],
  },
  {
    id: '3',
    title: 'Accessories',
    url: 'products/accessories',
    icon: accessoriesIcon,
    submenu: [
      {
        title: 'See all',
        url: '/all',
      },
      {
        title: 'Single',
        url: '/single',
      },
      {
        title: 'Double',
        url: '/double',
      },
      {
        title: 'For whole family',
        url: '/forFamily',
      },
    ],
  },
  {
    id: '4',
    title: 'Camping equipment',
    url: 'products/equipment',
    icon: equipmentIcon,
    submenu: [
      {
        title: 'See all',
        url: '/all',
      },
      {
        title: 'Sleeping Gear',
        url: '/sleeopingGear',
      },
      {
        title: 'Dining Supplies',
        url: '/diningSupplies',
      },
      {
        title: 'Shelters',
        url: '/shelters',
      },
    ],
  },
  {
    id: '5',
    title: 'Mountaineering',
    url: 'products/mountaineering',
    icon: mountaineeringIcon,
    submenu: [
      {
        title: 'See all',
        url: '/all',
      },
      {
        title: 'Single',
        url: '/single',
      },
      {
        title: 'Double',
        url: '/double',
      },
      {
        title: 'For whole family',
        url: '/forFamily',
      },
    ],
  },
  {
    id: '6',
    title: 'Sale',
    url: 'products/sale',
    icon: saleIcon,
  },
];
