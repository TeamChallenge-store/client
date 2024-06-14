import { FC } from 'react';

import css from './CustomRatioButton.module.scss';

type TCustomRationButtonProps = {
  id?: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  value?: string;
  required?: boolean;
  labelText?: string;
  onChange?: () => {};
};

const CustomRatioButton: FC<TCustomRationButtonProps> = ({
  id,
  name,
  disabled,
  checked,
  className,
  value,
  required,
  labelText,
  onChange,
}) => {
  return (
    <div className={`${css.customRatio} ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        className={css.ratio}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={id} className={css.label}>
        {labelText}
      </label>
    </div>
  );
};

export { CustomRatioButton };
