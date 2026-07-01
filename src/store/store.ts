import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './slices/questionSlice';
import achievementReducer from './slices/achievementSlice';

export const store = configureStore({
  reducer: {
    questions: questionReducer,
    achievements: achievementReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 