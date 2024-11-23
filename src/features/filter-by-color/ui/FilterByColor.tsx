import { FC, useState } from 'react';
// import cn from 'classnames';

import css from './FilterByColor.module.scss';
import { ColorCheckbox } from '~shared/ui/ColorCheckbox';

type TFilterByColorProps = {};

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

const FilterByColor: FC<TFilterByColorProps> = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleColorSelect = (color: string, isSelected: boolean) => {
    setSelectedColors(prev => {
      return isSelected ? [...prev, color] : prev.filter(c => c !== color);
    });
  };

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
            onClick={isSelected => handleColorSelect(color.label, isSelected)}
          />
        ))}
      </div>
    </section>
  );
};

export { FilterByColor };
