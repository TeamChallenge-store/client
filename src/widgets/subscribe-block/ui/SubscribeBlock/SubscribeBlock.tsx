import { useEffect, useState } from 'react';
import cn from 'classnames';
import { SubscribeForm } from '~features/subscribe-form';
import css from './SubscribeBlock.module.scss';

const SubscribeBlock = () => {
  const [subscribeIsSuccess, setSubscribeIsSuccess] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (subscribeIsSuccess) {
      timerId = setTimeout(() => {
        setSubscribeIsSuccess(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [subscribeIsSuccess]);

  return (
    <>
      <span
        className={cn(css.successSubmit, {
          [css.show]: subscribeIsSuccess,
        })}
      >
        Subscription successfully completed
      </span>
      <div className={`${css.subscribe} container`}>
        <h1 className={css.title}>Innovations for Your Adventure Life</h1>
        <div className={css.formContainer}>
          <div className={css.form}>
            <SubscribeForm setSubscribeIsSuccess={setSubscribeIsSuccess} />
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
