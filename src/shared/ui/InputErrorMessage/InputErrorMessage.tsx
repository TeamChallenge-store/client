import { FC } from 'react';
import css from './InputErrorMessage.module.scss';

type TInputErrorMessageProps = {
  errorMessage: string;
};

const InputErrorMessage: FC<TInputErrorMessageProps> = ({ errorMessage }) => {
  return <div className={css.errorMessage}>{errorMessage}</div>;
};

export { InputErrorMessage };
