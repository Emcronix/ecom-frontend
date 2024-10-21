
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TopHeader = () => {
  const router = useRouter();
  return (
    <div className="hidden md:block">
      <div
        className={`bg-black text-white top-0 fixed h-[35px] z-[9998] w-full flex items-center justify-between px-5`}
      >
        <div className="">
          <Link className="pr-[20px] text-sm underline underline-offset-4" href="#">For you</Link>
          <Link className="text-sm" href="/business-to-business">For business</Link>
        </div>
        <div className="flex items-center">
          <div className="flex flex-row items-center gap-2  text-white  text-[12px]">
            <Link href="/virtualexperience" className="flex gap-[5px] items-center">
              <Image loading="lazy" src={"/icons/liveshopping.svg"} width={22} height={22} className="w-[17px] mt-[2px] h-[17px] bg-white" alt="liveshopping" />
              <p>Live Shopping</p>
            </Link>
            <span className="">|</span>

            <div>
              <Link href="/customerservice">Help</Link>
            </div>
            <span className="">|</span>
            <div>
              <Link href="/ayatrio-map">Near Area</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
