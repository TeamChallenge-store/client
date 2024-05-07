interface IBagProduct {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string | null;
}

type TResponse = {
  results: IBagProduct[];
};

export { type IBagProduct, type TResponse };
