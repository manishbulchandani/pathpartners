import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
// import adminReducer from "./admin/adminSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    // admin: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;