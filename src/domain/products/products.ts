export type ResponseData = {
  products: ProductsData[];
  count: number;
};

export type ProductsData = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  img: string;
};
