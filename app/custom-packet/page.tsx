"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useState } from "react";
import DailyPedSlider from "./(sliders)/dailyPedSlider";
import PedSlider from "./(sliders)/pedSlider";
import TamponSlider from "./(sliders)/tamponSlider";
import CustomPacket from "./packet";
import ResponsiveCustomPacket from "./responsive-packet";

const CustomPacketPage = () => {
  const [activeTab, setActiveTab] = useState("beijePed");

  return (
    <div className="w-full bg-[#F9F5F2] overflow-x-hidden">
      <div className="max-w-6xl mx-auto py-12 px-8 flex overflow-x-hidden">
        <div className="btwMdLg:w-1/2 w-full flex flex-col gap-5 btwMdLg:pr-10">
          <div className="flex justify-between items-center">
            <h1 className="btwMdLg:text-3xl text-[26px] leading-8 font-semibold">
              Kendi Paketini Oluştur
            </h1>
            <Link
              className="text-center lg:text-start btwMdLg:flex hidden"
              href="/"
            >
              Nasıl çalışır?
            </Link>
          </div>

          <p className="text-[17px] leading-6 text-[#00000099]">
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
            miktarlardan, sana özel bir paket oluşturalım.
          </p>

          <div className="w-full mt-10">
            <Tabs
              value={activeTab}
              onValueChange={(value: string) => setActiveTab(value)}
              className="w-full"
            >
              <TabsList className="w-full grid grid-cols-3 btwMdLg:flex btwMdLg:flex-row">
                <TabsTrigger
                  className="col-span-1 sm:flex sm:flex-row sm:gap-2 flex-col"
                  value="beijePed"
                >
                  <span>beije</span>
                  <span>Ped</span>
                </TabsTrigger>
                <TabsTrigger
                  className="col-span-1 sm:flex sm:flex-row sm:gap-2 flex-col"
                  value="beijeGünlükPed"
                >
                  <span>beije</span>
                  <span>Günlük</span>
                  <span>Ped</span>
                </TabsTrigger>
                <TabsTrigger
                  className="col-span-1 sm:flex sm:flex-row sm:gap-2 flex-col"
                  value="beijeTampon"
                >
                  <span>beije</span>
                  <span>Tampon</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="beijePed" className="flex flex-col btwMdLg:mt-0 mt-10">
                <PedSlider type="standart" />
                <PedSlider type="super" />
                <PedSlider type="superPlus" />
              </TabsContent>
              <TabsContent value="beijeGünlükPed">
                <DailyPedSlider type="daily" />
                <DailyPedSlider type="superDaily" />
              </TabsContent>
              <TabsContent value="beijeTampon">
                <TamponSlider type="mini" />
                <TamponSlider type="standart" />
                <TamponSlider type="super" />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <CustomPacket />
      </div>
      <ResponsiveCustomPacket />
    </div>
  );
};

export default CustomPacketPage;
