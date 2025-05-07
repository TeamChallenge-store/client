import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductByIdQuery } from '~entities/product';
import { CustomButton } from "~shared/ui/CustomButton";
import { Breadcrumbs } from "~widgets/breadcrumbs/ui/Breadcrumbs.tsx";
import styles from "./ui/ProductDetails.module.scss";
import imageStyles from "./ui/ProductImage.module.scss";
import badge from './ui/icons/Badge.svg';
import heartIcon from './ui/icons/Img.svg';
import delivery from './ui/icons/Delivery.svg';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const numericProductId = productId ? parseInt(productId, 10) : 0;
  const { data: product, error, isLoading } = useProductByIdQuery(numericProductId);
  const [showDescription, setShowDescription] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.image ?? null);

  const getImageUrl = (imagePath: string | null): string => {
    if (!imagePath) {
      return 'http://localhost:8000/media/default_image.jpg';
    }
    if (imagePath.startsWith('/media/')) {
      return `http://localhost:8000${imagePath}`;
    }
    return `http://localhost:8000/media/${imagePath}`;
  };

  useEffect(() => {
    // Reset main image when product changes
    setMainImage(product?.image ?? null);
  }, [product]);

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details</p>;

  return (
    <>
      <Breadcrumbs
        mainPage='Catalog'
        categoryName={product?.name || 'Category'}
        className={styles.breadcrumbs}
      />
      <div className={styles.productPage}>
        <div className={styles.productContainer}>
          <div className={styles.leftSide}>
            <div className={imageStyles.imageSection}>
              <img
                src={getImageUrl(mainImage)}
                alt={product?.name || 'Product Image'}
                className={imageStyles.image}
              />
              {product?.images && product.images.length > 0 && (
                <div className={imageStyles.additionalImagesContainer}>
                  <div className={imageStyles.additionalImages}>
                    {product.images.map((img) => (
                      <img
                        key={img.id}
                        src={getImageUrl(img.image)}
                        alt={`Additional image ${img.id}`}
                        className={`${imageStyles.additionalImage} ${
                          mainImage === img.image ? imageStyles.activeImage : ''
                        }`}
                        onClick={() => handleImageClick(img.image)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className={styles.contentSection}>
              <div className={styles.toggleSection}>
                <button
                  onClick={() => setShowDescription(true)}
                  className={`${styles.toggleButton} ${showDescription ? styles.active : ''}`}
                >
                  Description
                </button>
                <button
                  onClick={() => setShowDescription(false)}
                  className={`${styles.toggleButton} ${!showDescription ? styles.active : ''}`}
                >
                  Features
                </button>
              </div>
              {showDescription ? (
                <div className={styles.descriptionSection}>
                  {product?.description && (
                    <p className={styles.productDescription}>
                      {product.description}
                    </p>
                  )}
                </div>
              ) : (
                <div className={styles.featuresSection}>
                  {product?.features && (
                    <p className={styles.productFeatures}>{product.features}</p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.rightSideContainer}>
              <div className={styles.productTitleContainer}>
                <h1 className={styles.productTitle}>{product?.name}</h1>
                <div className={styles.badgeStockContainer}>
                  <img src={badge} alt="Badge" className={styles.imageBadge} />
                  <p className={styles.inStockText}>In stock</p>
                </div>
              </div>
              {product?.subscription && (
                <p className={styles.productSubscription}>
                  {product.subscription}
                </p>
              )}
              <div className={styles.priceContainer}>
                {product?.old_price && (
                  <p className={styles.productOldPrice}>{product.old_price} ₴</p>
                )}
                <p className={styles.productPrice}>{product?.price} ₴</p>
              </div>
              <div className={styles.storeInfoContainer}>
                <p className={styles.storeInfo}>
                  <span className={styles.storeLabel}>Color:</span>{' '}
                  {product?.color}
                </p>
                <p className={styles.storeInfo}>
                  <span className={styles.storeLabel}>Brand:</span>{' '}
                  {product?.brand}
                </p>
              </div>
              <div className={styles.actions}>
                <div className={styles.quantityContainer}>
                  <button
                    className={styles.quantityButton}
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <span className={styles.quantity}>{quantity}</span>
                  <button
                    className={styles.quantityButton}
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
                <CustomButton className={styles.buyButton}>BUY NOW</CustomButton>
              </div>
              <div className={styles.favoriteButton}>
                <img src={heartIcon} alt="Heart" className={styles.heartIcon} />
                <span>Add to favorite</span>
              </div>
            </div>
            <img
              src={delivery}
              alt="Delivery"
              className={styles.deliveryIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;