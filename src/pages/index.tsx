import { GetStaticProps } from 'next';

import HomePage from '../containers/Home';
import { ProductsData } from '../domain/products/products';
import { response } from '../data/products';

export type HomeProps = {
  products: ProductsData[];
};

export default function Home({ products }: HomeProps) {
  return <HomePage products={products} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { products } = response;

  return {
    props: { products },
  };
};
