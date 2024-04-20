import { FC } from 'react';
import css from './CustomCheckbox.module.scss';

type TCustomCheckboxProps = {
  id?: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  value?: string;
};

const CustomCheckbox: FC<TCustomCheckboxProps> = ({
  id,
  name,
  disabled,
  className,
  checked,
  value,
}) => {
  return (
    <input
      className={`${className} ${css.checkbox}`}
      type="checkbox"
      id={id}
      name={name}
      disabled={disabled}
      checked={checked}
      value={value}
    />
  );
};

export { CustomCheckbox };
