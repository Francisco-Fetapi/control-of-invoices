import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const THEME_KEY_IN_LOCALSTORAGE = "darkMode";
export const SIGNUP_KEY_IN_LOCALSTORAGE = "signup-data";
export interface IDarkMode {
  darkMode: boolean;
}

export interface App extends IDarkMode {}

export const initialState: App = {
  darkMode: false,
};

export function sliceCreator(initialState: App) {
  return createSlice({
    name: "app",
    initialState,
    reducers: {
      resetAllState(state, action: PayloadAction<boolean>) {
        if (action.payload) {
          Object.assign(state, initialState);
          return;
        }
        Object.assign(state, initialState);
      },
    },
  });
}

export const app = sliceCreator(initialState);

export const middlewares = {
  serializableCheck: {
    // Ignore these paths in the state
    ignoredPaths: [],
  },
};

export const store = configureStore({
  reducer: {
    app: app.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewares),
});

export default store;

export const { resetAllState } = app.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
