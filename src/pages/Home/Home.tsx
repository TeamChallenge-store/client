import { FC } from 'react';

import shrek from '~shared/images/shrek.gif';

type THomeProps = object;

const Home: FC<THomeProps> = () => {
  return (
    <div>
      <h1 className="red">Hello team!!!</h1>
      <img src={shrek} alt="shrek" />
    </div>
  );
};

export { Home };
