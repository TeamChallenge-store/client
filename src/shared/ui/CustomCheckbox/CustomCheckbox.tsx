/* eslint-disable operator-linebreak */
import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import css from './CustomCheckbox.module.scss';

type TCustomCheckboxProps = {
  id?: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  value?: string;
  labelText?: string;
  onChange?: () => void;
};

const CustomCheckbox: FC<TCustomCheckboxProps> = ({
  id,
  name,
  disabled,
  className,
  checked = false,
  value,
  labelText,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange();
    }
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <label className={`${css.customCheckbox} ${className}`}>
      <div className={css.checkboxContainer}>
        <input
          className={css.checkbox}
          type="checkbox"
          id={id}
          name={name}
          disabled={disabled}
          value={value}
          checked={isChecked}
          onChange={handleChange}
        />
        <span className={css.checkmark}>
          {isChecked && (
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                // eslint-disable-next-line max-len
                d="M5.29277 7.6303L12.1225 0.935148C12.3919 0.671031 12.8287 0.671031 13.0981 0.935148C13.3676 1.19926 13.3676 1.62748 13.0981 1.8916L5.78061 9.06497C5.51119 9.32909 5.07436 9.32909 4.80494 9.06497L0.902263 5.23917C0.632839 4.97506 0.632839 4.54684 0.902263 4.28272C1.17169 4.01861 1.60851 4.01861 1.87793 4.28272L5.29277 7.6303Z"
                fill="white"
              />
            </svg>
          )}
        </span>
      </div>
      <span className={cn(css.label, { [css.labelDisabled]: disabled })}>
        {labelText}
      </span>
    </label>
  );
};

export { CustomCheckbox };
