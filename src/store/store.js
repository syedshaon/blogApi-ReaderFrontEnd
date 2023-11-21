import { configureStore } from "@reduxjs/toolkit";

// import slices

import numberReducer from "./blogReducer";
import authReducer from "./authReducer";

// Declaring store
const Store = configureStore({
  reducer: {
    math: numberReducer,
    auth: authReducer,
    // Other reducers go here
  },
});

export default Store;
