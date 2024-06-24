"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { charity, donationPad, ourPhilosophy } from "../../../images";
const NavbarDonation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="cursor-pointer">
      <HoverCard openDelay={0} closeDelay={100} open={isVisible} onOpenChange={setIsVisible}>
        <HoverCardTrigger onClick={handleToggleVisibility}>
          <span className="border-b-[1px] border-[#F5F5F5] hover:border-black ease-in duration-150 ">
            Bağış Kültürü
          </span>
        </HoverCardTrigger>

        <HoverCardContent className="w-screen mt-5 border-none bg-[#F5F5F5]">
          <div className="max-w-6xl mx-auto p-5 ">
            <h1 className="text-black font-semibold text-2xl w-3/4 ">
              Bağış Kültürü
            </h1>
            <div className="w-full flex">
              <div className="w-[90%]">
                <div className="flex w-full mt-4 ">
                  <div className="w-full grid grid-cols-4 gap-10">
                    <div className="flex flex-col gap-4 col-span-1">
                      <div className="h-[120px] w-[240px] relative">
                        <Image
                          src={ourPhilosophy}
                          alt="ourPhilosophy"
                          fill
                          objectFit="cover"
                        />
                      </div>

                      <div className="flex  items-center justify-between">
                        <h1 className="font-normal">Felsefemiz</h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 col-span-1">
                      <div className="h-[120px] w-[240px] relative">
                        <Image
                          src={donationPad}
                          alt="donationPad"
                          fill
                          objectFit="cover"
                        />
                      </div>

                      <div className="flex  items-center justify-between ">
                        <h1 className="font-normal  w-[100px] break-words">
                          Askıda Ped
                        </h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 col-span-1">
                      <div className="h-[120px] w-[240px] relative">
                        {" "}
                        <Image
                          src={charity}
                          alt="charity"
                          fill
                          objectFit="cover"
                        />
                      </div>

                      <div className="flex gap-2 items-center justify-between ">
                        <h1 className="font-normal text-md w-[100px] break-words">
                          Bağış
                        </h1>
                        <ChevronRight size={18} />
                      </div>
                    </div>
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

export default NavbarDonation;
