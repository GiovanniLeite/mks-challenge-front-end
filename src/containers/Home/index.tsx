import Head from 'next/head';

import { ProductsData } from '../../domain/products/products';

import Card from '../../components/Card';
import { Container } from './styles';

export type HomePageProps = {
  products: ProductsData[];
};

export default function HomePage({ products }: HomePageProps) {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Desenvolvimento de Sistemas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <section className="ProductGrid">
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </section>
      </Container>
    </>
  );
}
