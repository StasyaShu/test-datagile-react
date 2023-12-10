import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import filtersReducer from './slices/filtersSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filtersReducer,
  },
});

export default store;
