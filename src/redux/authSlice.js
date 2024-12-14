import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload?.user;
      state.token = action.payload?.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = "";
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
