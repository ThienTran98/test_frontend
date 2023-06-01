import {
  faChevronRight,
  faEnvelope,
  faGear,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function OurFeatures() {
  return (
    <div className="py-[150px] px-[160px]">
      <div className="text-center">
        <h1 className="text-[60px] font-semibold mb-[30px]">Our Features</h1>
        <p className="text-[20px] text-color-1 mb-[50px]">
          Unleash your creativety with a visual collaboration plattorm that
          enables effective ideation
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col justify-center items-center text-center shadow-2xl rounded ease-in duration-300 hover:cursor-pointer hover:translate-y-[-6px]">
          <div className="w-12 h-12 bg-[#FFF0E9] flex items-center justify-center rounded-full text-[#ff8345] mt-4">
            <FontAwesomeIcon className="text-xl" icon={faGear} />
          </div>
          <div className="pb-4">
            <h3 className="mt-[42px] mb-[25px] text-[22px] font-semibold">
              Choosing a Service
            </h3>
            <p className="text-color-1 font-medium">
              Choosing an accountant that matches your needs
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center shadow-2xl rounded ease-in duration-300 hover:cursor-pointer hover:translate-y-[-6px]">
          <div className="w-12 h-12 bg-[#E9F6EE] flex items-center justify-center rounded-full text-[#48B774] mt-4">
            <FontAwesomeIcon className="text-xl" icon={faUser} />
          </div>
          <div className="pb-4">
            <h3 className="mt-[42px] mb-[25px] text-[22px] font-semibold">
              Our Clients Say
            </h3>
            <p className="text-color-1 font-medium">
              Read the reviews from some of our satisfied clients
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center shadow-2xl rounded ease-in duration-300 hover:cursor-pointer hover:translate-y-[-6px]">
          <div className="w-12 h-12 bg-[#FFF6DD] flex items-center justify-center rounded-full text-[#FFCB46] mt-4">
            <FontAwesomeIcon className="text-xl" icon={faEnvelope} />
          </div>
          <div className="pb-4">
            <h3 className="mt-[42px] mb-[25px] text-[22px] font-semibold">
              Initial Consultation
            </h3>
            <p className="text-color-1 font-medium">
              Understanding your accountancy requirements
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center shadow-2xl rounded ease-in duration-300 hover:cursor-pointer hover:translate-y-[-6px]">
          <div className="w-12 h-12 bg-[#EDFFFF] flex items-center justify-center rounded-full text-[#61FFFF] mt-4">
            <FontAwesomeIcon className="text-xl" icon={faPhone} />
          </div>
          <div className="pb-4">
            <h3 className="mt-[42px] mb-[25px] text-[22px] font-semibold">
              Request a Callback
            </h3>
            <p className="text-color-1 font-medium">
              Lets talk at a more convenient time for you
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-color-2">
        <button className="hover:opacity-70">
          <span className="underline underline-offset-2 mr-2 ">Learn more</span>
          <FontAwesomeIcon className="text-[12px]" icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
