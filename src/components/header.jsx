import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faMicrophone,
  faEllipsisV,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from '../images/logo.jpg';

function header() {
  return (
    <>
      <div className="contain flex justify-between items-center w-full h-16 px-4">
        <div className="flex items-center">
          <button className="w-10 h-10 flex items-center justify-center rounded-full transition duration-200 hover:bg-gray-300">
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4"
          >
            <img
              src={Logo} // 사용할 이미지의 URL로 교체
              alt="Link"
              className="w-[93px] h-[20px]"
            />
          </a>
        </div>
        <div className="flex flex-grow text-center justify-center">
          <form className="w-full max-w-md flex items-center">
            <input
              type="text"
              placeholder="검색..."
              className="border border-gray-300 rounded-l-md p-2 flex-grow"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-200"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <button className="ml-4 p-2 w-10 h-10 flex items-center justify-center rounded-full transition duration-200 hover:bg-gray-300">
            <FontAwesomeIcon
              icon={faMicrophone}
              className="text-black w-6 h-6"
            />
          </button>
        </div>
        <div className="ml-auto flex items-center">
          <button className="flex items-center justify-center w-10 h-10 rounded-full transition duration-200">
            <FontAwesomeIcon
              icon={faEllipsisV}
              className="text-gray-700 w-6 h-6"
            />
          </button>
          <button className="w-32 h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
            <FontAwesomeIcon icon={faUser} className="w-5 h-5 mr-4" />
            로그인
          </button>
        </div>
      </div>
    </>
  );
}

export default header;
