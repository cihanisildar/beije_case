"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PedSlider from "./(sliders)/pedSlider"; // Import the new PedSlider component
import CustomPacket from "./packet";
import DailyPedSlider from "./(sliders)/dailyPedSlider";
import TamponSlider from "./(sliders)/tamponSlider";
import ResponsiveCustomPacket from "./responsive-packet";

const CustomPacketPage = () => {
  const [activeTab, setActiveTab] = useState("beijePed");

  return (
    <div className="w-full bg-[#F9F5F2]">
      <div className="mt-[80px] max-w-6xl mx-auto py-12 px-8 flex">
        <div className="btwMdLg:w-1/2 w-full flex flex-col gap-5 btwMdLg:pr-10">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold">Kendi Paketini Oluştur</h1>
            <Link className="text-center lg:text-start btwMdLg:flex hidden" href="/">
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
                <TabsTrigger className="col-span-1" value="beijePed">beije Ped</TabsTrigger>
                <TabsTrigger className="col-span-1" value="beijeGünlükPed">
                  beije Günlük Ped
                </TabsTrigger>
                <TabsTrigger className="col-span-1" value="beijeTampon">beije Tampon</TabsTrigger>
              </TabsList>
              <TabsContent value="beijePed" className="flex flex-col">
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
