import { ProductsData } from '../../domain/products/products';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { cartActions as actions, pData } from '../../redux/features/cart/slice';
import { moneyFormat } from '../../utils/moneyFormat';

import { Container } from './styles';

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const handleUpdateQty = (item: pData, btn: string) => {
    let qty = item.qty;

    btn === '+' ? (qty += 1) : (qty -= 1);
    qty > 0
      ? dispatch(actions.cartAddItem({ ...item, qty }))
      : dispatch(actions.cartRemoveItem(item));
  };

  const handleRemove = (item: ProductsData) => {
    dispatch(actions.cartRemoveItem(item));
  };

  return (
    <Container>
      {cartItems.map((item) => (
        <div key={item.id} className="itemCart" title={item.name}>
          <div className="internalDiv">
            <div className="itemImage">
              <img src={item.photo} alt={item.name} />
            </div>
            <h5>{item.name}</h5>
            <div className="qty">
              <span className="spanQty">Qtd:</span>
              <div className="qtyButtons">
                <button
                  onClick={() => handleUpdateQty(item, '-')}
                  title="Diminuir"
                >
                  -
                </button>
                <input
                  type="text"
                  value={item.qty}
                  title="Quantidade"
                  disabled
                />
                <button
                  onClick={() => handleUpdateQty(item, '+')}
                  title="Aumentar"
                >
                  +
                </button>
              </div>
            </div>
            <p>{moneyFormat(item.price)}</p>
          </div>
          <span
            className="removeItem"
            onClick={() => handleRemove(item)}
            title="Remover"
          >
            X
          </span>
        </div>
      ))}
    </Container>
  );
}
