export type User = {
  name: string;
  email: string;
  password: string;
}

export type Order = {
  id: String,
  dni: String,
  name: String,
  surname: String,
  email: String,
  creditcard_number: String,
  expiration_date: String,
  price: Number,
  pod_direction: String
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
