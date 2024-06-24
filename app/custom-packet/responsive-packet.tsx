import AddToBasket from "@/components/addToBasket";
import PackageDisplay from "@/components/packetDisplay";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import store, { RootState } from "@/store/store";
import { ChevronDown, ChevronUp, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { useSelector } from "react-redux";

const ResponsiveCustomPacket = () => {
  const state = store.getState();

  const beijePedState = useSelector(
    (state: RootState) => state.beijePed.beije_ped
  );
  const beijeDailyPedState = useSelector(
    (state: RootState) => state.beijeDailyPed.beije_daily_ped
  );
  const beijeTamponState = useSelector(
    (state: RootState) => state.beijeTampon.beije_tampon
  );

  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = (e: any) => {
    e.stopPropagation();
    setPopoverOpen(!popoverOpen);
  };

  const closePopover = (e: any) => {
    e.stopPropagation();
    if (popoverOpen) {
      setPopoverOpen(false);
    }
  };

  return (
    <div
      className={cn(
        "btwMdLg:hidden flex fixed bottom-0 px-5 bg-[#F7F6F5] text-black w-full flex-col items-center justify-center shadow-xl shadow-top z-50",
        state.totalPrice.price !== 0 ? "h-[15%] pb-2" : "h-[10%] "
      )}
      onClick={closePopover}
    >
      {state.totalPrice.price !== 0 && (
        <div className="flex justify-between px-4 py-2 items-center w-full text-[#0000008A]">
          <div className="flex items-center gap-3">
            <h1>Toplam</h1>
            <Popover open={popoverOpen}>
              <PopoverTrigger onClick={togglePopover}>
                {popoverOpen ? <ChevronDown /> : <ChevronUp />}
              </PopoverTrigger>
              <PopoverContent
                className="w-screen min-h-[10%] bg-[#F7F6F5] z-[60] border-none flex flex-col gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full shadow-md p-3 rounded-[8px] flex gap-2 items-center">
                  <RefreshCcw color="gray" size={16} />
                  <h1>2 ayda 1 gönderim</h1>
                </div>
                <PackageDisplay
                  title="Ped Paketleri"
                  packages={[
                    {
                      count: beijePedState.standart_ped,
                      label: "Standart Ped",
                    },
                    { count: beijePedState.super_ped, label: "Süper Ped" },
                    {
                      count: beijePedState.super_plus_ped,
                      label: "Süper+ Ped",
                    },
                  ]}
                />
                <PackageDisplay
                  title="Günlük Ped Paketleri"
                  packages={[
                    {
                      count: beijeDailyPedState.daily_ped,
                      label: "Standart Günlük Ped",
                    },
                    {
                      count: beijeDailyPedState.super_daily_ped,
                      label: "Süper Günlük Ped",
                    },
                  ]}
                />
                <PackageDisplay
                  title="Tampon Paketleri"
                  packages={[
                    {
                      count: beijeTamponState.mini_tampon,
                      label: "Mini Tampon",
                    },
                    {
                      count: beijeTamponState.standart_tampon,
                      label: "Standart Tampon",
                    },
                    {
                      count: beijeTamponState.super_tampon,
                      label: "Süper Tampon",
                    },
                  ]}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center font-semibold text-lg">
            <FaTurkishLiraSign size={14} />
            {state.totalPrice.price}
          </div>
        </div>
      )}
      <AddToBasket />
    </div>
  );
};

export default ResponsiveCustomPacket;
