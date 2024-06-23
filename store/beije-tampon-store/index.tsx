import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BeijeTamponType = {
  beije_tampon: {
    mini_tampon: number;
    standart_tampon: number;
    super_tampon: number;
  };
};

const initialState: BeijeTamponType = {
  beije_tampon: {
    mini_tampon: 0,
    standart_tampon: 0,
    super_tampon: 0,
  },
};

export const beijeTamponSlice = createSlice({
  name: "beijeTampon",
  initialState,
  reducers: {
    updateMiniTampon: (state, action: PayloadAction<number>) => {
      state.beije_tampon.mini_tampon += action.payload;
    },
    updateStandartTampon: (state, action: PayloadAction<number>) => {
      state.beije_tampon.standart_tampon += action.payload;
    },
    updateSuperTampon: (state, action: PayloadAction<number>) => {
      state.beije_tampon.super_tampon += action.payload;
    },
  },
});

export const { updateMiniTampon, updateStandartTampon, updateSuperTampon } =
  beijeTamponSlice.actions;
