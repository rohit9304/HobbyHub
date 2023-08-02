// store.js
import { configureStore } from '@reduxjs/toolkit';
import hobbyReducer from './reducers/hobbyReducer';

const store = configureStore({
  reducer: {
    hobbies: hobbyReducer,
  },
});

export default store;
