import cn from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

const linkStyles = ({ isActive }: { isActive: boolean }) =>
  cn({
    active: isActive,
  });

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={linkStyles}>
                Home
              </NavLink>
            </li>
            <li>
              <a
                href="https://github.com/TeamChallenge-store/client#description"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TeamChallenge-store/client"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
