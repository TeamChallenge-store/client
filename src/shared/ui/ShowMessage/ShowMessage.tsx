import {
  toast as ShortMessage,
  ToastOptions as IToastOptions,
} from 'react-toastify';
import { Link } from 'react-router-dom';

import css from './ShowMessage.module.scss';

export const ShowMessage = (message: string, options: IToastOptions) => {
  ShortMessage(
    <span>
      {message}
      <Link to="/cart" className={css.messageLink}>
        View
      </Link>
    </span>,
    options,
  );
};
