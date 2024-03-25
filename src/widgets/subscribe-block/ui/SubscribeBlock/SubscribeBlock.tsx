import { SubscribeForm } from '~features/subscribe-form';
import css from './SubscribeBlock.module.scss';

const SubscribeBlock = () => {
  return (
    <>
      <h3 className={css.title}>Lorem ipsum dolor sit amet, consectetur</h3>
      <p className={css.description}>
        et doloreadipiscing elit, sed do eiusmod tempor incididunt ut labore et
        doloreadipiscing elit, sed do eiusmod tempor incididunt ut labore et
        doloreadipiscing elit, sed do eiusmod tempor incididunt ut labore et
        doloreadipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore
      </p>
      <div className={css.formContainer}>
        <div className={css.form}>
          <SubscribeForm />
        </div>
        <span className={css.formDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </span>
      </div>
    </>
  );
};

export { SubscribeBlock };
