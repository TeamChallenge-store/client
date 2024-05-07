import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setIsModalOpen } from '../model/slice';
import { CustomButton } from '~shared/ui/CustomButton';
import { Icon } from '~shared/ui/Icon';

import css from './Modal.module.scss';

type ModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
};

const Modal = ({ isOpen, title, description }: ModalProps) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleCloseModal = () => {
    dispatch(setIsModalOpen(false));
  };

  const handleBtnClick = () => {
    if (location.pathname === '/') {
      handleCloseModal();
      window.location.reload();
    }
  };

  return (
    isOpen && (
      <div className={css.modalContainer}>
        <div className={css.modal}>
          <Icon
            onClick={handleCloseModal}
            className={css.closeIcon}
            type="close"
          />
          <div className={css.modalContent}>
            <h3 className={css.modalTitle}>{title}</h3>
            <span className={css.modalDescription}>{description}</span>
            <CustomButton
              to="/"
              bgColor="green"
              className={css.popUpBtn}
              onClick={handleBtnClick}
            >
              Take me back to the home page
            </CustomButton>
            <CustomButton
              to="/"
              bgColor="green"
              className={css.popUpBtnAdaptive}
              onClick={handleBtnClick}
            >
              to the home page
            </CustomButton>
          </div>
        </div>
      </div>
    )
  );
};

export { Modal };
