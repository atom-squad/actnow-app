import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateValues } from '../../common/util';
import { RootState, AppThunk } from '../store';

export interface UserState {
  token: string,
  showScanIntro: boolean,
}

const initialState: UserState = {
  token: '',
  showScanIntro: true,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateToken: (state, action) => {
        state.token = action.payload;
    },
    dismissScanIntro: (state) => {
      state.showScanIntro = false;
  },
  },
});

export const { updateToken, dismissScanIntro } = userSlice.actions;

export default userSlice.reducer;
