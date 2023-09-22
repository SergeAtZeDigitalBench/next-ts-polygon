export interface IPageProps<
  P = Record<string, string>,
  Q = Record<string, string>
> {
  params: P;
  searchParams: Q;
}

export interface Review {
  rating: number;
  text: string;
}

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  reviews: Review[];
}

export interface Cart {
  products: {
    id: number;
    name: string;
    image: string;
    price: number;
  }[];
}
