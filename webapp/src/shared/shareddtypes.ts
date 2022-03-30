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

export type Order = {
  id: string;
  dni: string;
  name: string;
  surname: string;
  email: string;
  cc_number: string;
  expiration_date: string;
  price: number;
}