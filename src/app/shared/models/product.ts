export interface Product {
  id: string;
  title: string;
  price: number;
  discount?: number;
  description: string;
  rating: number;
  state?: ProductState;
  favorite: false;
  image: string;
}

enum ProductState {
  new = 'new',
  offer = 'offer',
}
