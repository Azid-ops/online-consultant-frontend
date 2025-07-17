import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileRedux(state, action) {
      return action.payload;
    },
    clearProfile() {
      return null;
    },
  },
});

export const { setProfileRedux, clearProfile } = profileSlice.actions;
export default profileSlice.reducer; 