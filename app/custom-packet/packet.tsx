import AddToBasket from "@/components/addToBasket";
import PackageDisplay from "@/components/packetDisplay";
import { packet } from "@/images";
import store, { RootState } from "@/store/store";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";

const CustomPacket = () => {
  const beijePedState = useSelector(
    (state: RootState) => state.beijePed.beije_ped
  );
  const beijeDailyPedState = useSelector(
    (state: RootState) => state.beijeDailyPed.beije_daily_ped
  );
  const beijeTamponState = useSelector(
    (state: RootState) => state.beijeTampon.beije_tampon
  );

  const state = store.getState();

  return (
    <div className="ml-20 bg-white rounded-[15px] h-fit max-h-fit shadow w-full btwMdLg:flex hidden">
      <div className="p-10 flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">Özel Paketin</h1>
        <div className="w-full shadow-md p-3 rounded-[8px] flex gap-2 items-center">
          <RefreshCcw color="gray" size={16} />
          <h1>2 ayda 1 gönderim</h1>
        </div>
        <Image src={packet} alt="packet" />
        <PackageDisplay
          title="Ped Paketleri"
          packages={[
            { count: beijePedState.standart_ped, label: "Standart Ped" },
            { count: beijePedState.super_ped, label: "Süper Ped" },
            { count: beijePedState.super_plus_ped, label: "Süper+ Ped" },
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
            { count: beijeTamponState.mini_tampon, label: "Mini Tampon" },
            {
              count: beijeTamponState.standart_tampon,
              label: "Standart Tampon",
            },
            { count: beijeTamponState.super_tampon, label: "Süper Tampon" },
          ]}
        />
        <AddToBasket  />
      </div>
    </div>
  );
};

export default CustomPacket;
