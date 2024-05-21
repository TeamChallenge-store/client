import { useSelector } from 'react-redux';
import { Modal } from '~shared/ui/Modal';
import { selectIsModalOpen } from '~shared/ui/Modal/model/slice';

const CartModal = () => {
  const isModalOpen = useSelector(selectIsModalOpen);

  return (
    isModalOpen && (
      <Modal
        isOpen={isModalOpen}
        title="your cart is empty."
        description="There was a failure. Please try again"
      />
    )
  );
};

export { CartModal };
