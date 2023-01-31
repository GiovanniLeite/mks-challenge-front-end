import { ProductsData } from '../../../domain/products/products';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type pData = ProductsData & {
  qty: number;
};

export type CartState = {
  cartItems: pData[];
};

const initialState: CartState = {
  cartItems: [],
};

// to be used for slice or mockStore
export const reducersObj = {
  cartAddItem(state: CartState, action: PayloadAction<pData>) {
    const item = action.payload;
    const existItem = state.cartItems.find((e) => e.id === item.id);

    if (existItem) {
      state.cartItems = state.cartItems.map((e) =>
        e.id === existItem.id ? item : e,
      );
    } else {
      state.cartItems = [...state.cartItems, item];
    }
  },
  cartRemoveItem(state: CartState, action: PayloadAction<ProductsData>) {
    const item = action.payload;
    const items = state.cartItems;

    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        items.splice(i, 1);
        state.cartItems = items;
        break;
      }
    }
  },

  exampleRequestSaga() {
    console.log('1');
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: reducersObj,
});

// Actions
export const cartActions = cartSlice.actions;

// Reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;
