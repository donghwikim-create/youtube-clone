import React from "react";
import sseomneil1 from "../images/sseomneil1.jpg";
import sseomneil2 from "../images/sseomneil2.jpg";
import sseomneil3 from "../images/sseomneil3.jpg";
import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.jpg";
import profile3 from "../images/profile3.jpg";

function VideoDashboard() {
  const videoCategoryButtons = [
    { label: "홈" },
    { label: "실시간" },
    { label: "음악" },
    { label: "스포츠" },
    { label: "게임" },
    { label: "뉴스" },
    { label: "배우기" },
    { label: "코미디" },
    { label: "영화 및 드라마" },
    { label: "최근에 본 동영상" },
    { label: "취미" },
  ];

 const vidioItems = [
    {
      image: sseomneil1,
      profile: profile1,
      title: "초보자를 위한 ___ 완벽 가이드! [2024 최신판]",
      Publisher: "일상로그 ",
      publishDate: "3개월", // 게시일
      viewCount: "3.5만", // 조회수
    },
    {
      image: sseomneil2,
      profile: profile2,
      title: "내가 직접 해봤다! ___ VS ___, 무엇이 더 좋을까?",
      Publisher: "웃음공작소",
      publishDate: "3일전", // 게시일
      viewCount: "12만", // 조회수
    },
    {
      image: sseomneil3,
      profile: profile3,
      title: "2024년 ___ 트렌드, 이것만 알면 끝!",
      Publisher: "리뷰의 정석",
      publishDate: "5년전", // 게시일
      viewCount: "120만", // 조회수
    },
  ]; 
 
  const vidioItems2 = [
    {
      image: sseomneil1,
      profile: profile1,
      title: "초보자를 위한 ___ 완벽 가이드! [2024 최신판]",
      Publisher: "일상로그 ",
      publishDate: "3개월", // 게시일
      viewCount: "3.5만", // 조회수
    },
    {
      image: sseomneil2,
      profile: profile2,
      title: "내가 직접 해봤다! ___ VS ___, 무엇이 더 좋을까?",
      Publisher: "웃음공작소",
      publishDate: "3일전", // 게시일
      viewCount: "12만", // 조회수
    },
    {
      image: sseomneil3,
      profile: profile3,
      title: "2024년 ___ 트렌드, 이것만 알면 끝!",
      Publisher: "리뷰의 정석",
      publishDate: "5년전", // 게시일
      viewCount: "120만", // 조회수
    },
  ]; 

  return (
    <section id="vidioDashboard">
      <div className="px-6">
        <button class="px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 my-3 mr-3">
          전체
        </button>
        {videoCategoryButtons.map((category) => (
          <button
            key={category.label}
            class="px-4 py-2 bg-slate-200 text-black font-semibold rounded-lg hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 my-3 mr-3"
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="pt-6">
        <div className="flex">
          {vidioItems.map((item) => (
            <div className="p-3">
              <a href="#" alt="썸네일 이미지">
                <img
                  key={item.image}
                  src={item.image}
                  alt="동영상 썸네일 이미지"
                  className="w-[370px] h-[210px]"
                />
              </a>
              <div className="flex mt-3 space-x-3">
              <img src={item.profile} alt="profile" className="w-10 h-10 rounded-full object-cover"/>
              <div>
                <a href="" alt="유튜브 제목">
                  <form key={item.title} className="font-bold mb-2">
                    {item.title}
                  </form>
                </a>
                <a
                  href="#"
                  alt="유튜버 이름"
                  key={item.Publisher}
                  className="text-gray-500 hover:text-slate-950"
                >
                  {item.Publisher}
                </a>
                <div className="text-gray-500">
                  조회수 {item.viewCount} · {item.publishDate}
                </div>
              </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
      <div className="pt-6">
        <div className="flex">
          {vidioItems.map((item) => (
            <div className="p-3">
              <a href="#" alt="썸네일 이미지">
                <img
                  key={item.image}
                  src={item.image}
                  alt="동영상 썸네일 이미지"
                  className="w-[370px] h-[210px]"
                />
              </a>
              <div className="flex mt-3 space-x-3">
              <img src={item.profile} alt="profile" className="w-10 h-10 rounded-full object-cover"/>
              <div>
                <a href="" alt="유튜브 제목">
                  <form key={item.title} className="font-bold mb-2">
                    {item.title}
                  </form>
                </a>
                <a
                  href="#"
                  alt="유튜버 이름"
                  key={item.Publisher}
                  className="text-gray-500 hover:text-slate-950"
                >
                  {item.Publisher}
                </a>
                <div className="text-gray-500">
                  조회수 {item.viewCount} · {item.publishDate}
                </div>
              </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
      <div className="pt-6">
        <div className="flex">
          {vidioItems.map((item) => (
            <div className="p-3">
              <a href="#" alt="썸네일 이미지">
                <img
                  key={item.image}
                  src={item.image}
                  alt="동영상 썸네일 이미지"
                  className="w-[370px] h-[210px]"
                />
              </a>
              <div className="flex mt-3 space-x-3">
              <img src={item.profile} alt="profile" className="w-10 h-10 rounded-full object-cover"/>
              <div>
                <a href="" alt="유튜브 제목">
                  <form key={item.title} className="font-bold mb-2">
                    {item.title}
                  </form>
                </a>
                <a
                  href="#"
                  alt="유튜버 이름"
                  key={item.Publisher}
                  className="text-gray-500 hover:text-slate-950"
                >
                  {item.Publisher}
                </a>
                <div className="text-gray-500">
                  조회수 {item.viewCount} · {item.publishDate}
                </div>
              </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
      <div className="pt-6">
        <div className="flex">
          {vidioItems.map((item) => (
            <div className="p-3">
              <a href="#" alt="썸네일 이미지">
                <img
                  key={item.image}
                  src={item.image}
                  alt="동영상 썸네일 이미지"
                  className="w-[370px] h-[210px]"
                />
              </a>
              <div className="flex mt-3 space-x-3">
              <img src={item.profile} alt="profile" className="w-10 h-10 rounded-full object-cover"/>
              <div>
                <a href="" alt="유튜브 제목">
                  <form key={item.title} className="font-bold mb-2">
                    {item.title}
                  </form>
                </a>
                <a
                  href="#"
                  alt="유튜버 이름"
                  key={item.Publisher}
                  className="text-gray-500 hover:text-slate-950"
                >
                  {item.Publisher}
                </a>
                <div className="text-gray-500">
                  조회수 {item.viewCount} · {item.publishDate}
                </div>
              </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </section>
  );
}

export default VideoDashboard;
