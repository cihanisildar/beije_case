import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BeijeDailyPedType = {
  beije_daily_ped: {
    daily_ped: number;
    super_daily_ped: number;
  };
};

const initialState: BeijeDailyPedType = {
  beije_daily_ped: {
    daily_ped: 0,
    super_daily_ped: 0,
  },
};

export const beijeDailyPedSlice = createSlice({
  name: "beijeDailyPed",
  initialState,
  reducers: {
    updateDailyPed: (state, action: PayloadAction<number>) => {
      state.beije_daily_ped.daily_ped += action.payload;
    },
    updateSuperDailyPed: (state, action: PayloadAction<number>) => {
      state.beije_daily_ped.super_daily_ped += action.payload;
    },
    resetDailyPed: (state) => {
      (state.beije_daily_ped.daily_ped = 0),
        (state.beije_daily_ped.super_daily_ped = 0);
    },
  },
});

export const { updateDailyPed, updateSuperDailyPed,resetDailyPed } =
  beijeDailyPedSlice.actions;
