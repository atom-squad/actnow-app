import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateValues } from '../../common/util';
import { RootState, AppThunk } from '../store';

export interface UserState {
  token: string,
}

const initialState: UserState = {
  token: ''
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateToken: (state, action) => {
        state.token = action.payload;
    },
  },
});

export const { updateToken } = userSlice.actions;

export default userSlice.reducer;
