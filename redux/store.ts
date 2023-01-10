import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
    rootReducer: appState
}
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: { rootReducer: appState }
export type AppDispatch = typeof store.dispatch