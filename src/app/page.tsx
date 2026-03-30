import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="flex min-h-[84.0347px] items-center justify-center bg-[#000D9ACC] font-sans dark:bg-black">
      <div className="">
        <Image src="/images/hero.png" alt="hero" width={100} height={100} />
      </div>
      <div className=""></div>
    </div>
  );
}

export default page;
