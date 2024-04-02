interface IProductCard {
  id: number;
  name: string;
  price: string;
  image: string;
  oldPrice?: string;
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
