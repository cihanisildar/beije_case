import React from "react";
import { Button } from "./ui/button";
import { FaTurkishLiraSign } from "react-icons/fa6";
import store from "@/store/store";

const AddToBasket = () => {
  const state = store.getState();
  const isDisabled = !state.totalPrice.price;

  return (
    <>
      <Button
        disabled={!state.totalPrice.price}
        className="btwMdLg:flex hidden  w-full transition-all duration-300 hover:bg-[#1f1f1f] bg-[#343131] py-6 text-lg text-white rounded-full"
      >
        Sepete Ekle (<FaTurkishLiraSign />
        {state.totalPrice.price})
      </Button>
      <Button
        disabled={isDisabled}
        className={`btwMdLg:hidden flex w-full transition-all duration-300 py-6 text-lg text-white rounded-full ${
          isDisabled
            ? "bg-[#9ca3af] cursor-not-allowed"
            : "hover:bg-[#1f1f1f] bg-[#343131]"
        }`}
      >
        Sepete Ekle
      </Button>
    </>
  );
};

export default AddToBasket;
