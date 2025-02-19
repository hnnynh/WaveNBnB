"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-black m-1">
      <Image src="/main_home.jpg" alt="파도와민박" width={1380} height={454} />

      <div className="flex flex-col md:flex-row gap-5 justify-center">
        <div className="flex flex-col gap-2">
          <p className="m-2 mt-0 mb-0 text-xs md:text-start pb-2 border-b border-gray-200">
            친절 예약
          </p>

          <div className="flex justify-start justify-center w-full">
            <Image src="/home_cc.gif" alt="전화번호" width={228} height={66} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="m-2 mt-0 mb-0 text-xs md:text-start pb-2 border-b border-gray-200">
            바로가기
          </p>
          <div className="flex justify-center w-full gap-1">
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
        <div className="grid grid-row-4 sm:grid-cols-2 gap-2 p-3 sm:pt-0 items-center justify-center">
          <a
            href="https://www.weather.go.kr/w/index.do#dong/5182033000/38.2768350126307/128.553373007462/%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EA%B3%A0%EC%84%B1%EA%B5%B0%20%ED%86%A0%EC%84%B1%EB%A9%B4/SCH/%EC%95%84%EC%95%BC%EC%A7%84%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/main_sp_01.gif" alt="기상청" width={200} height={51} />
          </a>
          <a
            href="https://seorak.knps.or.kr/front/portal/visit/visitCourseMain.do?parkId=120400&menuNo=7020093"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/main_sp_02.gif"
              alt="설악산 국립공원"
              width={200}
              height={51}
            />
          </a>
          <a
            href="http://www.tongiltour.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/main_sp_03.gif"
              alt="통일전망대"
              width={200}
              height={51}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
