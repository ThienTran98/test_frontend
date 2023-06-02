import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/img/Logo (1).png";

export default function Header() {
  return (
    <div className="absolute top-0 w-full py-10 px-[120px] flex items-center justify-between ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="flex items-center text-[15px] text-color-1">
          <li className=" flex items-center hover:text-red-500">
            <a href="" className="">
              Services
            </a>
            <FontAwesomeIcon
              className={`ml-2 relative top-[-1px]`}
              icon={faSortDown}
            />
          </li>
          <li className="ml-9 hover:text-red-500">
            <a href="">About us</a>
          </li>
          <li className="ml-9 hover:text-red-500">
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center text-[15px]">
          <li className="flex items-center text-color-1  px-8 py-[14px] rounded-3xl border border-white hover:border-teal-500 hover:opacity-50 hover:text-red-500 hover:cursor-pointer">
            <button className="">EN</button>
            <FontAwesomeIcon
              className={`ml-[13px] relative top-[-2px]`}
              icon={faSortDown}
            />
          </li>
          <li className="ml-[18px] text-white  hover:opacity-75  ">
            <button className=" bg-color-2 rounded-3xl px-10 py-[14px]">
              Contact us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
