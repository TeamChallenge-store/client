import { useFormik } from 'formik';
import * as Yup from 'yup';

const useDeliveryInfoConfig = () => {
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
      city: Yup.string().required('Name of city is required'),
      streetName: Yup.string().required('Street Name is required'),
      houseNumber: Yup.string().required('House Number is required'),
      sectionNumber: Yup.string(),
      apartmentNumber: Yup.string().required('Apartment Number is required'),
      novaPostOffice: Yup.string().required('Post Office is required'),
      ukrPostOffice: Yup.string().required('Post Office is required'),
    }),
    onSubmit: () => {},
  });

  return { formik };
};

export { useDeliveryInfoConfig };
