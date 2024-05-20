interface IProductCard {
  id: number;
  category: number;
  subcategory: number;
  name: string;
  price: string;
  old_price?: string;
  image: string | null;
  quantity_in_stock: number;
  brand: string;
  color: string;
  rate: number;
}

type TResponse = {
  results: IProductCard[];
};

type TResponseProducts = {
  results: {
    products: IProductCard[];
  };
};

type TResponseProductsPage = {
  count: number;
  page_size: number;
  total_pages: number;
  next: string | null;
  previous: string | null;
  results: IProductCard[];
};

type TSortBy = [string, string][];

export {
  type IProductCard,
  type TSortBy,
  type TResponse,
  type TResponseProducts,
  type TResponseProductsPage,
};
