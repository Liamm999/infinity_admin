import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '../../store';

interface IAuthState {
  accessToken?: string;
  refreshToken?: string;
  accountInfo?: any;
  forgotEmail?: string;
  verifyMailHash?: string;
  verifyToken?: string;
  resetPassHash?: string;
}

const initialState: IAuthState = {
  accessToken: undefined,
  refreshToken: undefined,
  accountInfo: undefined,
  verifyMailHash: undefined,
  verifyToken: undefined,
  resetPassHash: undefined,
  forgotEmail: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setAccountInfo: (state, action: PayloadAction<any>) => {
      state.accountInfo = action.payload;
    },
    setVerifyMailHash: (state, action: PayloadAction<string>) => {
      state.verifyMailHash = action.payload;
    },
    setVerifyToken: (state, action: PayloadAction<string>) => {
      state.verifyToken = action.payload;
    },
    setResetPassHash: (state, action: PayloadAction<string>) => {
      state.resetPassHash = action.payload;
    },
    logout: () => {
      return initialState;
    }
  }
});

export const selectAuth = (state: RootState) => state.auth;

export const {
  setAccessToken,
  setAccountInfo,
  setVerifyMailHash,
  setResetPassHash,
  setVerifyToken,
  logout
} = authSlice.actions;
export default authSlice.reducer;
