import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliderActive: false,
  searchActive: false,
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
  },
});

export const { toogleSlider, activateSearch, deactiveSearch } = uiSlice.actions;

export const selectedSliderActive = state => state.ui.sliderActive;
export const selectedSearchActive = state => state.ui.searchActive;

export default uiSlice.reducer;
