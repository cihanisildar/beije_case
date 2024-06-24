import { Button } from "@/components/ui/button";
import { resetDailyPed } from "@/store/beije-daily-ped-store";
import { resetPed } from "@/store/beije-ped-store";
import { resetTamponPed } from "@/store/beije-tampon-store";
import store from "@/store/store";
import { calculateAndUpdateTotalPrice } from "@/store/total-basket-store";
import { Trash2 } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

interface Package {
  count: number;
  label: string;
}

interface PackageDisplayProps {
  title: string;
  packages: Package[];
}

const PackageDisplay: React.FC<PackageDisplayProps> = ({ title, packages }) => {
  const dispatch = useDispatch();

  if (packages.every((pkg) => pkg.count === 0)) {
    return null;
  }

  const packageText = packages
    .filter((pkg) => pkg.count !== 0)
    .map((pkg) => `${pkg.count} ${pkg.label}`)
    .join(" ve ");

  const deleteThePacket = (title: string) => {
    console.log(title);
    if (title === "Ped Paketleri") {
      dispatch(resetPed());
    }

    if (title === "Günlük Ped Paketleri") {
      dispatch(resetDailyPed());
    }

    if (title === "Tampon Paketleri") {
      dispatch(resetTamponPed());
    }

    const state = store.getState();
    dispatch(calculateAndUpdateTotalPrice(state));
  };

  return (
    <div>
      {/* Desktop */}
      <div className="w-full p-5 shadow-md rounded-[8px] btwMdLg:flex hidden flex-col gap-2">
        <h1 className="text-xl font-semibold">{title}</h1>
        <h2 className="text-md text-[#00000099]">{packageText}</h2>
        <Button
          className="w-fit rounded-full hover:bg-slate-100"
          onClick={() => deleteThePacket(title)}
        >
          Paketten Çıkar
        </Button>
      </div>

      {/* Mobile */}
      <div className="w-full bg-transparent p-5 rounded-[8px] btwMdLg:hidden flex items-center justify-between gap-2 border-b-[1px] border-[#b8b8b88a]">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <h2 className="text-md text-[#00000099]">{packageText}</h2>
        </div>

        <Button
          className="w-fit rounded-full hover:bg-slate-100"
          onClick={() => deleteThePacket(title)}
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  );
};

export default PackageDisplay;
