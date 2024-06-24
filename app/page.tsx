import Link from "next/link";
import { ChevronRightIcon, ChevronDownIcon } from "lucide-react";
export default function Home() {
  return (
    <main>
      <div className="w-full h-screen flex items-center justify-center flex-col gap-8">
        <h1>Home Page</h1>
        <div className="btwMdLg:flex hidden gap-10 ">
          <p className="max-w-[200px] text-center">
            You can go to custom packet page from here or from navbar.
          </p>
          <ChevronRightIcon className="h-full" />

          <Link
            href="/custom-packet"
            className=" flex items-center justify-center bg-[#DAA06D]	px-5 rounded-[8px] text-white hover:bg-[#DAA06D]/90 transition duration-150"
          >
            Custom packet page
          </Link>
        </div>
        <div className="flex btwMdLg:hidden gap-10 flex-col">
          <p className="max-w-[200px] text-center">
            You can go to custom packet page from here or from navbar.
          </p>
          <div className="w-full flex items-center justify-center">
            <ChevronDownIcon className="h-full" />
          </div>

          <Link
            href="/custom-packet"
            className=" flex items-center py-3 justify-center bg-[#DAA06D]	px-5 rounded-[8px] text-white hover:bg-[#DAA06D]/90 transition duration-150"
          >
            Custom packet page
          </Link>
        </div>
      </div>
    </main>
  );
}
