import tentsIcon from '../../../NavigationIcons/tents.svg';
import clothesIcon from '../../../NavigationIcons/clothes.svg';
import accessoriesIcon from '../../../NavigationIcons/accessories.svg';
import equipmentIcon from '../../../NavigationIcons/equipment.svg';
import mountaineeringIcon from '../../../NavigationIcons/mountaineering.svg';
import saleIcon from '../../../NavigationIcons/sale.svg';

export const navigationData = [
  {
    title: 'Tents',
    url: 'products/tents',
    icon: tentsIcon,
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
    title: 'Sale',
    url: 'products/sale',
    icon: saleIcon,
  },
];
