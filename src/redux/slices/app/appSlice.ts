import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '../../store';

interface IAppState {
  mobile: boolean;
  loading: boolean;
  sidebarCollapsed: boolean;
  currentPage: number;
  language: 'en' | 'cn';
}

const initialState: IAppState = {
  mobile: false,
  loading: false,
  sidebarCollapsed: false,
  currentPage: 1,
  language: 'en'
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.mobile = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload;
    },
    setAppLanguage: (state, action: PayloadAction<'en' | 'cn'>) => {
      state.language = action.payload;
    }
  }
});

export const selectApp = (state: RootState) => state.app;
export const selectAppLoading = (state: RootState) => state.app?.loading;

export const { setSidebarCollapsed, setLoading, setMobile, setAppLanguage } =
  appSlice.actions;
export default appSlice.reducer;
