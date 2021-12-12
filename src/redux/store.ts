import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import offerSlice from './offerSlice';

export const store = configureStore({
  reducer: {
    offer: offerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;