import { Link } from 'react-router-dom';
import { Icon } from '~shared/ui/Icon';
import { errorMessages } from '~features/error-page';

import css from './ErrorPage.module.scss';

type TErrorPageProps = {
  statusCode: number;
};

const ErrorPage: React.FC<TErrorPageProps> = ({ statusCode }) => {
  const errorMessage = errorMessages[statusCode];

  return (
    <div className={css.errorContainer}>
      <Icon className={css.errorIcon} type="error" />
      <h2 className={css.error}>{statusCode}</h2>
      <h3 className={css.errorDesc}>{errorMessage}</h3>
      <span className={css.errorSolution}>
        Maybe you can find what you need from our homepage.
      </span>
      <Link to="/">
        <button type="button" className={css.errorBtn}>
          Take me back to the home page
        </button>
      </Link>
    </div>
  );
};

export { ErrorPage };
