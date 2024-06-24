"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { allMaterials, faq, how, price, why } from "../../../images";
const NavbarAbout = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="cursor-pointer">
      <HoverCard openDelay={0} closeDelay={100} open={isVisible} onOpenChange={setIsVisible}>
        <HoverCardTrigger onClick={handleToggleVisibility}>
          <span className="border-b-[1px] border-[#F5F5F5] hover:border-black ease-in duration-150 ">
            Biz Kimiz?
          </span>
        </HoverCardTrigger>

        {isVisible && (
          <HoverCardContent className="w-screen mt-5 border-none bg-[#F5F5F5]">
            <div className="max-w-6xl mx-auto p-5 ">
              <h1 className="text-black font-semibold text-2xl w-3/4 ">
                Biz Kimiz?
              </h1>
              <div className="w-full flex">
                <div className="w-[90%]">
                  <div className="flex w-full mt-4 ">
                    <div className="w-full flex justify-between gap-6">
                      <div className="flex flex-col gap-4">
                        <div className="h-[100px] w-[200px] relative">
                          <Image src={why} alt="why" fill objectFit="cover" />
                        </div>

                        <div className="flex  items-center justify-between">
                          <h1 className="font-normal">Neden Beije?</h1>
                          <ChevronRight size={18} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="h-[100px] w-[200px] relative">
                          <Image src={how} alt="how" fill objectFit="cover" />
                        </div>

                        <div className="flex  items-center justify-between ">
                          <h1 className="font-normal  full break-words">
                            beije Nasıl Çalışır?
                          </h1>
                          <ChevronRight size={18} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="h-[100px] w-[200px]  relative">
                          {" "}
                          <Image
                            src={price}
                            alt="price"
                            fill
                            objectFit="cover"
                          />
                        </div>

                        <div className="flex gap-2 items-center justify-between ">
                          <h1 className="font-normal flex-1 text-center text-md w-full break-words">
                            Fiyat Politikası
                          </h1>
                          <ChevronRight size={18} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="h-[100px] w-[200px]  relative">
                          <Image src={faq} alt="faq" fill objectFit="cover" />
                        </div>

                        <div className="flex  items-center justify-between ">
                          <h1 className="font-normal w-full break-words">
                            Sıkça Sorulan Sorular
                          </h1>
                          <ChevronRight size={18} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        {" "}
                        <div className="h-[100px] w-[200px]  relative">
                          <Image
                            src={allMaterials}
                            alt="allMaterials"
                            fill
                            objectFit="cover"
                          />
                        </div>
                        <div className="flex  items-center justify-between ">
                          <h1 className="font-normal full break-words">
                            Tüm Malzemeler
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
        )}
      </HoverCard>
    </div>
  );
};

export default NavbarAbout;
