import { GetStaticProps } from 'next';

import { ProductsData } from '../domain/products/products';
import { getAllProducts } from '../data/products/getAllProducts';

import HomePage from '../containers/Home';

export type HomeProps = {
  products: ProductsData[];
};

export default function Home({ products }: HomeProps) {
  return <HomePage products={products} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { products } = await getAllProducts(
    'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC',
  );

  return {
    props: {
      products,
    },
  };
};
