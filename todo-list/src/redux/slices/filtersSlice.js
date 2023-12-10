import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  text: '',
  onlyDone: null,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setOnlyFinished: state => {
      state.onlyDone = true;
    },
    setOnlyActive: state => {
      state.onlyDone = false;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {setOnlyFinished, setOnlyActive, resetFilters} =
  filterSlice.actions;

export const selectOnlyFinished = state => state.filters.onlyDone;

export default filterSlice.reducer;
