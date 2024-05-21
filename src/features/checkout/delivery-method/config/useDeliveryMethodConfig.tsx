/* eslint-disable operator-linebreak */
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {
  setAddress,
  setAddressIsValid,
  setNPDepartment,
  setUPDepartment,
} from '~entities/order/model/slice';

const useDeliveryInfoConfig = (selectedMethod: string) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      city: '',
      streetName: '',
      houseNumber: '',
      sectionNumber: '',
      apartmentNumber: '',
      novaPostOffice: '',
      ukrPostOffice: '',
    },
    validationSchema: Yup.object({
      city: Yup.string()
        .trim()
        .required('Name of city is required')
        .test(
          'notEmpty',
          'City name must contain at least one character',
          value => {
            return value.trim().length > 0;
          },
        ),
      streetName: Yup.string()
        .trim()
        .required('Street Name is required')
        .min(3, 'Street Name should contain at least 3 characters')
        .max(75, 'Street Name should not exceed 75 characters')
        .matches(
          /^[A-Za-zА-Яа-я0-9\s'\-/]+$/,
          'Invalid characters in Street Name',
        ),
      houseNumber: Yup.string()
        .trim()
        .matches(/^\d+$/, 'House number should only contain numbers')
        .max(10, 'House number should not exceed 10 characters')
        .min(1, 'House number should contain at least 1 character')
        .required('House Number is required'),
      sectionNumber: Yup.string()
        .trim()
        .matches(/^\d+$/, 'Section number should only contain numbers')
        .max(10, 'Section number should not exceed 10 characters')
        .min(1, 'Section number should contain at least 1 character'),
      apartmentNumber: Yup.string()
        .trim()
        .matches(
          /^[A-Za-zА-Яа-я0-9\s'\-/]+$/,
          'Invalid characters in Apartment Number',
        )
        .max(5, 'Apartment number should not exceed 5 characters')
        .min(1, 'Apartment number should contain at least 1 character')
        .required('Apartment Number is required'),
      novaPostOffice: Yup.string().trim().required('Post Office is required'),
      ukrPostOffice: Yup.string().trim().required('Post Office is required'),
    }),

    onSubmit: () => {},
  });

  useEffect(() => {
    const isValidCity = formik.values.city.trim() !== '';

    const isValidNovaPoshta =
      selectedMethod === 'Nova_Poshta' &&
      formik.values.novaPostOffice.trim() !== '';

    const isValidUkrPoshta =
      selectedMethod === 'Ukr_Poshta' &&
      formik.values.ukrPostOffice.trim() !== '';

    const isValidCourier =
      selectedMethod === 'Courier' &&
      formik.values.streetName.trim() !== '' &&
      formik.values.houseNumber.trim() !== '';

    dispatch(
      setAddressIsValid(
        (isValidUkrPoshta || isValidNovaPoshta || isValidCourier) &&
          isValidCity,
      ),
    );
  }, [
    formik.values.streetName,
    formik.values.ukrPostOffice,
    formik.values.novaPostOffice,
    formik.values.city,
    selectedMethod,
    dispatch,
    formik.values.houseNumber,
    formik.values.apartmentNumber,
  ]);

  useEffect(() => {
    if (formik.values.streetName && formik.values.houseNumber) {
      let address = `Street: ${formik.values.streetName}, House Number: ${formik.values.houseNumber}`;

      if (formik.values.apartmentNumber) {
        address += `, Apartment Number: ${formik.values.apartmentNumber}`;
      }

      if (formik.values.sectionNumber) {
        address += `, Section Number: ${formik.values.sectionNumber}`;
      }

      dispatch(setAddress(address));
    }

    if (formik.values.novaPostOffice) {
      dispatch(setNPDepartment(formik.values.novaPostOffice));
    }

    if (formik.values.ukrPostOffice) {
      dispatch(setUPDepartment(formik.values.ukrPostOffice));
    }
  }, [dispatch, formik.isValid, formik.values]);

  return { formik };
};

export { useDeliveryInfoConfig };
