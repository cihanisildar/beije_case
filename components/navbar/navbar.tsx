import React from "react";
import { User, ShoppingCart } from "lucide-react";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  return (
    <nav className="btwMdLg:w-screen w-screen h-[80px] bg-[#F5F5F5] fixed top-0 z-50">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between p-4">
        <div className="flex items-center">
          <h1 className="text-[#CF772F] text-2xl ">beije.</h1>
        </div>
        <div className="btwMdLg:block hidden">
          <div className="flex gap-10 tracking-[-0.01em] text-[1.10rem]  leading-7">
            <div className="cursor-pointer">
              {" "}
              <span className="border-b-[1px] border-[#F5F5F5] hover:border-black ease-in duration-150">
                Ürünler
              </span>
            </div>
            <div className="cursor-pointer">
              {" "}
              <span className="border-b-[1px] border-[#F5F5F5] hover:border-black ease-in duration-150">
                Biz Kimiz?
              </span>
            </div>
            <div className="cursor-pointer">
              <span className="border-b-[1px] border-[#F5F5F5] hover:border-black ease-in duration-150">
                Bağış Kültürü
              </span>
            </div>
            <div className="cursor-pointer">
              <span className="border-b-[1px] border-[#F5F5F5] hover:border-black ease-in duration-150">
                Regl Testi!
              </span>
            </div>
            <div className="cursor-pointer">
              <span className="border-b-[1px] border-[#F5F5F5] hover:border-black ease-in duration-150">
                Kendi Paketini Oluştur
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <ShoppingCart />
          <User />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
