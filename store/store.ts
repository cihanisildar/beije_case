import { configureStore } from "@reduxjs/toolkit";
import { beijePedSlice } from "./beije-ped-store/index";
import { beijeDailyPedSlice } from "./beije-daily-ped-store";
import { beijeTamponSlice } from "./beije-tampon-store";
import { totalPriceSlice } from "./total-basket-store";

export const store = configureStore({
  reducer: {
    beijePed: beijePedSlice.reducer,
    beijeDailyPed: beijeDailyPedSlice.reducer,
    beijeTampon: beijeTamponSlice.reducer,
    totalPrice: totalPriceSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;