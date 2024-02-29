import { Link } from 'react-router-dom';
import css from './ErrorPage.module.scss';

import error from '~shared/error.png';

type TErrorPageProps = {
  statusCode: number;
};

const ErrorPage: React.FC<TErrorPageProps> = ({ statusCode }) => {
  let errorMessage = '';
  let errorDescription = '';

  switch (statusCode) {
    case 404:
      errorMessage = '404';
      errorDescription = 'We can’t find the page that you’re looking for.';
      break;
    case 505:
      errorMessage = '505';
      errorDescription = 'HTTP Version Not Supported';
      break;
    default:
      errorMessage = '404';
      errorDescription = 'We can’t find the page that you’re looking for.';
      break;
  }

  return (
    <div className={css.errorContainer}>
      <img className={css.errorIcon} src={error} alt="logo" />
      <h2 className={css.error}>{errorMessage}</h2>
      <h3 className={css.errorDesc}>{errorDescription}</h3>
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
