import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { persistMiddleware } from "./persistMiddleware";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("persist");
    if (!serializedState) {
      return;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Rehydration State Error");
    return;
  }
};
// const blockList = ["auth"];
const preloadedState = loadState();
const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistMiddleware());
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
