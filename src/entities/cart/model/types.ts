interface IBagProduct {
  id: number;
  product: {
    id: number;
    comments: any[];
    created_at: string;
    updated_at: string;
    name: string;
    price: string;
    old_price: string;
    image: string | null;
    description: string;
    quantity_in_stock: number;
    rate: number;
    subtitle: string;
    subscription: string;
    features: string;
    is_visible: boolean;
    category: number;
    subcategory: number;
    brand: number;
    color: number;
  };
  quantity: number;
  total_price: number;
}

type TResponse = {
  results: IBagProduct[];
};

type TResponseBag = {
  cart_items: IBagProduct[];
  total_price: number;
};

export { type IBagProduct, type TResponse, type TResponseBag };
