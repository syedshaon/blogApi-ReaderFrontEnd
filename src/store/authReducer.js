import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, firstName: "", token: localStorage.getItem("token") },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.firstName = action.payload.firstName;
      state.token = action.payload.token;
      //   localStorage.setItem("token", action.payload.token);
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.firstName = "";
      state.token = null;
      //   localStorage.removeItem("token");
      //   clear cookie
    },
  },
});

export default authSlice.reducer;

export const authActions = authSlice.actions;
