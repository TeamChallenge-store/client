import { FC, ReactNode, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
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
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
      {props.footer}
    </>
  );
};

Layout.defaultProps = {
  footer: <footer>Footer</footer>,
};

export { Layout };
