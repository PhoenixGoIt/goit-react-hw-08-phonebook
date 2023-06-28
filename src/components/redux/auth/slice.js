import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { regist, logIn, logOut, getUser } from '../auth/operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const Rejected = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = action.error
}
const Fulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
}
const logOutFulfilled = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
}
const logOutRejected = (state, action) => {
  state.error = action.payload
}
const getUserFulfilled = (state, {payload}) => {
  state.user = { name: payload.name, email: payload.email}
  state.isLoggedIn = true;
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
        .addCase(logOut.fulfilled, logOutFulfilled)
        .addCase(logOut.rejected, logOutRejected)
        .addCase(getUser.fulfilled, getUserFulfilled)
        .addMatcher(isAnyOf(regist.rejected, logIn.rejected), Rejected)
        .addMatcher(isAnyOf(regist.fulfilled, logIn.fulfilled), Fulfilled)
  },
});

export const authReducer = authSlice.reducer;
