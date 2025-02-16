"use client";

import Link from "next/link";

interface NavProps {
  type: "toggle" | "normal";
  onClick?: () => void;
}

const navlinks: { title: string; link: string }[] = [
  { title: "소개 및 오시는 길", link: "/intro" },
  { title: "객실 보기", link: "/room" },
  { title: "주변 관광지", link: "/nearby" },
];

export default function Nav({ type, onClick }: NavProps) {
  const defaultStyleString =
    "text-center transition duration-250 hover:scale-120 hover:text-blue-500";
  const toggleStyleString = "text-lg py-4";

  return (
    <>
      {navlinks.map((item) => {
        const { title, link } = item;
        return (
          <Link
            href={link}
            key={title}
            className={
              type === "normal"
                ? defaultStyleString
                : `${defaultStyleString} ${toggleStyleString}`
            }
            onClick={
              onClick
                ? onClick
                : () => {
                    return;
                  }
            }
          >
            {title}
          </Link>
        );
      })}
    </>
  );
}
