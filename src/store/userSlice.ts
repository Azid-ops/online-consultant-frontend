import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string | null;
  isVerified: boolean;
}

const initialState: UserState = {
  email: null,
  isVerified: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ email: string; isVerified: boolean }>) {
      state.email = action.payload.email;
      state.isVerified = action.payload.isVerified;
    },
    clearUser(state) {
      state.email = null;
      state.isVerified = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer; 