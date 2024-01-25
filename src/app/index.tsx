import { FC } from 'react';
import shrek from '~shared/images/shrek.gif';
import './styles.scss';

type TAppProps = object;

const App: FC<TAppProps> = () => {
  return (
    <>
      <h1 className="red">Hello, team!!!</h1>
      <img src={shrek} alt="shrek" />
    </>
  );
};

export { App };
