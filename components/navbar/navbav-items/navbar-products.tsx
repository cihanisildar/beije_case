"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  beijeCup,
  beijeHeatingPatch,
  beijePad,
  beijePantyLiner,
  beijeTampon,
  cupIcon,
  customIcon,
  customPacket,
  dailyPadIcon,
  dailyPadPackets,
  giftBagIcon,
  heatingPatchIcon,
  padIcon,
  padPackets,
  popularPackets,
  shoppingBagIcon,
  tamponIcon,
  tamponPackets,
  trialPacket,
} from "../../../images";
const NavbarProducts = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="cursor-pointer">
      <HoverCard
        openDelay={0}
        closeDelay={100}
        open={isVisible}
        onOpenChange={setIsVisible}
      >
        <HoverCardTrigger onClick={handleToggleVisibility}>
          <span className="border-b-[1px] border-[#F5F5F5] hover:border-black ease-in duration-150 ">
            Ürünler
          </span>
        </HoverCardTrigger>
        <HoverCardContent className="w-screen  bg-[#F5F5F5] border-none">
          <div className="max-w-6xl mx-auto p-5 ">
            <h1 className="text-black font-semibold text-2xl w-3/4 ">
              Ürünler
            </h1>
            <div className="w-full flex">
              <div className="w-[90%]">
                <div className="flex w-full mt-4 ">
                  <div className="w-full flex justify-between ">
                    <div className="flex flex-col gap-4">
                      <div className="h-[80px] w-[160px] relative">
                        <Image
                          src={beijePad}
                          alt="beijePad"
                          fill
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex  items-center justify-between">
                        <Image src={padIcon} alt="padIcon" width={12} />
                        <h1 className="font-normal">beije Ped</h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="h-[80px] w-[160px] relative">
                        <Image
                          src={beijePantyLiner}
                          alt="beijePantyLiner"
                          fill
                          objectFit="cover"
                        />
                      </div>

                      <div className="flex  items-center justify-between ">
                        <Image
                          src={dailyPadIcon}
                          alt="dailyPadIcon"
                          width={15}
                        />
                        <h1 className="font-normal  w-[100px] break-words">
                          beije Günlük Ped
                        </h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="h-[80px] w-[160px] relative">
                        {" "}
                        <Image
                          src={beijeTampon}
                          alt="beijeTampon"
                          fill
                          objectFit="cover"
                        />
                      </div>

                      <div className="flex gap-2 items-center justify-between ">
                        <Image src={tamponIcon} alt="tamponIcon" width={12} />
                        <h1 className="font-normal flex-1 text-center text-md w-[100px] break-words">
                          beije Tampon
                        </h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="h-[80px] w-[160px] relative">
                        <Image
                          src={beijeCup}
                          alt="beijeCup"
                          fill
                          objectFit="cover"
                        />
                      </div>

                      <div className="flex  items-center justify-between ">
                        <Image src={cupIcon} alt="cupIcon" width={12} />
                        <h1 className="font-normal w-[100px] break-words">
                          beije Kap
                        </h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      {" "}
                      <div className="h-[80px] w-[160px] relative">
                        <Image
                          src={beijeHeatingPatch}
                          alt="beijeHeatingPatch"
                          fill
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex  items-center justify-between ">
                        <Image
                          src={heatingPatchIcon}
                          alt="HeatingPatchIcon"
                          width={12}
                        />
                        <h1 className="font-normal w-[100px] break-words">
                          Isı Bandı
                        </h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-between items-center mt-5 ">
                  <h1 className="text-black font-semibold text-2xl  w-3/4  mt-5">
                    Paketler
                  </h1>
                  <div className="flex gap-2 items-center ">
                    <h1 className="text-[16px] font-semibold tracking-wide">
                      Tüm Paketler
                    </h1>
                    <ArrowRight size={20} />
                  </div>
                </div>

                <div className="flex gap-4 w-full mt-6 ">
                  <div className="w-full flex gap-2 justify-between ">
                    <div className="flex flex-col gap-4">
                      <div className="h-[80px] w-[160px] relative">
                        <Image
                          src={popularPackets}
                          alt="popularPackets"
                          style={{ objectFit: "cover" }}
                          fill
                        />
                      </div>

                      <div className="flex gap-1 items-center justify-between">
                        <Image src={giftBagIcon} alt="giftBagIcon" width={15} />
                        <h1 className="font-normal">Popüler Paketler</h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="h-[80px] w-[160px] relative">
                        {" "}
                        <Image
                          src={padPackets}
                          alt="padPackets"
                          fill
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex  items-center justify-between ">
                        <Image src={padIcon} alt="padIcon" width={15} />
                        <h1 className="font-normal w-[100px] break-words">
                          Ped Paketleri
                        </h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="h-[80px] w-[160px] relative">
                        {" "}
                        <Image
                          src={dailyPadPackets}
                          alt="dailyPadPackets"
                          fill
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex  items-center justify-between ">
                        <Image
                          src={dailyPadIcon}
                          alt="dailyPadIcon"
                          width={15}
                        />
                        <h1 className="font-normal w-[100px] break-words">
                          Günlük Ped Paketleri
                        </h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="h-[80px] w-[160px] relative">
                        {" "}
                        <Image
                          src={tamponPackets}
                          alt="tamponPackets"
                          fill
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex  items-center justify-between ">
                        <Image src={tamponIcon} alt="tamponIcon" width={15} />
                        <h1 className="font-normal w-[100px] break-words">
                          Tampon Paketleri
                        </h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="h-[80px] w-[160px] relative">
                        {" "}
                        <Image
                          src={trialPacket}
                          alt="trialPacket"
                          fill
                          objectFit="cover"
                        />
                      </div>

                      <div className="flex  items-center justify-between ">
                        <Image
                          src={shoppingBagIcon}
                          alt="shoppingBagIcon"
                          width={15}
                        />
                        <h1 className="font-normal w-[100px] break-words">
                          Deneme Paketi
                        </h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 ml-8">
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-[305px] w-[150px] relative">
                    {" "}
                    <Image
                      src={customPacket}
                      alt="customPacket"
                      fill
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <Image src={customIcon} alt="customIcon" width={15} />
                    <h1 className="font-normal w-[100px] break-words">
                      Kendi Paketini Oluştur
                    </h1>
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default NavbarProducts;
