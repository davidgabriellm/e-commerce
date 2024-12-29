export interface Product {
  id?: string;
  title?: string;
  thumbnail?: string;
  price?: number;
}

export interface ProductResponse {
  results: Product[];
}
