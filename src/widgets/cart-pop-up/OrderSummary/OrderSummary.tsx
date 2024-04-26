import { FC } from 'react';
import { CustomButton } from '../../../shared/ui/CustomButton';
import css from './OrderSummary.module.scss';

type TOrderSummaryProps = {
  total?: number;
  onClose?: () => void;
};

const OrderSummary: FC<TOrderSummaryProps> = props => {
  const { total, onClose } = props;

  if (!total) {
    return null;
  }

  const handleContinueClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <article className={css.summary}>
      <p className={css.summaryTitle}>Order Summary</p>
      <div className={css.summaryContent}>
        <p className={css.contentTitle}>Total</p>
        <span className={css.price}>{`${total} ₴`}</span>
      </div>
      <CustomButton
        to="/checkout"
        bgColor="green"
        className={css.continueBtn}
        onClick={handleContinueClick}
      >
        Continue to order
      </CustomButton>
    </article>
  );
};

OrderSummary.defaultProps = {
  total: 200,
};

export { OrderSummary };
