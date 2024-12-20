interface IOrder {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  city: string;
  address?: string;
  department_NP?: string;
  department_UP?: string;
  delivery_method: string;
  payment_method: string;
}

export { type IOrder };
