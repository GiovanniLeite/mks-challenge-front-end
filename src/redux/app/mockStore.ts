/* eslint-disable no-param-reassign */
import { configureStore, createSlice } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import { CartState, reducersObj } from '../features/cart/slice';

export const mockedState = {
  cartItems: [
    {
      id: 8,
      name: 'Headset Cloud Stinger',
      brand: 'HyperX',
      description:
        'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
      price: '600.00',
      createdAt: '2023-01-23T18:17:04.771Z',
      updatedAt: '2023-01-23T18:17:04.771Z',
      qty: 3,
    },
    {
      id: 5,
      name: 'Apple Watch Series 7',
      brand: 'Apple',
      description:
        'O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
      price: '3200.00',
      createdAt: '2023-01-23T18:17:04.771Z',
      updatedAt: '2023-01-23T18:17:04.771Z',
      qty: 1,
    },
  ],
};

export const sagaMiddleware = createSagaMiddleware();
export const mockStore = (cartState: CartState) => {
  const store = configureStore({
    reducer: {
      cart: createSlice({
        name: 'cart',
        initialState: cartState,
        reducers: reducersObj,
      }).reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);

  return store;
};
