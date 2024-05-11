/* eslint-disable @typescript-eslint/indent */
/* eslint-disable operator-linebreak */
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { CustomRatioButton } from '~shared/ui/CustomRatioButton';
import css from './DeliveryMethod.module.scss';
import { useDeliveryInfoConfig } from '../config/useDeliveryMethodConfig';
import { InputErrorMessage } from '~shared/ui/InputErrorMessage';
import {
  setAddress,
  setCity,
  setDeliveryMethod,
  setNPDepartment,
  setUPDepartment,
} from '~entities/order/model/slice';

const DeliveryMethod: FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('deliveryToAdress');
  const { formik } = useDeliveryInfoConfig();
  const dispatch = useDispatch();

  const handleMethodChange = (value: string) => {
    setSelectedMethod(value);
    dispatch(setDeliveryMethod(value));
  };

  const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    const { name, value } = event.target;
    const updatedAddress = { ...formik.values };
    let address = '';

    switch (selectedMethod) {
      case 'deliveryToAdress':
        if (
          name === 'streetName' ||
          name === 'houseNumber' ||
          name === 'sectionNumber' ||
          name === 'apartmentNumber'
        ) {
          address = `streetName: ${updatedAddress.streetName}, houseNumber: ${updatedAddress.houseNumber}, sectionNumber: ${updatedAddress.sectionNumber}, apartmentNumber: ${updatedAddress.apartmentNumber}`;
        }

        dispatch(setAddress(address));
        dispatch(setDeliveryMethod('Courier'));
        break;
      case 'Nova Poshta':
        dispatch(setNPDepartment(value));
        dispatch(setDeliveryMethod('Nova Poshta'));
        break;
      case 'PickupFromUkrPoshta':
        dispatch(setUPDepartment(value));
        dispatch(setDeliveryMethod('Ukr Poshta'));
        break;
      default:
        break;
    }
  };

  return (
    <form className={css.deliveryForm}>
      <div className={css.field}>
        <input
          type="text"
          name="city"
          placeholder="Name of city*"
          className={css.input}
          required
          onChange={event => {
            formik.handleChange(event);
            dispatch(setCity(event.target.value));
          }}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city && (
          <InputErrorMessage errorMessage={formik.errors.city} />
        )}
      </div>
      <div className={css.deliveryOptions}>
        <div className={css.deliveryOption}>
          <div className={css.optionContainer}>
            <CustomRatioButton
              labelText="Courier to your address"
              name="delivery"
              value="deliveryToAdress"
              id="deliveryToAdress"
              className={css.ratioButton}
              checked={selectedMethod === 'deliveryToAdress'}
              onChange={() => handleMethodChange('deliveryToAdress')}
            />
            <span className={css.optionPrice}>150₴</span>
          </div>
          <div
            className={cn(css.deliveryContainer, {
              [css.showMethodList]: selectedMethod === 'deliveryToAdress',
            })}
          >
            <div className={css.field}>
              <input
                type="text"
                name="streetName"
                placeholder="Street Name*"
                className={css.input}
                required
                onChange={event => {
                  handleDeliveryChange(event);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.streetName}
              />
              {formik.touched.streetName && formik.errors.streetName && (
                <InputErrorMessage errorMessage={formik.errors.streetName} />
              )}
            </div>
            <div className={css.field}>
              <input
                type="text"
                name="houseNumber"
                placeholder="House Number*"
                className={css.input}
                required
                onChange={event => {
                  handleDeliveryChange(event);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.houseNumber}
              />
              {formik.touched.houseNumber && formik.errors.houseNumber && (
                <InputErrorMessage errorMessage={formik.errors.houseNumber} />
              )}
            </div>
            <div className={css.field}>
              <input
                type="text"
                name="sectionNumber"
                placeholder="Section Number"
                className={css.input}
                onChange={event => {
                  handleDeliveryChange(event);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.sectionNumber}
              />
              {formik.touched.sectionNumber && formik.errors.sectionNumber && (
                <InputErrorMessage errorMessage={formik.errors.sectionNumber} />
              )}
            </div>
            <div className={css.field}>
              <input
                type="text"
                name="apartmentNumber"
                placeholder="Apartment Number*"
                className={css.input}
                required
                onChange={event => {
                  handleDeliveryChange(event);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.apartmentNumber}
              />
              {formik.touched.apartmentNumber &&
                formik.errors.apartmentNumber && (
                  <InputErrorMessage
                    errorMessage={formik.errors.apartmentNumber}
                  />
                )}
            </div>
          </div>
        </div>
        <div className={css.deliveryOption}>
          <div className={css.optionContainer}>
            <CustomRatioButton
              labelText="Pickup from Nova Poshta"
              name="delivery"
              value="Nova Poshta"
              id="PickupFromNovaPoshta"
              className={css.ratioButton}
              checked={selectedMethod === 'Nova Poshta'}
              onChange={() => handleMethodChange('Nova Poshta')}
            />
            <span className={css.optionPrice}>70₴</span>
          </div>
          <div
            className={cn(css.deliveryContainer, {
              [css.showMethodList]: selectedMethod === 'Nova Poshta',
            })}
          >
            <div className={css.field}>
              <input
                type="text"
                name="novaPostOffice"
                placeholder="Choose a post office*"
                className={css.input}
                required
                onChange={event => {
                  handleDeliveryChange(event);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.novaPostOffice}
              />
              {formik.touched.novaPostOffice &&
                formik.errors.novaPostOffice && (
                  <InputErrorMessage
                    errorMessage={formik.errors.novaPostOffice}
                  />
                )}
            </div>
          </div>
        </div>
        <div className={css.deliveryOption}>
          <div className={css.optionContainer}>
            <CustomRatioButton
              labelText="Pickup from Ukr Poshta"
              name="delivery"
              value="PickupFromUkrPoshta"
              id="PickupFromUkrPoshta"
              className={css.ratioButton}
              checked={selectedMethod === 'PickupFromUkrPoshta'}
              onChange={() => handleMethodChange('PickupFromUkrPoshta')}
            />
            <span className={css.optionPrice}>70₴</span>
          </div>
          <div
            className={cn(css.deliveryContainer, {
              [css.showMethodList]: selectedMethod === 'PickupFromUkrPoshta',
            })}
          >
            <div className={css.field}>
              <input
                type="text"
                name="ukrPostOffice"
                placeholder="Choose a post office*"
                className={css.input}
                required
                onChange={event => {
                  handleDeliveryChange(event);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.ukrPostOffice}
              />
              {formik.touched.ukrPostOffice && formik.errors.ukrPostOffice && (
                <InputErrorMessage errorMessage={formik.errors.ukrPostOffice} />
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export { DeliveryMethod };
