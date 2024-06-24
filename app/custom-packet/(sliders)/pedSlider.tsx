import { Slider } from "@/components/ui/slider";
import store, { RootState } from "@/store/store";
import { calculateAndUpdateTotalPrice } from "@/store/total-basket-store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateStandartPed,
  updateSuperPed,
  updateSuperPlusPed,
} from "../../../store/beije-ped-store/index";

interface PedSliderProps {
  type: "standart" | "super" | "superPlus";
}

const PedSlider: React.FC<PedSliderProps> = ({ type }) => {
  const dispatch = useDispatch();
  const beijePedState = useSelector(
    (state: RootState) => state.beijePed.beije_ped
  );

  const getSliderValue = () => {
    switch (type) {
      case "standart":
        return [beijePedState.standart_ped];
      case "super":
        return [beijePedState.super_ped];
      case "superPlus":
        return [beijePedState.super_plus_ped];
      default:
        return [0];
    }
  };

  const handleChange = (value: number[]) => {
    switch (type) {
      case "standart":
        dispatch(updateStandartPed(value[0] - beijePedState.standart_ped));
        break;
      case "super":
        dispatch(updateSuperPed(value[0] - beijePedState.super_ped));
        break;
      case "superPlus":
        dispatch(updateSuperPlusPed(value[0] - beijePedState.super_plus_ped));
        break;
    }
    const state = store.getState();
    dispatch(calculateAndUpdateTotalPrice(state));
  };

  const sliderValue = getSliderValue();

  return (
    <div className="flex flex-col w-full text-md font-normal">
      <div className="flex flex-col gap-5 mt-16">
        <h1 className="btwMdLg:text-lg text-md   p-2">
          {type === "standart"
            ? "Standart Ped"
            : type === "super"
            ? "Süper Ped"
            : "Süper+ Ped"}
        </h1>
        <Slider
          className="bg-[#343131] rounded-full h-[3px] cursor-pointer"
          defaultValue={[0]}
          max={60}
          step={10}
          minStepsBetweenThumbs={10}
          value={sliderValue}
          onValueChange={(value) => handleChange(value)}
        />
      </div>

      <div className="w-full flex justify-between items-center mt-4">
        <span>0</span>
        <span>60</span>
      </div>
    </div>
  );
};

export default PedSlider;
