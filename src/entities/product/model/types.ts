interface IProductCard {
  id: number;
  name: string;
  price: string;
  image: string;
}

type TResponse = {
  results: IProductCard[];
};

type TSortBy = [string, string][];

export { type IProductCard, type TSortBy, type TResponse };
