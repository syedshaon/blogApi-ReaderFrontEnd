import { createSlice } from "@reduxjs/toolkit";

const numberState = { number: 0, showCounter: true };

const counterSliice = createSlice({
  name: "counter",
  initialState: numberState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    decrease(state, action) {
      state.counter -= action.payload;
    },
    reset(state) {
      state.counter = 0;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSliice.reducer;
export const counterActions = counterSliice.actions;
