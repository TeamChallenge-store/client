/* eslint-disable operator-linebreak */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './PersonalInfo.module.scss';
import { InputErrorMessage } from '~shared/ui/InputErrorMessage';
import { usePersonalInfoConfig } from '../config/usePersonalInfoConfig';
import { CustomCheckbox } from '~shared/ui/CustomCheckbox';
import {
  setEmail,
  setFirstName,
  setLastName,
  setPhoneNumber,
} from '~entities/order/model/slice';

const PersonalInfo: React.FC = () => {
  const { formik, checkboxIsAvailable } = usePersonalInfoConfig();
  const dispatch = useDispatch();
  const orderData = useSelector(state => state.order.orderData);

  console.log(orderData);

  return (
    <form
      id="personalInfoForm"
      className={css.form}
      onSubmit={formik.handleSubmit}
    >
      <div className={css.column}>
        <div className={css.field}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First Name*"
            className={css.input}
            required
            onChange={event => {
              formik.handleChange(event);
              dispatch(setFirstName(event.target.value));
            }}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            autoComplete="off"
          />
          {formik.touched.name && formik.errors.name && (
            <InputErrorMessage errorMessage={formik.errors.name} />
          )}
        </div>

        <div className={css.field}>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name*"
            className={css.input}
            required
            onChange={event => {
              formik.handleChange(event);
              dispatch(setLastName(event.target.value));
            }}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            autoComplete="off"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <InputErrorMessage errorMessage={formik.errors.lastName} />
          ) : null}
        </div>
      </div>
      <div className={css.column}>
        <div className={css.field}>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone number*"
            className={css.input}
            required
            onChange={event => {
              formik.handleChange(event);
              dispatch(setPhoneNumber(event.target.value));
            }}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            autoComplete="off"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <InputErrorMessage errorMessage={formik.errors.phone} />
          ) : null}
        </div>

        <div className={css.field}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            className={css.input}
            required
            onChange={event => {
              formik.handleChange(event);
              dispatch(setEmail(event.target.value));
            }}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            autoComplete="off"
          />
          {formik.touched.email && formik.errors.email ? (
            <InputErrorMessage errorMessage={formik.errors.email} />
          ) : null}
        </div>
      </div>
      <div className={css.saveInfo}>
        <CustomCheckbox
          id="saveInfo"
          className={css.saveInfoCheckbox}
          disabled={!checkboxIsAvailable}
          labelText="Save contact information"
        />
      </div>
    </form>
  );
};

export { PersonalInfo };
