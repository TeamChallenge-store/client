export interface LikedProduct {
  id: number;
  name: string;
  price: number;
  image: string | undefined;
  subtitle?: string;
  description?: string;
}