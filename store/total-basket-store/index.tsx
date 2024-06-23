import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type BeijeTamponType = {
  price: number;
};

const initialState: BeijeTamponType = {
  price: 0,
};

const calculateTotalPrice = (state: RootState): number => {
  const { beijeDailyPed, beijePed, beijeTampon } = state;

  console.log("State in calculateTotalPrice:", { beijeDailyPed, beijePed, beijeTampon });
  

  // Define prices
  const dailyPedPrice = 3.759;
  const superDailyPedPrice = 4.323;
  const standartPedPrice = 6.084;
  const superPedPrice = 7.14;
  const superPlusPedPrice = 8.003;
  const miniTamponPrice = 7.874;
  const standartTamponPrice = 8.488;
  const superTamponPrice = 8.974;

  // Initialize totals
  let totalPedPrice = 0;
  let totalDailyPedPrice = 0;
  let totalTamponPrice = 0;

  
  if (beijeDailyPed) {
    console.log("hi");

    totalDailyPedPrice =
      (beijeDailyPed.beije_daily_ped?.daily_ped || 0) * dailyPedPrice +
      (beijeDailyPed.beije_daily_ped?.super_daily_ped || 0) *
        superDailyPedPrice;
  }

  // Calculate total ped price
  if (beijePed) {
    totalPedPrice =
      (beijePed.beije_ped?.standart_ped || 0) * standartPedPrice +
      (beijePed.beije_ped?.super_ped || 0) * superPedPrice +
      (beijePed.beije_ped?.super_plus_ped || 0) * superPlusPedPrice;
  }

  // Calculate total tampon price
  if (beijeTampon) {
    totalTamponPrice =
      (beijeTampon.beije_tampon?.mini_tampon || 0) * miniTamponPrice +
      (beijeTampon.beije_tampon?.standart_tampon || 0) * standartTamponPrice +
      (beijeTampon.beije_tampon?.super_tampon || 0) * superTamponPrice;
  }

  // Calculate total price
  const totalPrice = totalDailyPedPrice + totalPedPrice + totalTamponPrice;

  return parseFloat(totalPrice.toFixed(2));
};
export const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState,
  reducers: {
    calculateAndUpdateTotalPrice: (state, action) => {
      console.log(action.payload);
      const totalPrice = calculateTotalPrice(action.payload);
      state.price = totalPrice;
    },
  },
});

export const { calculateAndUpdateTotalPrice } = totalPriceSlice.actions;
