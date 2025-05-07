import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import css from './AddToWish.module.scss';
import { useDispatch } from 'react-redux';
import { setIsLikesUpdated } from '~widgets/likes-pop-up/model/slice';
import { IProductCard } from '~entities/product';
import { useAddProductToLikesMutation, useDeleteLikedProductMutation } from '~entities/likes';
import 'react-toastify/dist/ReactToastify.css';

interface AddToWishProps {
  product: IProductCard;
}

const AddToWish: FC<AddToWishProps> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [addProductToLikes] = useAddProductToLikesMutation();
  const [removeProductFromLikes] = useDeleteLikedProductMutation();
  const dispatch = useDispatch();

  // Перевіряємо, чи товар уже в улюблених (опціонально, якщо бекенд повертає список)
  useEffect(() => {
    // Якщо є API для отримання улюблених, можна перевірити тут
    // Наприклад: useGetLikedProductsQuery
    setIsLiked(false); // За замовчуванням false, можна додати перевірку
  }, [product.id]);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      if (!isLiked) {
        // Додаємо до улюблених
        await addProductToLikes({ product_id: product.id }).unwrap();
        setIsLiked(true);
        dispatch(setIsLikesUpdated(true));
      } else {
        // Видаляємо з улюблених
        await removeProductFromLikes({ product_id: product.id }).unwrap();
        setIsLiked(false);
        dispatch(setIsLikesUpdated(true));
      }
    } catch (error) {
      console.error('Помилка при зміні улюблених:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={css.favButton}
      aria-label="favorite"
      type="button"
      disabled={isLoading}
    >
      <svg
        className={cn({
          [css.clicked]: isLiked,
        })}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isLiked ? '#ff0000' : 'none'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.794 3.75002C18.118 3.75002 19.362 4.26602 20.298 5.20102C21.2262 6.13093 21.7475 7.39113 21.7475 8.70502C21.7475 10.0189 21.2262 11.2791 20.298 12.209L12 20.508L3.70096 12.209C2.77307 11.2791 2.25195 10.0192 2.25195 8.70552C2.25195 7.39188 2.77307 6.13189 3.70096 5.20202C4.15999 4.74032 4.70604 4.37425 5.30751 4.12501C5.90897 3.87578 6.5539 3.74832 7.20496 3.75002C8.52896 3.75002 9.77296 4.26602 10.709 5.20102L11.469 5.96102L12 6.49202L12.53 5.96102L13.29 5.20102C13.7492 4.73963 14.2953 4.37384 14.8967 4.12478C15.4982 3.87573 16.143 3.74835 16.794 3.75002Z"
          stroke="#666666"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
};

export { AddToWish };