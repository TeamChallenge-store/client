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
    // eslint-disable-next-line react/button-has-type
    <button className={`${css.subscribeButton} ${className || ''}`} type={type}>
      {text}
    </button>
  );
};

export { SubscribeButton };
