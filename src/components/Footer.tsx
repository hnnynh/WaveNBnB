"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col relative">
      <div className="absolute left-[7%] right-[12%] border-t border-gray-200 shadow-md"></div>
      <a
        href={`tel:${process.env.NEXT_PUBLIC_FOOTER_PHONE}`}
        className="absolute left-[10%] right-[10%] m-5 mr-8 ml-0"
      >
        <Image src="/footer.gif" alt="파도와민박" width={572} height={32} />
      </a>
    </footer>
  );
}
