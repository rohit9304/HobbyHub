// reducers/hobbyReducer.js
import { createSlice } from '@reduxjs/toolkit';

const hobbySlice = createSlice({
  name: 'hobbies',
  initialState: {
    hobbies: [],
    favorites: [],
  },
  reducers: {
    addHobby(state, action) {
      state.hobbies.push(action.payload);
    },
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    deleteHobby(state, action) {
      state.hobbies = state.hobbies.filter((hobby) => hobby !== action.payload);
      state.favorites = state.favorites.filter((fav) => fav !== action.payload);
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter((fav) => fav !== action.payload);
    },
  },
});

export const { addHobby, addToFavorites, deleteHobby, removeFromFavorites } = hobbySlice.actions;
export default hobbySlice.reducer;
