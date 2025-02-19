"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const [onToggle, setOnToggle] = useState<boolean>(false);

  const handleToggle = () => {
    if (onToggle) toggleRef.current?.classList.add("hidden");
    else toggleRef.current?.classList.remove("hidden");
    setOnToggle((prev) => !prev);
  };

  const hideToggle = () => {
    if (onToggle) toggleRef.current?.classList.add("hidden");
    setOnToggle((prev) => false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        hideToggle();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <Head>
        <title>파도와 민박</title>
      </Head>
      <header
        ref={headerRef}
        className="relative top-8 bottom-right-0 w-full z-10 h-20 transition duration-500 bg-white"
      >
        <div className="absolute bottom-0 left-[5%] right-[5%] border-b-2 border-blue-800 shadow-[0_4px_8px_rgba(0,0,0,0.2)]"></div>
        <div
          ref={toggleRef}
          className="w-full h-[85vh] absolute top-20 left-0 bg-white flex-col flex-nowrap p-5 flex hidden text-black"
        >
          <Nav type="toggle" onClick={handleToggle} />
        </div>
        <div className="text-black max-w-screen-md h-20 flex flex-nowrap items-center m-auto justify-between px-10">
          <Link href="/" className="absolute left-[10%] flex-shrink-0 pb-2">
            <Image
              src="/logo.png"
              alt="파도와민박"
              width={145}
              height={33}
              onClick={hideToggle}
            />
          </Link>
          <div className="flex flex-nowrap gap-8 items-center justify-between absolute right-[10%] flex-shrink-0">
            <button
              type="button"
              className="m-0 p-0 sm:hidden"
              onClick={handleToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-7 h-7 transition duration-500 stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            <div className="flex-nowrap items-center justify-center gap-10 text-center right-[20%] hidden sm:flex">
              <Nav type="normal" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
