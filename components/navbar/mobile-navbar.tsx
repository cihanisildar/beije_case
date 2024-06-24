"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    cupIcon,
    customIcon,
    dailyPadIcon,
    heatingPatchIcon,
    padIcon,
    tamponIcon,
} from "@/images";
import { ArrowRight, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const MobileNavbar = () => {
  const [view, setView] = useState("main");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleToggleView = (newView: string) => {
    setView(newView);
  };

  const btwMdLgBreakpoint = 850;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > btwMdLgBreakpoint) {
        setIsPopoverOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="btwMdLg:hidden block">
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger>
          <Menu onClick={() => setIsPopoverOpen(true)} />
        </PopoverTrigger>
        <PopoverContent className="bg-[#F5F5F5] w-screen max-h-screen border-none mt-1 overflow-y-auto shadow-2xl shadow-bottom">
          {view === "main" ? (
            <div className="w-full flex flex-col gap-4 text-[16px] leading-8 px-2">
              <div
                className="flex justify-between items-center"
                onClick={() => handleToggleView("products")}
              >
                <h1>Ürünler</h1>
                <ChevronRight />
              </div>
              <div
                className="flex justify-between items-center"
                onClick={() => handleToggleView("aboutUs1")}
              >
                <h1>Biz Kimiz?</h1>
                <ChevronRight />
              </div>
              <div
                className="flex justify-between items-center"
                onClick={() => handleToggleView("donationCulture1")}
              >
                <h1>Bağış Kültürü</h1>
                <ChevronRight />
              </div>
              <div className="flex justify-between items-center">
                <h1>Blog</h1>
              </div>
              <div className="flex justify-between items-center">
                <h1>Regl Testi</h1>
              </div>
              <div className="flex justify-between items-center">
                <h1>Kendi Paketini Oluştur</h1>
              </div>
            </div>
          ) : view === "aboutUs1" ? (
            <div className="relative">
              <div className="flex items-center absolute -top-1 -left-2">
                <Button
                  variant="mobileNavbarBack"
                  onClick={() => handleToggleView("main")}
                >
                  <ChevronLeft color="black" />
                </Button>
              </div>
              <div className="px-10">
                <h1 className="text-[22px] leading-8 font-semibold">
                  Biz Kimiz?
                </h1>
                <Separator className="my-2 bg-gray-200" />
                <div className="space-y-7 flex flex-col mt-8 mb-10">
                  <Link href="#">Neden Beije?</Link>
                  <Link href="#">beije Nasıl Çalışır? </Link>
                  <Link href="#">Fiyat Politikası</Link>
                  <Link href="#">Sıkça Sorulan Sorular</Link>
                  <Link href="#">Tüm Malzemeler</Link>
                </div>
              </div>
            </div>
          ) : view === "donationCulture1" ? (
            <div className="mb-10 relative">
              <div className="flex items-center absolute -top-1 -left-2">
                <Button
                  variant="mobileNavbarBack"
                  onClick={() => handleToggleView("main")}
                >
                  <ChevronLeft color="black" />
                </Button>
              </div>
              <div className="px-10">
                <h1 className="text-[22px] leading-8 font-semibold">
                  Bağış Kültürü
                </h1>
                <Separator className="my-2 bg-gray-200" />
                <div className="space-y-7 flex flex-col mt-8 mb-10">
                  <Link href="#">Felsefemiz</Link>
                  <Link href="#">Askıda Ped</Link>
                  <Link href="#">Bağış</Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-10 relative">
              <div className="flex items-center absolute -top-1 -left-2">
                <Button
                  variant="mobileNavbarBack"
                  onClick={() => handleToggleView("main")}
                >
                  <ChevronLeft color="black" />
                </Button>
              </div>
              <div className="px-10">
                <h1 className="text-[22px] leading-8 font-semibold">Ürünler</h1>
                <div className=" space-y-9">
                  <Separator className="my-2 bg-gray-200" />
                  <div className="flex gap-4">
                    <Image src={padIcon} alt="padIcon" width={20} />
                    <h1>beije Ped</h1>
                  </div>
                  <div className="flex gap-4">
                    <Image src={dailyPadIcon} alt="dailyPadIcon" width={20} />
                    <h1>beije Günlük Ped</h1>
                  </div>
                  <div className="flex gap-4">
                    <Image src={tamponIcon} alt="tamponIcon" width={20} />
                    <h1>beije Tampon</h1>
                  </div>
                  <div className="flex gap-4">
                    <Image src={cupIcon} alt="cupIcon" width={20} />
                    <h1>beije Kap</h1>
                  </div>
                  <div className="flex gap-4">
                    <Image
                      src={heatingPatchIcon}
                      alt="heatingPatchIcon"
                      width={20}
                    />
                    <h1>ısı Bandı</h1>
                  </div>
                </div>
                <Separator className="my-2 bg-gray-200" />
              </div>
              <div className="px-10 my-10">
                <div className="flex w-full justify-between items-center">
                  <h1 className="text-[22px] leading-8 font-semibold">
                    Paketler
                  </h1>
                  <Link
                    href="#"
                    className="font-semibold flex gap-2 items-center"
                  >
                    Tüm Paketler
                    <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="space-y-9 mt-10">
                  <div className="flex gap-4">
                    <Image src={padIcon} alt="padIcon" width={20} />
                    <h1>beije Ped</h1>
                  </div>
                  <div className="flex gap-4">
                    <Image src={dailyPadIcon} alt="dailyPadIcon" width={20} />
                    <h1>beije Günlük Ped</h1>
                  </div>
                  <div className="flex gap-4">
                    <Image src={tamponIcon} alt="tamponIcon" width={20} />
                    <h1>beije Tampon</h1>
                  </div>
                  <div className="flex gap-4">
                    <Image src={cupIcon} alt="cupIcon" width={20} />
                    <h1>beije Kap</h1>
                  </div>
                  <div className="flex gap-4">
                    <Image
                      src={heatingPatchIcon}
                      alt="heatingPatchIcon"
                      width={20}
                    />
                    <h1>ısı Bandı</h1>
                  </div>
                </div>
                <Separator className="my-2 bg-gray-200" />
                <div className="mt-5 mb-20 flex gap-4">
                  <Image src={customIcon} alt="customIcon" width={20} />
                  <h1 className="font-semibold text-sm">
                    Kendi Paketini Oluştur
                  </h1>
                </div>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MobileNavbar;