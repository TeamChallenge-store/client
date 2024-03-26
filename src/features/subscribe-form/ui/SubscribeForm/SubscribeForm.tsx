import { useFormik } from 'formik';
import * as Yup from 'yup';
import css from './SubscribeForm.module.scss';
import emailIcon from '~shared/ui/Icon/icons/email.svg?url';
import { CustomButton } from '~shared/ui/CustomButton';

const SubscribeForm = () => {

const englishEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 const formik = useFormik({
   initialValues: {
     email: '',
   },
   validationSchema: Yup.object({
     email: Yup.string()
     .min(3, 'Must be at least 3 characters')
     .max(75, 'Must be less than 75 characters')
     .test('isEnglishEmail', 'Invalid email address', (value) => !!value && englishEmailRegex.test(value))
     .email('Invalid email address')
     .required('Required')
   }),
   onSubmit: values => {
     console.log(values);
   },
 });
 
 return (
   <form className={css.subscribeInputForm} onSubmit={formik.handleSubmit}>
     <div className={css.inputContainer}>
     <input 
       className={css.subscribeInput}
       name="email"
       type="email"
       placeholder="Enter your email to get the best offers..."
       value={formik.values.email}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
     />
     <img className={css.emailIcon} src={emailIcon} alt="Email" />

      {formik.touched.email && formik.errors.email ? (
       <span className={css.errorMessage}>{formik.errors.email}</span>
     ): null}
      </div>

      <CustomButton className={css.subscribeButton} buttonType="submit" bgColor="green">
       SEND
      </CustomButton>
   </form>
 );
};

export { SubscribeForm };