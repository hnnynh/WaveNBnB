import Image from "next/image";

export default function Direction() {
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
            <div className="flex justify-center md:w-[90%] w-full p-3">
              <Image
                src="/sub1_2.jpg"
                alt="오시는 길"
                width={720}
                height={1151}
              />
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
