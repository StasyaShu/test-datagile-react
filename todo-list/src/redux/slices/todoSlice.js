import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodo: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    setTodoIsDone: (state, action) => {
      state.forEach(todo => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
      });
    },
  },
});

export const {setTodo, deleteTodo, setTodoIsDone} = todoSlice.actions;

// функции для подписки на состояние
export const selectTodos = state => state.todos;

export default todoSlice.reducer;
