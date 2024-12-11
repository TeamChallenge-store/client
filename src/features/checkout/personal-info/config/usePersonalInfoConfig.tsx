/* eslint-disable operator-linebreak */
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  setEmail,
  setFirstName,
  setLastName,
  setPersonalInfoIsValid,
  setPhoneNumber,
} from '~entities/order/model/slice';

const englishEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const usePersonalInfoConfig = () => {
  const [checkboxIsAvailable, setChekboxIsAvailable] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      phone: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('First Name is required')
        .max(35, 'Must be 35 characters or less')
        .min(1, 'Must be at least 1 symbol')
        .matches(
          /^[А-Яа-яЇїЄєІіёЁёa-zA-Z-'ʼ’ ]+$/,
          'Allow only Latin, Cyrillic, hyphens, apostrophes, spaces',
        ),
      lastName: Yup.string()
        .required('Last Name is required')
        .max(35, 'Must be 35 characters or less')
        .min(1, 'Must be at least 1 symbol')
        .matches(
          /^[А-Яа-яЇїЄєІіёЁёa-zA-Z-'ʼ’ ]+$/,
          'Allow only Latin, Cyrillic, hyphens, apostrophes, spaces',
        ),
      phone: Yup.string()
        .required('Phone number is required')
        .max(14, 'Must be 14 numbers or less')
        .min(10, 'Must be at least 10 numbers')
        .matches(/^\+?[0-9]{10,14}$/, 'Invalid phone number'),
      email: Yup.string()
        .required('Email is required')
        .max(75, 'Must be 75 symbols or less')
        .min(3, 'Must be at least 3 symbols')
        .email('Invalid email address')
        .test(
          'isEnglishEmail',
          'Invalid email address',
          value => !!value && englishEmailRegex.test(value),
        ),
    }),
    validateOnMount: true,
    onSubmit: () => {},
  });

  useEffect(() => {
    if (formik.isValid) {
      setChekboxIsAvailable(true);
      dispatch(setPersonalInfoIsValid(true));
      dispatch(setFirstName(formik.values.name));
      dispatch(setLastName(formik.values.lastName));
      dispatch(setPhoneNumber(formik.values.phone));
      dispatch(setEmail(formik.values.email));
    } else {
      setChekboxIsAvailable(false);
      dispatch(setPersonalInfoIsValid(false));
    }
  }, [dispatch, formik.isValid, formik.values]);

  return { formik, checkboxIsAvailable };
};

export { usePersonalInfoConfig };
