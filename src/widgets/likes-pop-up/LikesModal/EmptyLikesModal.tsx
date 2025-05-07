import css from './EmptyLikesModal.module.scss';
import { Icon } from '~shared/ui/Icon';

interface EmptyLikesModalProps {
  onClose: () => void;
}

const EmptyLikesModal = ({ onClose }: EmptyLikesModalProps) => {
  return (
    <div className={css.emptyLikesModal}>
      <div className={css.header}>
        <p className={css.title}>Favorites</p>
        <Icon onClick={onClose} className={css.closeIcon} type="close" />
      </div>
      <div className={css.content}>
        <p className={css.message}>Your favorites list is empty.</p>
        <button className={css.shopButton} onClick={onClose}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export { EmptyLikesModal };