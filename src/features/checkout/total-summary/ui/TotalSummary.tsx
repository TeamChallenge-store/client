import { FC } from 'react';
import { useSelector } from 'react-redux';

import css from './TotalSummary.module.scss';
import { CustomButton } from '~shared/ui/CustomButton';
import { useCreateOrderMutation } from '~entities/order/api/orderApi';
import {
  selectAddressIsValid,
  selectOrderData,
  selectPersonalInfoIsValid,
} from '~entities/order/model/slice';
import { useGetCartProductQuery } from '~entities/cart';
import { useNavigate } from 'react-router-dom';

const TotalSummary: FC = () => {
  const [createOrderMutation] = useCreateOrderMutation();
  const orderData = useSelector(selectOrderData);
  const personalInfoIsValid = useSelector(selectPersonalInfoIsValid);
  const addressIsValid = useSelector(selectAddressIsValid);

  const { data: cartProducts } = useGetCartProductQuery();
  const products = cartProducts?.cart_items;
  const totalPrice = cartProducts?.total_price;

  const navigate = useNavigate();

  const createOrder = async () => {
    try {
      await createOrderMutation(orderData).unwrap();
      navigate('/thank-you', { state: { products, totalPrice, orderData } });
    } catch (error) {
      console.error('Failed to create order:', error);
    }
  };

  return (
    <div className={css.totalSummary}>
      <div className={css.goodsAmount}>
        {products?.length || 0} {products?.length === 1 ? 'item' : 'items'} in
        the amount of
        <span>{totalPrice}₴</span>
      </div>
      <div className={css.deliveryCost}>
        <div>The cost of delivery</div>
        <span>at carrier rates</span>
      </div>
      <div className={css.total}>
        <div className={css.totalSubtitle}>To be paid</div>
        <span className={css.finalPrice}>{totalPrice}₴</span>
      </div>
      <CustomButton
        buttonType="submit"
        className={css.confirmButton}
        onClick={createOrder}
        disabled={!personalInfoIsValid || !addressIsValid}
      >
        Confirm the order
      </CustomButton>
      <div className={css.info}>
        <p className={css.infoTitle}>
          By confirming the order, I accept the terms and conditions:
        </p>
        <ul className={css.infoList}>
          <li className={css.infoItem}>
            regulations on the processing and protection of personal data
          </li>
          <li className={css.infoItem}>user agreement</li>
        </ul>
      </div>
    </div>
  );
};

export { TotalSummary };
