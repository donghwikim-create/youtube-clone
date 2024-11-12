import React from "react";
import sseomneil1 from "../images/sseomneil1.jpg";
import sseomneil2 from "../images/sseomneil2.jpg";
import sseomneil3 from "../images/sseomneil3.jpg";
import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.jpg";
import profile3 from "../images/profile3.jpg";

function SearchResults() {
  const videoItems = [
    {
      Thumbnail: sseomneil1,
      profile: profile1,
      title: "초보자를 위한 ___ 완벽 가이드! [2024 최신판]",
      Publisher: "일상로그 ",
      publishDate: "3개월", // 게시일
      viewCount: "3.5만", // 조회수
      videoDescription:
        "이 튜토리얼에서는 리액트의 기본부터 환경 설정, 첫 번째 컴포넌트를 만드는 방법까지 다룹니다. 리액트를 처음 접하거나 복습이 필요한 분들에게 적합한 튜토리얼입니다.",
    },
    {
      Thumbnail: sseomneil2,
      profile: profile2,
      title: "내가 직접 해봤다! ___ VS ___, 무엇이 더 좋을까?",
      Publisher: "웃음공작소",
      publishDate: "3일전", // 게시일
      viewCount: "12만", // 조회수
      videoDescription:
        "자바스크립트 ES6에서 새롭게 추가된 기능들에 대해 알아보세요. 화살표 함수, 클래스, 프로미스 등 다양한 기능을 배울 수 있습니다. 이 영상을 통해 자바스크립트 코딩 능력을 향상시킬 수 있습니다.",
    },
    {
      Thumbnail: sseomneil3,
      profile: profile3,
      title: "2024년 ___ 트렌드, 이것만 알면 끝!",
      Publisher: "리뷰의 정석",
      publishDate: "5년전", // 게시일
      viewCount: "120만", // 조회수
      videoDescription:
        "이 크래시 코스에서는 CSS Flexbox에 대해 배웁니다. 기본 개념부터 고급 레이아웃까지 다루며, 이 영상을 통해 반응형 레이아웃을 쉽게 디자인할 수 있게 될 것입니다.",
    },
  ];

  return (
    <>
      <div>
        <div className="px-4">
          <div className="flex justify-end">
            <button className="w-40 h-10 flex items-center justify-center rounded-full transition duration-200 hover:bg-gray-300">
              <span>필터</span>
              <i className="fas fa-sliders-h text-gray-700 text-2xl ml-3"></i>
            </button>
          </div>
        </div>
        {videoItems.map((item) => (
          <div className="flex gap-2 p-3">
            {" "}
            {/* flex로 가로 정렬, gap으로 간격 추가 */}
            <a href="#" alt="동영상 썸네일 링크" className="">
              <img
                src={item.Thumbnail}
                alt="동영상 썸네일"
                className="w-[500px] h-[280px]"
              />
            </a>
            <div className="flex flex-col gap-4 w-full">
              {" "}
              {/* flex-col로 세로 정렬 */}
              <a href="#" class="text-xl font-medium text-gray-600">
                {item.title}
              </a>
              <a href="#" className="text-gray-500">
                조회수 {item.viewCount} · {item.publishDate}
              </a>
              <div className="flex items-center">
                <a href="#">
                  <img
                    src={item.profile}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </a>
                <a href="#" className="ml-3 text-gray-500 hover:text-slate-950">
                  {item.Publisher}
                </a>
              </div>
              <a href="#" className="line-clamp-1">{item.videoDescription}</a>
            </div>
          </div>
        ))}
        {videoItems.map((item) => (
          <div className="flex gap-2 p-3">
            {" "}
            {/* flex로 가로 정렬, gap으로 간격 추가 */}
            <a href="#" alt="동영상 썸네일 링크" className="">
              <img
                src={item.Thumbnail}
                alt="동영상 썸네일"
                className="w-[500px] h-[280px]"
              />
            </a>
            <div className="flex flex-col gap-4 w-full">
              {" "}
              {/* flex-col로 세로 정렬 */}
              <a href="#" class="text-xl font-medium text-gray-600">
                {item.title}
              </a>
              <a href="#" className="text-gray-500">
                조회수 {item.viewCount} · {item.publishDate}
              </a>
              <div className="flex items-center">
                <a href="#">
                  <img
                    src={item.profile}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </a>
                <a href="#" className="ml-3 text-gray-500 hover:text-slate-950">
                  {item.Publisher}
                </a>
              </div>
              <a href="#" className="line-clamp-1">{item.videoDescription}</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchResults;
