"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { roomText, roomImages } from "./data";

export default function Room() {
  const rooms = ["파도", "섬", "바다", "돌섬", "고래"];
  const [showRoom, setShowRoom] = useState("전경");
  const imageSrc = `/${showRoom}.jpg`;

  const currentRoomSize = roomImages[showRoom];
  const currentRoomDesc = roomText[showRoom].desc;

  useEffect(() => {}, [showRoom]);

  return (
    <div className="flex text-black justify-center w-full">
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <div className="relative w-full flex justify-center">
          <Image
            src="/sub_image.jpg"
            alt="표지"
            layout="intrinsic"
            width={1380}
            height={157}
            className="object-cover"
          />
        </div>
        <div className="flex text-black justify-center items-center">
          <div className="flex flex-col md:flex-row items-start justify-center flex-1 w-full">
            <div className="flex flex-col justify-center md:w-[90%] w-full p-3">
              <div className="flex flex-row items-center justify-center gap-5 md:gap-10 text-xl pt-7 pb-7">
                {rooms.map((room, index) => (
                  <button
                    key={index}
                    onClick={() => setShowRoom(room)}
                    className={`text-center transition duration-250 
              ${showRoom === room ? "text-blue-500" : "text-gray-400"}
              hover:scale-110 hover:text-blue-500`}
                  >
                    {room}
                  </button>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={imageSrc}
                  alt={showRoom}
                  width={currentRoomSize.width}
                  height={currentRoomSize.height}
                />
              </div>
              <p className="whitespace-pre-line text-gray-400 text-center m-2 sm:text-sm text-xs">
                {currentRoomDesc}
              </p>
            </div>

            <div className="flex flex-row md:flex-col md:w-1/6 w-full md:text-left gap-4 md:items-start justify-center items-center md:mt-10 mb-3">
              <div className="flex flex-col gap-2 items-center md:items-start">
                <p className="text-xs">친절 예약</p>

                <div className="flex justify-center md:justify-start w-full">
                  <Image
                    src="/home_cc.gif"
                    alt="전화번호"
                    width={228}
                    height={66}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-1">
                <a href="/direction" rel="noopener noreferrer">
                  <Image
                    src="/main_nav_intro.gif"
                    alt="오시는길"
                    width={59}
                    height={61}
                  />
                </a>
                <a href="/room" rel="noopener noreferrer">
                  <Image
                    src="/main_nav_room.gif"
                    alt="객실보기"
                    width={59}
                    height={61}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
