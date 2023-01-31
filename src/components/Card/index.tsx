import { ProductsData } from '../../domain/products/products';
import { useAppDispatch } from '../../redux/app/hooks';
import { cartActions as actions } from '../../redux/features/cart/slice';
import { moneyFormat } from '../../utils/moneyFormat';

import { Container } from './styles';

export type CardProps = ProductsData;

export default function Card(product: CardProps) {
  const dispatch = useAppDispatch();

  const handleAddItem = (item: ProductsData) => {
    dispatch(actions.cartAddItem({ ...item, qty: 1 }));
  };

  return (
    <Container>
      <div className="product">
        <div className="productImage">
          <img src={product.photo} alt={product.name} />
        </div>
        <div className="namePrice">
          <h5>{product.name}</h5>
          <span>{moneyFormat(product.price)}</span>
        </div>
        <p>{product.description}</p>
        <button onClick={() => handleAddItem(product)}>
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.737212"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.737212"
              d="M1 4.375H13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.737212"
              d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          COMPRAR
        </button>
      </div>
    </Container>
  );
}
