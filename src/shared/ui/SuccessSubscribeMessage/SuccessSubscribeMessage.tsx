import { useSelector } from 'react-redux';
import cn from 'classnames';
import { selectIsSubscribeSuccess } from '~widgets/subscribe-block/model/slice';

import css from './SuccessSubscribeMessage.module.scss';

const SuccessSubscribeMessage = () => {
  const isSubscribeSuccess = useSelector(selectIsSubscribeSuccess);

  return (
    isSubscribeSuccess && (
      <span
        className={cn(css.successSubmit, {
          [css.showMessage]: isSubscribeSuccess,
        })}
      >
        Subscription successfully completed
      </span>
    )
  );
};

export { SuccessSubscribeMessage };
