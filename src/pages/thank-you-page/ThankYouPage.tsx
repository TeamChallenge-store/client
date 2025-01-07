import React from 'react';
import { useLocation } from 'react-router-dom';
import ThankYouLayout from './ui/ThankYouPage/ThankYouLayout';

const generateOrderNumber = () => {
  return Math.floor(Math.random() * 10000000); 
};

const generateOrderDate = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0'); 
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const year = String(now.getFullYear()).slice(2);
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  
  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

const ThankYouPage: React.FC = () => {
  const location = useLocation();
  const { products, totalPrice, orderData } = location.state || {};

  const orderDetails = {
    orderNumber: String(Math.floor(Math.random() * 10000000)),
    orderDate: generateOrderDate(),
    email: orderData?.email, 
    shippingAddress: {
      name: orderData?.first_name,
      phone: orderData?.phone_number,
      address: orderData?.address,
    },
    items: (products || []).map((product: any) => {
      return {
        name: product.product.name,
        price: parseFloat(product.product.price),
        quantity: product.product.quantity,
        imageUrl: product.product.image,
      };
    }),
    subtotal: totalPrice || 0,
    shipping: 70, 
    total: (totalPrice || 0) + 70,
  };

  console.log(orderData);

  return <ThankYouLayout {...orderDetails} />;
};

export default ThankYouPage;
