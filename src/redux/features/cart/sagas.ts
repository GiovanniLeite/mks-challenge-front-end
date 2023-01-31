import { all, takeLatest } from 'redux-saga/effects';

import { cartActions as actions } from './slice';

function exampleRequestSaga() {
  console.log('2');
}

export default function* cartSaga() {
  yield all([takeLatest(actions.exampleRequestSaga.type, exampleRequestSaga)]);
}
