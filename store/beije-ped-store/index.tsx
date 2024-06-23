import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BeijePedType = {
  beije_ped: {
    standart_ped: number;
    super_ped: number;
    super_plus_ped: number;
  };
};

const initialState: BeijePedType = {
  beije_ped: {
    standart_ped: 0,
    super_ped: 0,
    super_plus_ped: 0,
  },
};

export const beijePedSlice  = createSlice({
  name: "beijePed",
  initialState,
  reducers: {
    updateStandartPed: (state, action: PayloadAction<number>) => {
      state.beije_ped.standart_ped += action.payload;
    },
    updateSuperPed: (state, action: PayloadAction<number>) => {
      state.beije_ped.super_ped += action.payload;
    },
    updateSuperPlusPed: (state, action: PayloadAction<number>) => {
      state.beije_ped.super_plus_ped += action.payload;
    },
  },
});

export const { updateStandartPed, updateSuperPed, updateSuperPlusPed } = beijePedSlice.actions;
