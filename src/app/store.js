import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import viewerReducer from "../features/viewer/viewerSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    viewer: viewerReducer,
  },
});
