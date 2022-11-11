import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliderActive: false,
  searchActive: false,
  expandActive: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toogleSlider: state => {
      state.sliderActive = state.sliderActive === true ? false : true;
    },
    activateSearch: state => {
      state.searchActive = true;
    },
    deactiveSearch: state => {
      state.searchActive = false;
    },
    activeExpand: state => {
      state.expandActive = true;
    },
    deactiveExpand: state => {
      state.expandActive = false;
    },
  },
});

export const {
  toogleSlider,
  activateSearch,
  deactiveSearch,
  activeExpand,
  deactiveExpand,
} = uiSlice.actions;

export const selectedSliderActive = state => state.ui.sliderActive;
export const selectedSearchActive = state => state.ui.searchActive;
export const selectedExpandActive = state => state.ui.expandActive;

export default uiSlice.reducer;
