import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodo: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const {setTodo} = todoSlice.actions;

// функции для подписки на состояние
export const selectTodos = state => state.todos;

export default todoSlice.reducer;
