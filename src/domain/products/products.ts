export type ResponseData = {
  products: ProductsData[];
  count: number;
};

export type ProductsData = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};
