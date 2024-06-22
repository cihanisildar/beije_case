import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import "./footer.scss";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import Image from "next/image";
import { americanExpressCard, masterCard, troyCard, visaCard } from "@/images";

const Footer = () => {
  return (
    <div
      style={{ height: "calc(100vh - 180px)" }}
      className="bg-[#262626] px-[144px] py-[40px] -z-10 w-screen"
    >
      <div className="w-full grid grid-cols-12">
        <div className="col-span-5 flex flex-col gap-5 text-[#FFFFFFB2]">
          <h1 className="text-white text-2xl">beije.</h1>
          <div className="text-lg">
            <h2 className="font-semibold">Arayı açmayalım!</h2>
            <p className="text-[15px] leading-6	">
              beije’deki yeni ürün ve gelişmeleri sana haber verelim & aylık
              e-gazetemiz döngü’ye abone ol!
            </p>
          </div>
          <div className="flex gap-2 ">
            <div className="user-input-wrp w-[80%]">
              <br />
              <input
                type="text"
                className="inputText -z-10"
                required
                placeholder="halide.edip@adivar.com"
              />
              <span className="floating-label">e-mail adresin</span>
            </div>

            <Button className="bg-gray-200 transition text-[#262626] hover:text-black duration-150 ease-in-out px-4 py-6 hover:shadow-black	 rounded-full self-end text-lg hover:bg-[#262626]  hover:shadow-sm">
              Gönder
            </Button>
          </div>
          <p className="text-[12px] font-normal">
            Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve
            beije'den haber almayı onaylıyorum.
          </p>
        </div>

        <div className="col-start-7 col-end-12 flex justify-between p-5 text-lg text-white">
          <div className="flex flex-col gap-5">
            <Link href="/">beije Ped</Link>
            <Link href="/">beije Günlük Ped</Link>
            <Link href="/">beije Tampon</Link>
            <Link href="/">beije Store</Link>
          </div>
          <div className="flex flex-col gap-5">
            <Link href="/">Blog</Link>
            <Link href="/">Sıkça Sorulan Sorular</Link>
            <Link href="/">Biz Kimiz?</Link>
            <Link href="/">Quiz</Link>
          </div>
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <FaFacebookF color="gray" />
              Facebook
            </Link>
            <Link href="/" className="flex items-center gap-3">
              <FaInstagram color="gray" />
              Instagram
            </Link>
            <Link href="/" className="flex items-center gap-3">
              <FaTwitter color="gray" />
              Twitter
            </Link>
            <Link href="/" className="flex items-center gap-3">
              <FaLinkedin color="gray" />
              Linkedin
            </Link>
            <Link href="/" className="flex items-center gap-3">
              <FaSpotify color="gray" />
              Spotify
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-gray-500 mt-20" />

      <div className="mt-10 flex items-center justify-between w-full text-[#FFFFFF7F] ">
        <h1 className="font-semibold tracking-tight">
          2024 beije. Tüm hakları saklıdır.
        </h1>
        <div className="flex gap-4">
          <Link href="/">KVKK</Link>
          <Link href="/">KVKK Başvuru Formu</Link>
          <Link href="/">Üyelik Sözleşmesi</Link>
          <Link href="/">Gizlilik Politikası</Link>
          <Link href="/">Çerez Politikası</Link>
          <Link href="/">Test Sonuçları</Link>
        </div>
        <div className="flex gap-1 items-center">
          <Button className=" text-md">EN</Button>
          <div className="h-[15px] bg-[#FFFFFF7F] w-[2px]" />
          <Button className=" text-md">TR</Button>
        </div>
      </div>
      <div className="mt-12 flex gap-3 w-full items-center justify-center">
        <Image src={troyCard} alt="troyCard" />
        <Image src={masterCard} alt="masterCard" />
        <Image src={visaCard} alt="visaCard" />
        <Image src={americanExpressCard} alt="americanExpressCard" />
      </div>
    </div>
  );
};

export default Footer;
