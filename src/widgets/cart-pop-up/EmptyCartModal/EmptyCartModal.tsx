import { Icon } from '~shared/ui/Icon';
import { CustomButton } from '~shared/ui/CustomButton';

import css from './EmptyCartModal.module.scss';

const EmptyCartModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={css.emptyCart}>
      <div className={css.emptyHeader}>
        <Icon onClick={onClose} className={css.closeIcon} type="close" />
      </div>
      <div className={css.emptyContainer}>
        <h3 className={css.modalTitle}>your cart is empty</h3>
        <span className={css.modalDescription}>
          There was a failure. Please try again
        </span>
        <CustomButton
          to="/"
          bgColor="green"
          className={css.popUpBtn}
          onClick={onClose}
        >
          Take me back to the home page
        </CustomButton>
        <CustomButton
          to="/"
          bgColor="green"
          className={css.popUpBtnAdaptive}
          onClick={onClose}
        >
          to the home page
        </CustomButton>
      </div>
    </div>
  );
};

export { EmptyCartModal };
