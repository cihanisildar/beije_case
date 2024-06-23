import React from "react";
import { Slider } from "@/components/ui/slider";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMiniTampon,
  updateStandartTampon,
  updateSuperTampon,
} from "../../../store/beije-tampon-store/index"; // Adjust the path accordingly
import store, { RootState } from "@/store/store";
import { calculateAndUpdateTotalPrice } from "@/store/total-basket-store";

interface TamponSliderProps {
  type: "mini" | "standart" | "super";
}

const TamponSlider: React.FC<TamponSliderProps> = ({ type }) => {
  const dispatch = useDispatch();
  const beijeTamponState = useSelector(
    (state: RootState) => state.beijeTampon.beije_tampon
  );

  const getSliderValue = () => {
    switch (type) {
      case "mini":
        return [beijeTamponState.mini_tampon];
      case "standart":
        return [beijeTamponState.standart_tampon];
      case "super":
        return [beijeTamponState.super_tampon];
      default:
        return [0];
    }
  };

  const handleChange = (value: number[]) => {
    switch (type) {
      case "mini":
        dispatch(updateMiniTampon(value[0] - beijeTamponState.mini_tampon));
        break;
      case "standart":
        dispatch(
          updateStandartTampon(value[0] - beijeTamponState.standart_tampon)
        );
        break;
      case "super":
        dispatch(updateSuperTampon(value[0] - beijeTamponState.super_tampon));
        break;
    }
    const state = store.getState();
    dispatch(calculateAndUpdateTotalPrice(state));
  };

  const sliderValue = getSliderValue();

  return (
    <div className="flex flex-col w-full text-md font-normal">
      <div className="flex flex-col gap-5 mt-16">
        <h1 className="text-lg p-2">
          {type === "standart"
            ? "Mini Tampon"
            : type === "super"
            ? "Standart Tampon"
            : "Süper Tampon"}
        </h1>
        <Slider
          className="bg-[#343131] rounded-full h-[3px] cursor-pointer transition duration-150 ease-in-out"
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

export default TamponSlider;
