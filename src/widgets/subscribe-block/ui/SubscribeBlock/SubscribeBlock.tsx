import { useState } from 'react';
import { SubscribeForm } from '~features/subscribe-form';
import css from './SubscribeBlock.module.scss';

const SubscribeBlock = () => {
  const [subscribeIsSuccess, setSubscribeIsSuccess] = useState(false);

  const handleSubscribeSuccess = () => {
    setSubscribeIsSuccess(true);
    setTimeout(() => {
      setSubscribeIsSuccess(false);
    }, 3000);
  };

  return (
    <>
      {subscribeIsSuccess && (
        <span className={css.successSubmit}>
          Subscription successfully completed
        </span>
      )}
      <div className={`${css.subscribe} container`}>
        <h1 className={css.title}>Innovations for Your Adventure Life</h1>
        <div className={css.formContainer}>
          <div className={css.form}>
            <SubscribeForm setSubscribeIsSuccess={handleSubscribeSuccess} />
          </div>
          <span className={css.formDescription}>
            Embark on your next adventure with confidence. Explore the world
            with our top-quality gear by your side. Start your journey today!
          </span>
        </div>
      </div>
    </>
  );
};

export { SubscribeBlock };
