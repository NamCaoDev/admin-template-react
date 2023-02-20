import { PayloadAction } from '@reduxjs/toolkit';
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  takeLeading
} from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

export function* log(action: PayloadAction) {
  console.log('log', action);
}

export function* handleIncrementSaga(action: PayloadAction) {
  yield delay(2000);
  console.log('Payload increment', action.payload);
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('Counter saga');
  yield takeEvery(incrementSaga.type, handleIncrementSaga);
}
