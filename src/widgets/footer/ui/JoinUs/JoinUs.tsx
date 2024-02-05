import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '~shared/ui/Icon';

import css from './JoinUs.module.scss';

type TJoinUsProps = object;

const JoinUs: FC<TJoinUsProps> = () => {
  return (
    <div className={css.joinUs}>
      <h4 className={css.joinTitle}>Join Us</h4>
      <div className={css.icons}>
        <Link to="https://www.youtube.com/?gl=UA&hl=ru">
          <Icon className={css.icon} type="youtube" />
        </Link>
        <Link to="https://www.facebook.com/">
          <Icon className={css.icon} type="facebook" />
        </Link>
        <Link to="https://twitter.com/?lang=ru">
          <Icon className={css.icon} type="twitter" />
        </Link>
        <Link to="https://www.instagram.com/">
          <Icon className={css.icon} type="instagram" />
        </Link>
        <Link to="https://www.linkedin.com/home">
          <Icon className={css.icon} type="linkedin" />
        </Link>
      </div>
    </div>
  );
};

export { JoinUs };
