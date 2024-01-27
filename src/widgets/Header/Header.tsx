import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

type THeaderProps = object;

const linkStyles = ({ isActive }: { isActive: boolean }) =>
  cn({
    active: isActive,
  });

const Header: FC<THeaderProps> = () => {
  return (
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
  );
};

export { Header };
