import { useLocation } from 'react-router-dom';

export const checkLocation = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();

  const isCheckoutPage = location.pathname === '/checkout';
  const isThankYou = location.pathname === '/thank-you';
  const isError = location.pathname !== '/' && location.key === 'default';

  return { isCheckoutPage, isThankYou, isError };
};
