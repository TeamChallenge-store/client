import shrek from '~shared/images/shrek.gif';

const Home = () => {
  return (
    <div>
      <h1 className="red">Hello team!!!</h1>
      <img className="shrek" src={shrek} alt="shrek" />
    </div>
  );
};

export { Home };
