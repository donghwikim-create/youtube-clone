import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBell,
  faPaperclip,
  faUser,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const menuItems = [
    { name: "홈", icon: faHome },
    { name: "shorts", icon: faPaperclip },
    { name: "구독", icon: faBell },
  ];

  const menuItems2 = [
    { name: "내 페이지", icon: faUser },
    { name: "시청 기록", icon: faHistory },
  ];

  const menuItems3 = [
    { name: "인기 급상승", icon: faHome },
    { name: "쇼핑", icon: faPaperclip },
    { name: "음악", icon: faBell },
    { name: "영화", icon: faHome },
    { name: "실시간", icon: faPaperclip },
    { name: "게임", icon: faBell },
    { name: "스포츠", icon: faHome },
    { name: "학습 프로그램", icon: faPaperclip },
    { name: "팟캐스트", icon: faBell },
  ];

  const menuItems4 = [
    { name: "설정", icon: faUser },
    { name: "신고 기록", icon: faHistory },
    { name: "고객 센터", icon: faUser },
    { name: "의견 보내기", icon: faHistory },
  ];

  return (
    <div className="h-full w-64 text-black p-3">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center px-3 hover:bg-gray-200 rounded cursor-pointer mb-5"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="mr-8"
            ></FontAwesomeIcon>
            {item.name}
          </li>
        ))}
        <hr className="border-t border-gray-300 my-4" />
        {menuItems2.map((item) => (
          <li
            key={item.name}
            className="flex items-center px-3 hover:bg-gray-200 rounded cursor-pointer mb-5"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="mr-8"
            ></FontAwesomeIcon>
            {item.name}
          </li>
        ))}
        <hr className="border-t border-gray-300 my-4" />
        <div className="px-3 mb-5">
          로그인하면 동영상에
          <br /> 좋아요를 표시하고 댓글을 <br /> 달거나 구독할 수 있습니다.
        </div>
        <button className="w-32 h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
          <FontAwesomeIcon icon={faUser} className="w-5 h-5 mr-4" />
          로그인
        </button>
        <hr className="border-t border-gray-300 my-4" />
        <h2 className="text-lg font-bold mb-5">탐색</h2>
        {menuItems3.map((item) => (
          <li
            key={item.name}
            className="flex items-center px-3 hover:bg-gray-200 rounded cursor-pointer mb-5"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="mr-8"
            ></FontAwesomeIcon>
            {item.name}
          </li>
        ))}
        <hr className="border-t border-gray-300 my-4" />
        <h2 className="text-lg font-bold mb-5">Youtube 더보기</h2>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center px-3 hover:bg-gray-200 rounded cursor-pointer mb-5"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="mr-8"
            ></FontAwesomeIcon>
            {item.name}
          </li>
        ))}
        <hr className="border-t border-gray-300 my-4" />
        {menuItems4.map((item) => (
          <li
            key={item.name}
            className="flex items-center px-3 hover:bg-gray-200 rounded cursor-pointer mb-5"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="mr-8"
            ></FontAwesomeIcon>
            {item.name}
          </li>
        ))}
        <hr className="border-t border-gray-300 my-4" />
        <div className="flex space-x-2">
        <a href="https://example.com">
          정보
        </a>
        <a href="https://example.com">
          보도자료
        </a>
        <a href="https://example.com">
          저작권
        </a>
        <a href="https://example.com">
          문의하기
        </a>
        </div>
        <div className="flex space-x-2 mb-3">
        <a href="https://example.com">
          크리에이터
        </a>
        <a href="https://example.com">
          광고
        </a>
        <a href="https://example.com">
          개발자
        </a>
        </div>
        <div className="flex space-x-2">
        <a href="https://example.com">
          약관
        </a>
        <a href="https://example.com">
          개인정보처리방침
        </a>
        </div>
        <div className="flex space-x-2">
        <a href="https://example.com">
          정책 및 안전
        </a>
        </div>
        <div className="flex space-x-2">
        <a href="https://example.com">
          YouTube 작동의 원리
        </a>
        </div>
        <div className="flex space-x-2 mb-3">
        <a href="https://example.com">
          새로운 기능 테스트하기
        </a>
        </div>
        <div>© 2024 회사 이름. 모든 권리 보유.</div>
      </ul>
    </div>
  );
}

export default Navigation;
