import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './LikesPopUp.module.scss';
import { Icon } from '~shared/ui/Icon';
import { Loader } from '~shared/ui/Loader';
import { selectIsModalOpen, setIsModalOpen } from '~shared/ui/Modal';
import {
  selectIsLikesUpdated,
  setIsLikesUpdated,
  selectIsLikesOpen,
  setIsLikesOpen,
} from '~widgets/likes-pop-up/model/slice';
import { LikesList } from '~widgets/likes-pop-up/LikesList/LikesList';
import { EmptyLikesModal } from '~widgets/likes-pop-up/LikesModal/EmptyLikesModal';
import { useGetLikedProductsQuery, useDeleteLikedProductMutation } from '~entities/likes';

const LikesPopUp = ({ onClose }: { onClose: () => void }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const isLikesUpdated = useSelector(selectIsLikesUpdated);
  const isLikesOpen = useSelector(selectIsLikesOpen);
  const dispatch = useDispatch();
  const { data: likedProducts, isLoading, refetch, error } = useGetLikedProductsQuery();
  const [deleteLikedProduct] = useDeleteLikedProductMutation();
  const products = useMemo(() => {
    console.log('[LikesPopUp] Computing products, likedProducts:', likedProducts);
    return likedProducts ?? [];
  }, [likedProducts]);
  const [isClosing, setIsClosing] = useState(false);

  // Логування стану для дебагінгу
  console.log('[LikesPopUp] isModalOpen:', isModalOpen);
  console.log('[LikesPopUp] isLikesOpen:', isLikesOpen);
  console.log('[LikesPopUp] isLoading:', isLoading);
  console.log('[LikesPopUp] likedProducts:', likedProducts);
  console.log('[LikesPopUp] products:', products);
  console.log('[LikesPopUp] error:', error);
  console.log('[LikesPopUp] likedProducts structure:', JSON.stringify(likedProducts, null, 2));

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  useEffect(() => {
    if (isLikesUpdated) {
      console.log('[LikesPopUp] isLikesUpdated triggered, calling refetch');
      refetch();
      dispatch(setIsLikesUpdated(false));
    }
  }, [isLikesUpdated, dispatch, refetch]);

  useEffect(() => {
    console.log('[LikesPopUp] products.length:', products.length);
    dispatch(setIsModalOpen(products.length > 0));
  }, [dispatch, products.length]);

  const handleCloseLikes = () => {
    console.log('[LikesPopUp] handleCloseLikes called');
    setIsClosing(true);
    setTimeout(() => {
      dispatch(setIsLikesOpen(false));
      onClose();
    }, 300);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      console.log('[LikesPopUp] handleBackdropClick triggered');
      handleCloseLikes();
    }
  };

  const handleRemoveProduct = async (productId: number) => {
    console.log('[LikesPopUp] handleRemoveProduct called with productId:', productId);
    try {
      await deleteLikedProduct({ product_id: productId }).unwrap();
      dispatch(setIsLikesUpdated(true));
    } catch (error) {
      console.error('[LikesPopUp] Помилка видалення продукту:', error);
    }
  };

  if (isLoading) {
    console.log('[LikesPopUp] Rendering Loader');
    return <Loader />;
  }

  console.log('[LikesPopUp] Rendering modal, products.length:', products.length);

  return (
    isModalOpen &&
    isLikesOpen && (
      <div
        className={`${css.modalBackdrop} ${isClosing ? css.closing : ''}`}
        onClick={handleBackdropClick}
      >
        <div className={css.likesPage}>
          {products.length === 0 ? (
            <EmptyLikesModal onClose={handleCloseLikes} />
          ) : (
            <>
              <div className={css.likesHeader}>
                <p className={css.title}>Wish List</p>
                <Icon
                  onClick={handleCloseLikes}
                  className={css.closeIcon}
                  type="close"
                />
              </div>
              <div className={css.info}>
                <div className={css.likesList}>
                  <LikesList products={products} onRemove={handleRemoveProduct} />
                </div>
                <div className={css.summary}>
                  <p className={css.summaryText}>Total products: {products.length}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};

export { LikesPopUp };