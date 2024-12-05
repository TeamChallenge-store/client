import React from 'react';
import ThankYouLayout from './ui/ThankYouPage/ThankYouLayout';

const ThankYouPage: React.FC = () => {
  const orderDetails = {
    orderNumber: '3827379',
    orderDate: '25.03.24 15:59',
    email: 'iris.anna898@gmail.com',
    shippingAddress: {
      name: 'Anna',
      phone: '+380976765454',
      address: 'Kyiv, Nova Post №164',
    },
    items: [
      { name: 'Proof Offroad M bike saddlebag', price: 1200, quantity: 1 },
      { name: 'Badawi Long 6 Persons - Family Tent', price: 8699, quantity: 1 },
      { name: 'Downieville All Mountain Bike Shoes', price: 3502, quantity: 1 },
    ],
    subtotal: 13401,
    shipping: 70,
    total: 13471,
  };

  return <ThankYouLayout {...orderDetails} />;
};

export default ThankYouPage;
