import { CustomRatioButton } from '~shared/ui/CustomRatioButton';
import googleIcon from '../images/googlePay.svg';
import appleIcon from '../images/applePay.svg';

import css from './PaymentMethod.module.scss';

const PaymentMethod = () => {
  return (
    <>
      <div className={css.methodContainer}>
        <CustomRatioButton
          labelText="Pay now by card"
          name="payment-method"
          value="payByNow"
          id="payByNow"
          className={css.method}
          checked
        />
        <ul className={css.methodList}>
          <li className={css.methodItem}>
            <CustomRatioButton
              labelText="Pay now by card online"
              name="payment-method-now"
              value="payCardOnline"
              id="payCardOnline"
              className={css.payMethod}
            />
          </li>
          <li className={css.methodItem}>
            <CustomRatioButton
              labelText="Google Pay"
              name="payment-method-now"
              value="googlePay"
              id="googlePay"
              className={css.payMethod}
            />
            <div className={css.methodIcon}>
              <img className={css.icon} src={googleIcon} alt="google pay" />
            </div>
          </li>
          <li className={css.methodItem}>
            <CustomRatioButton
              labelText="Apple Pay"
              name="payment-method-now"
              value="applePay"
              id="applePay"
              className={css.payMethod}
            />
            <div className={css.methodIcon}>
              <img className={css.icon} src={appleIcon} alt="google pay" />
            </div>
          </li>
        </ul>
      </div>
      <CustomRatioButton
        labelText="Pay by email"
        name="payment-method"
        value="payByEmail"
        id="PayByImail"
      />
    </>
  );
};

export { PaymentMethod };
