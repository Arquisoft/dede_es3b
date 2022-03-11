export type User = {
  name: string;
  email: string;
}

export type Product = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
}

export type ProductCart = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}