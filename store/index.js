import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

const CustomProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default CustomProvider;
