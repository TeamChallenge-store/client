import { FC } from 'react';
import css from './SubscribeButton.module.scss';

interface ButtonProps {
  type: 'submit' | 'reset' | 'button';
  text: string;
  className?: string;
}

const SubscribeButton: FC<ButtonProps> = ({
  type = 'button',
  text,
  className,
}) => {
  return (
    <div className={css.buttonContainer}>
      <button
        className={`${css.subscribeButton} ${className || ''}`}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export { SubscribeButton };
