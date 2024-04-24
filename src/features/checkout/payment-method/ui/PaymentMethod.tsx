import { useState } from 'react';
import cn from 'classnames';
import { CustomRatioButton } from '~shared/ui/CustomRatioButton';
import googleIcon from '../images/googlePay.svg';
import appleIcon from '../images/applePay.svg';

import css from './PaymentMethod.module.scss';

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('payByNow');

  const handleMethodChange = (value: string) => {
    setSelectedMethod(value);
  };

  const showMethodList = selectedMethod === 'payByNow';

  return (
    <div className={css.methodContainer}>
      <CustomRatioButton
        labelText="Pay now by card"
        name="payment-method"
        value="payByNow"
        id="payByNow"
        className={css.method}
        checked={selectedMethod === 'payByNow'}
        onChange={() => handleMethodChange('payByNow')}
      />
      <ul
        className={cn(css.methodList, {
          [css.showMethodList]: showMethodList,
        })}
      >
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
          <button type="button" className={css.methodIcon}>
            <img className={css.icon} src={googleIcon} alt="google pay" />
          </button>
        </li>
        <li className={css.methodItem}>
          <CustomRatioButton
            labelText="Apple Pay"
            name="payment-method-now"
            value="applePay"
            id="applePay"
            className={css.payMethod}
          />
          <button type="button" className={css.methodIcon}>
            <img className={css.icon} src={appleIcon} alt="google pay" />
          </button>
        </li>
      </ul>
      <CustomRatioButton
        labelText="Payment upon receipt of the order"
        name="payment-method"
        value="uponReceipt"
        id="uponReceipt"
        checked={selectedMethod === 'uponReceipt'}
        onChange={() => handleMethodChange('uponReceipt')}
      />
    </div>
  );
};

export { PaymentMethod };
