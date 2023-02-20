import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  loading: false;
}

const initialState = {
  value: 0,
  loading: false
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    incrementSaga: (state, action) => {
      state.loading = true;
    },
    incrementSagaSuccess: (state, action) => {
      state.loading = false;
      state.value += 1;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  incrementSaga,
  incrementSagaSuccess
} = counterSlice.actions;

export const selectCounterValue = (state) => state.counter.value;

export default counterSlice.reducer;
