import { createSlice } from '@reduxjs/toolkit';

const persistedIdofuser = localStorage.getItem('idofuser');
const initialState = {
  idofuser: persistedIdofuser ? JSON.parse(persistedIdofuser) : [],
};

export const IdSlice = createSlice({
  name: 'userId',
  initialState,
  reducers: {
    userId: (state, action) => {
      state.idofuser = action.payload;
      localStorage.setItem('idofuser', JSON.stringify(action.payload));
    },
  },
});

export const { userId } = IdSlice.actions;

export default IdSlice.reducer;
