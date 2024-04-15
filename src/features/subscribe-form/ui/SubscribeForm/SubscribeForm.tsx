import { FC } from 'react';
import css from './SubscribeForm.module.scss';
import emailIcon from '~shared/ui/Icon/icons/email.svg?url';
import { CustomButton } from '~shared/ui/CustomButton';
import { SubscribeFormConfig } from './config/SubscribeFormConfig';

interface ISubscribeFormProps {
  setSubscribeIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubscribeForm: FC<ISubscribeFormProps> = ({ setSubscribeIsSuccess }) => {
  /* eslint-disable operator-linebreak */
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    SubscribeFormConfig({
      setSubscribeIsSuccess,
    });

  return (
    <form className={css.subscribeInputForm} onSubmit={handleSubmit}>
      <div className={css.inputContainer}>
        <input
          className={css.subscribeInput}
          name="email"
          type="email"
          placeholder="Enter your email to get the best offers..."
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <img className={css.emailIcon} src={emailIcon} alt="Email" />

        {touched.email && errors.email ? (
          <span className={css.errorMessage}>{errors.email}</span>
        ) : null}
      </div>

      <CustomButton
        className={css.subscribeButton}
        buttonType="submit"
        bgColor="green"
      >
        SEND
      </CustomButton>
    </form>
  );
};

export { SubscribeForm };
