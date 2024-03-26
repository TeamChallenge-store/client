import { useState } from 'react';
import { SubscribeButton } from '~shared/ui/SubscribeButton';
import css from './SubscribeForm.module.scss';
import emailIcon from '~shared/ui/Icon/icons/email.svg?url';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (isChecking) {
      setError('');
      setIsChecking(false);
    }

    const timeoutId = setTimeout(() => {
      setIsChecking(true);
      setError(validateEmail(newEmail) ? '' : 'Invalid email address');
    }, 5000);

    return () => clearTimeout(timeoutId);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    // ... ваш код для відправки email
  };

  return (
    <form className={css.subscribeInputForm} onSubmit={handleSubmit}>
      <div className={css.inputContainer}>
        <input
          className={css.subscribeInput}
          type="email"
          placeholder="Enter your email to get the best offers..."
          value={email}
          onChange={handleEmailChange}
          maxLength={75}
          minLength={3}
          required
        />
        <img className={css.emailIcon} src={emailIcon} alt="Email" />
        {error && 
        <span className={css.errorMessage}>
          {error}
        </span>}
      </div>

      <SubscribeButton
        type="submit"
        text="SEND"
        className={css.subscribeButton}
      />
    </form>
  );
};

export { SubscribeForm };
