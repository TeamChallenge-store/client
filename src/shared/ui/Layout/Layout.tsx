import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

type TLayoutProps = {
  header: ReactNode;
  footer?: ReactNode;
};

const Layout: FC<TLayoutProps> = props => {
  return (
    <>
      {props.header}
      <main>
        <Outlet />
      </main>
      {props.footer}
    </>
  );
};

Layout.defaultProps = {
  footer: <footer>Footer</footer>,
};

export { Layout };
