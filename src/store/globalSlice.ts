import {createSlice} from '@reduxjs/toolkit';

interface GlobalSlice {
  global: GlobalState;
}

interface GlobalState {
  scrolling: boolean;
  selectedPage: number;
}

const initialState: GlobalState = {
  scrolling: false,
  selectedPage: 0,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.selectedPage = action.payload;
    },
    nextPage: (state) => {
      const nextPage = state.selectedPage + 1;
      state.selectedPage = nextPage;
    },
    prevPage: (state) => {
      const prevPage = state.selectedPage - 1;
      state.selectedPage = prevPage;
    },
    setScrolling: (state, action) => {
      state.scrolling = action.payload;
    },
  },
});

export const {prevPage, nextPage, setPage, setScrolling} = globalSlice.actions;

export const globalSelector = (state: GlobalSlice) => state.global;

export const selectedPageSelector = (state: GlobalSlice) => state.global.selectedPage;

export const pageManagerSelector = (state: GlobalSlice) => ({
  selectedPage: state.global.selectedPage,
  scrolling: state.global.scrolling,
});

export const scrollingSelector = (state: GlobalSlice) => state.global.scrolling;
