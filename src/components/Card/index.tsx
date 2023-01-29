import { ProductsData } from '@/domain/products/products';

import { Container } from './styles';

export type CardProps = ProductsData;

export default function Card({ name, description, img }: CardProps) {
  return (
    <Container>
      <div className="product">
        <div className="productImage">
          <img src={img} />
        </div>
        <div className="namePrice">
          <h5>{name}</h5>
          <span>R$2.499</span>
        </div>
        <p>{description}</p>
      </div>
    </Container>
  );
}
