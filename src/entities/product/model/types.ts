interface IProductCard {
  id: number;
  name: string;
  price: string;
  old_price?: string;
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

type TSortBy = [string, string][];

export { type IProductCard, type TSortBy, type TResponse };
