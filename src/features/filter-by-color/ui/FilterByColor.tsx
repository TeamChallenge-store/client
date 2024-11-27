import { FC } from 'react';

import css from './FilterByColor.module.scss';
import { ColorCheckbox } from '~shared/ui/ColorCheckbox';

type TFilterByColorProps = {
  selectedColors: string[];
  onColorSelect: (color: string) => void;
};

const colors = [
  { label: 'White', bgColor: 'white' },
  { label: 'Black', bgColor: 'black' },
  { label: 'Khaki', bgColor: '#37643B' },
  { label: 'Orange', bgColor: '#F36B26' },
  { label: 'Grey', bgColor: '#B0B0B0' },
  { label: 'Blue', bgColor: '#3500CC' },
  { label: 'Yellow', bgColor: '#FBBC05' },
  { label: 'Brown', bgColor: '#815E41' },
];

const FilterByColor: FC<TFilterByColorProps> = ({
  selectedColors,
  onColorSelect,
}) => {
  return (
    <section className={css.filterColor}>
      <h3 className={css.title}>Color</h3>
      <div className={css.filterContainer}>
        {colors.map(color => (
          <ColorCheckbox
            key={color.label}
            label={color.label}
            bgColor={color.bgColor}
            isSelected={selectedColors.includes(color.label)}
            onClick={() => onColorSelect(color.label)}
          />
        ))}
      </div>
    </section>
  );
};

export { FilterByColor };
