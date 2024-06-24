import { americanExpressCard, masterCard, troyCard, visaCard } from "@/images";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="w-full bg-[#262626] flex flex-col btwMdLg:mb-0 mb-20 btwMdLg:grid btwMdLg:grid-cols-12 px-10 btwMdLg:px-[144px] py-[60px] overflow-x-hidden">
      <div className="col-start-1 col-end-5  flex flex-col gap-5  text-[#FFFFFFB2] btwMdLg:col-span-5 md:col-span-3">
        <h1 className="text-white  text-center text-2xl btwMdLg:text-2xl btwMdLg:text-start">
          beije.
        </h1>
        <div className="text-lg text-center btwMdLg:text-start btwMdLg:w-[90%] w-full">
          <h2 className="font-semibold text-xl">Arayı açmayalım!</h2>
          <p className="text-[18px] tracking-tighter leading-6	">
            beije’deki yeni ürün ve gelişmeleri sana haber verelim & aylık
            e-gazetemiz döngü’ye abone ol!
          </p>
        </div>
        <div className="flex gap-2 btwMdLg:flex-row flex-col">
          <div className="user-input-wrp w-full btwMdLg:w-[60%] ">
            <br />
            <input
              type="text"
              className="inputText -z-10"
              required
              placeholder="halide.edip@adivar.com"
            />
            <span className="floating-label">e-mail adresin</span>
          </div>

          <Button className="w-full btwMdLg:w-fit btwMdLg:self-end font-bold mt-2 btwMdLg:mt-0  bg-gray-200 transition text-[#262626] hover:text-black duration-150 ease-in-out px-4 py-6 hover:shadow-black	 rounded-full text-lg hover:bg-[#262626]  hover:shadow-sm">
            Gönder
          </Button>
        </div>
        <p className="text-[15px] font-semibold text-center btwMdLg:text-start w-full btwMdLg:w-[90%]">
          Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve
          beije'den haber almayı onaylıyorum.
        </p>
      </div>

      {/* This Part */}
      <div className="col-span-7  mt-10 btwMdLg:mt-0 flex justify-center btwMdLg:gap-0 gap-20 btwMdLg:justify-between  p-5 lg:text-md xl:text-lg text-white">
        <div className="flex flex-col btwMdLg:text-md lg:text-lg items-center btwMdLg:items-start text-center btwMdLg:text-start gap-5">
          <Link href="/">beije Ped</Link>
          <Link href="/">beije Günlük Ped</Link>
          <Link href="/">beije Tampon</Link>
          <Link href="/">beije Store</Link>
        </div>
        <div className="flex flex-col btwMdLg:text-md lg:text-lg items-center btwMdLg:items-start text-center btwMdLg:text-start gap-5">
          <Link href="/">Blog</Link>
          <Link href="/">Sıkça Sorulan Sorular</Link>
          <Link href="/">Biz Kimiz?</Link>
          <Link href="/">Quiz</Link>
        </div>
        <div className="btwMdLg:flex hidden flex-col gap-5 btwMdLg:text-lg lg:text-xl">
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
      <div className="flex btwMdLg:hidden justify-around btwMdLg:justify-between w-full my-10">
        <FaFacebookF color="rgb(229, 231, 235)" size={20} />
        <FaInstagram color="rgb(229, 231, 235)" size={20} />
        <FaTwitter color="rgb(229, 231, 235)" size={20} />
        <FaLinkedin color="rgb(229, 231, 235)" size={20} />
        <FaSpotify color="rgb(229, 231, 235)" size={20} />
      </div>
      <Separator className="bg-[#FFFFFF7F] h-[1px] col-span-12 mt-20" />
      <div className="mt-10 col-span-12 flex  btwMdLg:flex-row flex-col items-center justify-between w-full text-[#FFFFFF7F] ">
        <h1 className="font-semibold tracking-tight">
          2024 beije. Tüm hakları saklıdır.
        </h1>
        <div className="flex gap-4 btwMdLg:flex-row flex-col btwMdLg:text-start text-center btwMdLg:mt-0 mt-5">
          <Link href="/">KVKK</Link>
          <Link href="/">KVKK Başvuru Formu</Link>
          <Link href="/">Üyelik Sözleşmesi</Link>
          <Link href="/">Gizlilik Politikası</Link>
          <Link href="/">Çerez Politikası</Link>
          <Link href="/">Test Sonuçları</Link>
        </div>
        <div className="flex gap-1 items-center btwMdLg:mt-0 mt-5">
          <Button className="bg-transparent  hover:bg-transparent text-md">
            EN
          </Button>
          <div className="h-[15px] bg-[#FFFFFF7F] w-[2px]" />
          <Button className="bg-transparent hover:bg-transparent text-md">
            TR
          </Button>
        </div>
      </div>
      <div className="mt-12 col-span-12 flex gap-3 w-full items-center justify-center">
        <Image src={troyCard} alt="troyCard" />
        <Image src={masterCard} alt="masterCard" />
        <Image src={visaCard} alt="visaCard" />
        <Image src={americanExpressCard} alt="americanExpressCard" />
      </div>
    </div>
  );
};

export default Footer;
