import { Slider } from "@/components/ui/slider";
import store, { RootState } from "@/store/store";
import { calculateAndUpdateTotalPrice } from "@/store/total-basket-store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDailyPed,
  updateSuperDailyPed,
} from "../../../store/beije-daily-ped-store/index";

interface PedSliderProps {
  type: "daily" | "superDaily";
}

const DailyPedSlider: React.FC<PedSliderProps> = ({ type }) => {
  const dispatch = useDispatch();
  const beijeDailyPedState = useSelector(
    (state: RootState) => state.beijeDailyPed.beije_daily_ped
  );

  const getSliderValue = () => {
    switch (type) {
      case "daily":
        return [beijeDailyPedState.daily_ped];
      case "superDaily":
        return [beijeDailyPedState.super_daily_ped];
      default:
        return [0];
    }
  };

  const handleChange = (value: number[]) => {
    switch (type) {
      case "daily":
        dispatch(updateDailyPed(value[0] - beijeDailyPedState.daily_ped));
        break;
      case "superDaily":
        dispatch(
          updateSuperDailyPed(value[0] - beijeDailyPedState.super_daily_ped)
        );
        break;
    }
    const state = store.getState();
    dispatch(calculateAndUpdateTotalPrice(state));
  };

  const sliderValue = getSliderValue();

  return (
    <div className="flex flex-col w-full text-md font-normal">
      <div className="flex flex-col gap-5 mt-16">
        <h1 className="btwMdLg:text-lg text-md p-2">
          {type === "daily" ? "Günlük Ped" : "Süper Günlük Ped"}
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

export default DailyPedSlider;
