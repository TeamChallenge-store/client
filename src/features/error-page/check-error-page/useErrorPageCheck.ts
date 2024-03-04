import { useLocation } from 'react-router-dom';

export const useErrorPageCheck = () => {
  const location = useLocation();

  return location.key === 'default';
};
