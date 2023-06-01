import {
  faChartArea,
  faGraduationCap,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Chart() {
  return (
    <div className="px-[185px] py-28">
      <div className="grid grid-cols-3 gap-3">
        <div className="shadow-2xl rounded-xl text-center ease-in duration-300 hover:cursor-pointer hover:translate-y-6">
          <div className="w-12 h-12 mx-auto mt-4">
            <FontAwesomeIcon
              className="text-2xl mb-10 text-teal-600 "
              icon={faUser}
            />
          </div>
          <div className="pb-3 px-2">
            <h2 className="text-2xl font-medium">Grow your audience</h2>
            <p className="text-lg font-medium text-color-1 mt-[18px]">
              Find new customers and build your email list with lead generation
              ..
            </p>
          </div>
        </div>
        <div className="shadow-2xl rounded-xl text-center ease-in duration-300 hover:cursor-pointer hover:translate-y-6">
          <div className="w-12 h-12 mx-auto mt-4">
            <FontAwesomeIcon
              className="text-2xl mb-10 text-teal-600 "
              icon={faChartArea}
            />
          </div>
          <div className="pb-3 px-2">
            <h2 className="text-2xl font-medium">Boost online sales</h2>
            <p className="text-lg font-medium text-color-1 mt-[18px]">
              Market your ecommerce business and deliver experiences ..
            </p>
          </div>
        </div>
        <div className="shadow-2xl rounded-xl text-center ease-in duration-300 hover:cursor-pointer hover:translate-y-6">
          <div className="w-12 h-12 mx-auto mt-4">
            <FontAwesomeIcon
              className="text-2xl mb-10 text-teal-600 "
              icon={faGraduationCap}
            />
          </div>
          <div className="pb-3 px-2">
            <h2 className="text-2xl font-medium">Sell your knowledge</h2>
            <p className="text-lg font-medium text-color-1 mt-[18px]">
              Build a following, engage them with your content ..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
