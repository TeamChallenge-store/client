import { LikedProduct } from '~entities/likes';
import css from './LikesList.module.scss';
import { Icon } from '~shared/ui/Icon';

interface LikesListProps {
  products: LikedProduct[];
  onRemove: (productId: number) => void;
}

const LikesList = ({ products, onRemove }: LikesListProps) => {
  const handleRemoveLike = (productId: number) => {
    try {
      onRemove(productId);
    } catch (error) {
      console.error('Помилка видалення лайка:', error);
    }
  };

  const getImageUrl = (imagePath: string | undefined): string => {
    if (!imagePath) {
      return 'http://localhost:8000/media/default_image.jpg';
    }
    if (imagePath.startsWith('/media/')) {
      return `http://localhost:8000${imagePath}`;
    }
    return `http://localhost:8000/media/${imagePath}`;
  };

  return (
    <div className={css.likesList}>
      {products.map((product) => (
        <div key={product.id} className={css.productItem}>
          <img src={getImageUrl(product.image)} alt={product.name} className={css.productImage} />
          <div className={css.productDetails}>
            <h3 className={css.productName}>{product.name}</h3>
            <p className={css.productPrice}>${product.price.toFixed(2)}</p>
          </div>
          <Icon
            type="remove"
            className={css.removeIcon}
            onClick={() => handleRemoveLike(product.id)}
          />
        </div>
      ))}
    </div>
  );
};

export { LikesList };