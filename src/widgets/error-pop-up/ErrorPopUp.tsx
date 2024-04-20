import { useSelector } from 'react-redux';
import { Modal } from '~shared/ui/Modal';
import { selectIsModalOpen } from '~shared/ui/Modal/model/slice';

const ErrorPopUp = () => {
  const isModalOpen = useSelector(selectIsModalOpen);

  return (
    isModalOpen && (
      <Modal
        isOpen={isModalOpen}
        title="Something went wrong."
        description="There was a failure. Please try again."
      />
    )
  );
};

export { ErrorPopUp };
