import { useFormik } from 'formik';
import * as Yup from 'yup';

const englishEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SubscribeFormConfig = ({
  setSubscribeIsSuccess,
}: {
  setSubscribeIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(75, 'Must be less than 75 characters')
        .test(
          'isEnglishEmail',
          'Invalid email address',
          value => !!value && englishEmailRegex.test(value),
        )
        .email('Invalid email address')
        .required('Required'),
    }),
    // eslint-disable-next-line no-empty-pattern
    onSubmit: ({}, { resetForm }) => {
      setSubscribeIsSuccess(true);
      resetForm();
    },
  });
};

export { SubscribeFormConfig };
