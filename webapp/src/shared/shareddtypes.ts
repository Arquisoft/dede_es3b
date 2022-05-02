export type User = {
  name: string;
  email: string;
  password: string;
}

export type Order = {
  id: string,
  dni: string,
  name: string,
  surname: string,
  email: string,
  creditcard_number: string,
  expiration_date: string,
  price: Number,
  pod_direction: string
}

export type OrderProduct = {
  quantity: number,
  id_order: string,
  id_product: string
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
  img: string;
  quantity: number;
}
