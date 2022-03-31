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
  img: string;
}

export type ProductCart = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}