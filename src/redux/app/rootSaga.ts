import cartSaga from '../features/cart/sagas';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([cartSaga()]);
}
