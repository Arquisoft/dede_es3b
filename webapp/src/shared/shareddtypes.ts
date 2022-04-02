export type User = {
  name: string;
  email: string;
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
