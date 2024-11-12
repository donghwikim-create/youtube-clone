import React from "react";
import sseomneil1 from "../images/sseomneil1.jpg";
// import sseomneil2 from "../images/sseomneil2.jpg";
// import sseomneil3 from "../images/sseomneil3.jpg";
import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.jpg";
import profile3 from "../images/profile3.jpg";
import categoryImage1 from "../images/categoryImage1.jpg";

import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ShareIcon,
  BookmarkIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline"; // 외곽 밖이 적용
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid"; // 내각 text 색깔 입히면 안에가 적용

function VidioWatch() {
  // const videoItems = [
  //     {
  //       Thumbnail: sseomneil1,
  //       profile: profile1,
  //       title: "초보자를 위한 ___ 완벽 가이드! [2024 최신판]",
  //       Publisher: "일상로그 ",
  //       publishDate: "3개월", // 게시일
  //       viewCount: "3.5만", // 조회수
  //       videoDescription:
  //         "이 튜토리얼에서는 리액트의 기본부터 환경 설정, 첫 번째 컴포넌트를 만드는 방법까지 다룹니다. 리액트를 처음 접하거나 복습이 필요한 분들에게 적합한 튜토리얼입니다.",
  //     },
  //     {
  //       Thumbnail: sseomneil2,
  //       profile: profile2,
  //       title: "내가 직접 해봤다! ___ VS ___, 무엇이 더 좋을까?",
  //       Publisher: "웃음공작소",
  //       publishDate: "3일전", // 게시일
  //       viewCount: "12만", // 조회수
  //       videoDescription:
  //         "자바스크립트 ES6에서 새롭게 추가된 기능들에 대해 알아보세요. 화살표 함수, 클래스, 프로미스 등 다양한 기능을 배울 수 있습니다. 이 영상을 통해 자바스크립트 코딩 능력을 향상시킬 수 있습니다.",
  //     },
  //     {
  //       Thumbnail: sseomneil3,
  //       profile: profile3,
  //       title: "2024년 ___ 트렌드, 이것만 알면 끝!",
  //       Publisher: "리뷰의 정석",
  //       publishDate: "5년전", // 게시일
  //       viewCount: "120만", // 조회수
  //       videoDescription:
  //         "이 크래시 코스에서는 CSS Flexbox에 대해 배웁니다. 기본 개념부터 고급 레이아웃까지 다루며, 이 영상을 통해 반응형 레이아웃을 쉽게 디자인할 수 있게 될 것입니다.",
  //     },
  //   ];

  return (
    <>
    <div className="flex">
      <div className="ml-6 pt-6 pr-6 max-w-[900px]">
        <video
          src="path/to/video.mp4"
          controls
          className="w-full max-w-[800px] rounded-lg shadow-lg object-cover bg-white"
        ></video>
        <div className="mt-3 font-bold text-xl">
          초보자를 위한 ___ 완벽 가이드! [2024 최신판]
        </div>
        <div className="flex mt-3 items-center">
          <a href="#">
            <img
              src={profile1}
              className="mr-3 w-10 h-10 flex items-center justify-center rounded-full transition duration-200 hover:bg-gray-300"
            />
          </a>
          <div className="mr-6">
            <a href="#" className="font-semibold">
              리뷰의 정석
            </a>
            <div>구독자 3.25만</div>
          </div>
          <button class="mr-3 px-4 py-2 bg-gray-100 text-black font-light rounded-3xl hover:bg-gray-300 focus:outline-none">
            가입
          </button>
          <button class="mr-10 px-4 py-2 bg-black text-white font-light rounded-3xl hover:bg-gray-800 focus:outline-none">
            구독
          </button>
          <button class="px-4 py-2 bg-gray-100 text-white font-light rounded-l-full hover:bg-gray-300 focus:outline-none">
            <div className="flex items-center">
              <HandThumbUpIcon className="mr-2 h-6 w-6 text-black" />
              <span className="text-black font-medium">183</span>
            </div>
          </button>
          <button class="mr-4 px-4 py-2 bg-gray-100 text-black font-light rounded-r-full hover:bg-gray-300 focus:outline-none">
            <HandThumbDownIcon className="mr-2 h-6 w-6 text-black" />
          </button>
          <button class="mr-4 px-4 py-2 bg-gray-100 text-black font-light rounded-full hover:bg-gray-300 focus:outline-none">
            <div className="flex items-center">
              <ShareIcon className="mr-2 h-6 w-6 text-black" />
              <span className="font-medium">공유</span>
            </div>
          </button>
          <button class="mr-4 px-4 py-2 bg-gray-100 text-black font-light rounded-full hover:bg-gray-300 focus:outline-none">
            <div className="flex items-center">
              <BookmarkIcon className="mr-2 h-6 w-6 text-black" />
              <span className="font-medium">저장</span>
            </div>
          </button>
          <button class="px-4 py-2 bg-gray-100 text-white font-light rounded-full hover:bg-gray-300 focus:outline-none">
            <EllipsisHorizontalIcon className="h-6 w-6 text-black" />
          </button>
        </div>
        <div className="mt-3 p-3 bg-gray-100 ">
          <span className="mr-2 text-black font-semibold">조회수 23,366회</span>
          <span className="mr-2 text-black font-semibold">2024.10.28.</span>
          <a href="#" className="mr-2 text-blue-500">
            #튜토리얼
          </a>
          <a href="#" className="mr-2 text-blue-500">
            #브이로그
          </a>
          <a href="#" className="text-blue-500">
            #기술리뷰
          </a>
          <div>
            <a href="#" className="mr-2 text-blue-500">
              #튜토리얼
            </a>
            <a href="#" className="mr-2 text-blue-500">
              #브이로그
            </a>
            <a href="#" className="text-blue-500">
              #기술리뷰
            </a>
          </div>
          <div>강좌 익히기</div>
          <div>...더보기</div>
        </div>
        <div className="mt-3">
          <div className="flex">
            <span className="mr-6 text-xl font-bold">댓글 118개</span>
            <Bars3BottomRightIcon className="mr-3 w-6 h-6 text-gray-700 hover:text-blue-500" />
            <span>정렬 기준</span>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={profile2}
            className="mt-3 mr-3 w-10 h-10 rounded-full transition duration-200 hover:bg-gray-300"
            alt="프로필 사진"
          />
          <div className="text-gray-500 border-b border-gray-300 pb-2">
            댓글추가
          </div>
        </div>
        <div className="flex items-center">
          <a href="example.com">
            <img
              src={profile3}
              className="mt-6 mr-3 w-10 h-10 rounded-full transition duration-200 hover:bg-gray-300"
              alt="프로필 사진"
            />
          </a>
          <div className="mt-6">
            <a href="example.com" className="mr-1">
              <span>@태크 스포트라이트</span>
            </a>
            <a href="" className="">
              4년 전
            </a>
            <div className="mb-2">
              와, 영상 퀄리티 대박이에요! 덕분에 많이 배웠어요.
            </div>
            <div className="flex">
              <HandThumbUpIcon className="mr-2 h-6 w-6 text-black" />
              <span className="mr-2">12</span>
              <HandThumbDownIcon className="h-6 w-6 text-black" />
              <div className="flex justify-center hover:bg-gray-300 rounded-lg w-20 h-7">
                답글
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <a href="example.com">
            <img
              src={profile3}
              className="mt-6 mr-3 w-10 h-10 rounded-full transition duration-200 hover:bg-gray-300"
              alt="프로필 사진"
            />
          </a>
          <div className="mt-6">
            <a href="example.com" className="mr-1">
              <span>@태크 스포트라이트</span>
            </a>
            <a href="" className="">
              4년 전
            </a>
            <div className="mb-2">
              와, 영상 퀄리티 대박이에요! 덕분에 많이 배웠어요.
            </div>
            <div className="flex">
              <HandThumbUpIcon className="mr-2 h-6 w-6 text-black" />
              <span className="mr-2">12</span>
              <HandThumbDownIcon className="h-6 w-6 text-black" />
              <div className="flex justify-center hover:bg-gray-300 rounded-lg w-20 h-7">
                답글
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <a href="example.com">
            <img
              src={profile3}
              className="mt-6 mr-3 w-10 h-10 rounded-full transition duration-200 hover:bg-gray-300"
              alt="프로필 사진"
            />
          </a>
          <div className="mt-6">
            <a href="example.com" className="mr-1">
              <span>@태크 스포트라이트</span>
            </a>
            <a href="" className="">
              4년 전
            </a>
            <div className="mb-2">
              와, 영상 퀄리티 대박이에요! 덕분에 많이 배웠어요.
            </div>
            <div className="flex">
              <HandThumbUpIcon className="mr-2 h-6 w-6 text-black" />
              <span className="mr-2">12</span>
              <HandThumbDownIcon className="h-6 w-6 text-black" />
              <div className="flex justify-center hover:bg-gray-300 rounded-lg w-20 h-7">
                답글
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="mt-6 flex">
          <img
            src={sseomneil1}
            className="mr-3 w-[168px] h-[94px] rounded-md"
          />
          <div className="">
            <a href="" className="block mb-1 text-lg font-semibold">
              ___을(를) 마스터하는 10가지 꿀팁! (완전 쉽게 설명)
            </a>
            <a href="example.com" className="block text-gray-500">
              테크벌스
            </a>
            <span>조회수 49만회</span>
            <span className="mx-2">•</span>
            <span>10년 전</span>
          </div>
        </div>
      <div className="mt-6 flex">
          <img
            src={sseomneil1}
            className="mr-3 w-[168px] h-[94px] rounded-md"
          />
          <div className="">
            <a href="" className="block mb-1 text-lg font-semibold">
              ___을(를) 마스터하는 10가지 꿀팁! (완전 쉽게 설명)
            </a>
            <a href="example.com" className="block text-gray-500">
              테크벌스
            </a>
            <span>조회수 49만회</span>
            <span className="mx-2">•</span>
            <span>10년 전</span>
          </div>
        </div>
      <div className="mt-6 flex">
          <img
            src={sseomneil1}
            className="mr-3 w-[168px] h-[94px] rounded-md"
          />
          <div className="">
            <a href="" className="block mb-1 text-lg font-semibold">
              ___을(를) 마스터하는 10가지 꿀팁! (완전 쉽게 설명)
            </a>
            <a href="example.com" className="block text-gray-500">
              테크벌스
            </a>
            <span>조회수 49만회</span>
            <span className="mx-2">•</span>
            <span>10년 전</span>
          </div>
        </div>
      <div className="mt-6 flex">
          <img
            src={sseomneil1}
            className="mr-3 w-[168px] h-[94px] rounded-md"
          />
          <div className="">
            <a href="" className="block mb-1 text-lg font-semibold">
              ___을(를) 마스터하는 10가지 꿀팁! (완전 쉽게 설명)
            </a>
            <a href="example.com" className="block text-gray-500">
              테크벌스
            </a>
            <span>조회수 49만회</span>
            <span className="mx-2">•</span>
            <span>10년 전</span>
          </div>
        </div>
      <div className="mt-6 flex">
          <img
            src={sseomneil1}
            className="mr-3 w-[168px] h-[94px] rounded-md"
          />
          <div className="">
            <a href="" className="block mb-1 text-lg font-semibold">
              ___을(를) 마스터하는 10가지 꿀팁! (완전 쉽게 설명)
            </a>
            <a href="example.com" className="block text-gray-500">
              테크벌스
            </a>
            <span>조회수 49만회</span>
            <span className="mx-2">•</span>
            <span>10년 전</span>
          </div>
        </div>
      <div className="mt-6 flex">
          <img
            src={sseomneil1}
            className="mr-3 w-[168px] h-[94px] rounded-md"
          />
          <div className="">
            <a href="" className="block mb-1 text-lg font-semibold">
              ___을(를) 마스터하는 10가지 꿀팁! (완전 쉽게 설명)
            </a>
            <a href="example.com" className="block text-gray-500">
              테크벌스
            </a>
            <span>조회수 49만회</span>
            <span className="mx-2">•</span>
            <span>10년 전</span>
          </div>
        </div>
      <div className="mt-6 flex">
          <img
            src={sseomneil1}
            className="mr-3 w-[168px] h-[94px] rounded-md"
          />
          <div className="">
            <a href="" className="block mb-1 text-lg font-semibold">
              ___을(를) 마스터하는 10가지 꿀팁! (완전 쉽게 설명)
            </a>
            <a href="example.com" className="block text-gray-500">
              테크벌스
            </a>
            <span>조회수 49만회</span>
            <span className="mx-2">•</span>
            <span>10년 전</span>
          </div>
        </div>
      <div className="mt-6 flex">
          <img
            src={sseomneil1}
            className="mr-3 w-[168px] h-[94px] rounded-md"
          />
          <div className="">
            <a href="" className="block mb-1 text-lg font-semibold">
              ___을(를) 마스터하는 10가지 꿀팁! (완전 쉽게 설명)
            </a>
            <a href="example.com" className="block text-gray-500">
              테크벌스
            </a>
            <span>조회수 49만회</span>
            <span className="mx-2">•</span>
            <span>10년 전</span>
          </div>
        </div>
      <div className="mt-6 flex">
          <img
            src={sseomneil1}
            className="mr-3 w-[168px] h-[94px] rounded-md"
          />
          <div className="">
            <a href="" className="block mb-1 text-lg font-semibold">
              ___을(를) 마스터하는 10가지 꿀팁! (완전 쉽게 설명)
            </a>
            <a href="example.com" className="block text-gray-500">
              테크벌스
            </a>
            <span>조회수 49만회</span>
            <span className="mx-2">•</span>
            <span>10년 전</span>
          </div>
        </div>
        </div>
        </div>
    </>
  );
}

export default VidioWatch;
