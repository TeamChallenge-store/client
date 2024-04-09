interface IProductCard {
  id: number;
  category: number;
  subcategory: number;
  name: string;
  price: string;
  oldPrice?: string;
  image: string | null;
  quantity_in_stock: number;
  brand: string;
  color: string;
  rate: number;
  _links: {
    self: {
      href: string;
      title: string;
    };
  };
}

type TResponse = {
  results: IProductCard[];
};

type TResponseProducts = {
  results: {
    products: IProductCard[];
  };
};

type TSortBy = [string, string][];

export {
  type IProductCard,
  type TSortBy,
  type TResponse,
  type TResponseProducts,
};
