import { FC, useState } from 'react';
import cn from 'classnames';

import css from './ColorCheckbox.module.scss';

type TColorCheckboxProps = {
  label: string;
  bgColor: string;
  onClick?: (selected: boolean) => void;
  isSelected?: boolean;
};

const ColorCheckbox: FC<TColorCheckboxProps> = ({
  label,
  bgColor = 'white',
  onClick = () => {},
  isSelected = false,
}) => {
  const [selected, setSelected] = useState(isSelected);
  const isWhiteColor = bgColor === 'white' || bgColor === '#000';
  const checkmarkColor = isWhiteColor ? 'black' : 'white';

  const handleClick = () => {
    const newState = !selected;

    setSelected(newState);
    onClick(newState);
  };

  return (
    <div className={css.container}>
      <div
        className={cn(css.checkbox, { [css.selected]: selected })}
        onClick={handleClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
        role="button"
        tabIndex={0}
        style={{
          backgroundColor: bgColor,
          border: isWhiteColor ? '1px solid #b0b0b0' : 'none',
        }}
      >
        {selected && (
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={css.checkmark}
          >
            <path
              // eslint-disable-next-line max-len
              d="M9.68942 15.6978L6.37578 12.3865C6.19737 12.2078 5.95515 12.1074 5.70255 12.1074C5.44995 12.1074 5.20773 12.2078 5.02932 12.3865C4.65689 12.7586 4.65689 13.3598 5.02932 13.732L9.02096 17.7209C9.39339 18.093 9.995 18.093 10.3674 17.7209L20.4707 7.62464C20.8431 7.25247 20.8431 6.65128 20.4707 6.27911C20.2923 6.10042 20.05 6 19.7974 6C19.5449 6 19.3026 6.10042 19.1242 6.27911L9.68942 15.6978Z"
              fill={checkmarkColor}
            />
          </svg>
        )}
      </div>
      <span className={css.label}>{label}</span>
    </div>
  );
};

export { ColorCheckbox };
