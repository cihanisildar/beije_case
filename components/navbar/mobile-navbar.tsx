"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Menu } from "lucide-react";
import { useState } from "react";

const MobileNavbar = () => {
  const [isFirstView, setIsFirstView] = useState(true);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleToggleView = () => {
    setIsFirstView(!isFirstView);
  };

  return (
    <div className="btwMdLg:hidden block ">
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger>
          <Menu onClick={() => setIsPopoverOpen(true)} />
        </PopoverTrigger>
        <PopoverContent className="bg-[#F5F5F5] w-screen border-none mt-4">
          {isFirstView ? (
            <div>
              <button onClick={handleToggleView}>Ürünler</button>
            </div>
          ) : (
            <div>
              <button onClick={handleToggleView}>Back</button>
              <PopoverClose onClick={() => setIsPopoverOpen(false)}>
                Close
              </PopoverClose>
              <p>Another Content</p>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MobileNavbar;
