import React from "react";
import icon1 from "../../../assets/img/Vector (2).png";
import icon2 from "../../../assets/img/Vector (3).png";
import icon3 from "../../../assets/img/Compound Path.png";

export default function ServicesOur() {
  return (
    <div className="bg-zinc-100 pb-10">
      <div>
        <div className="px-[370px] text-center mb-[76px]">
          <h1 className="text-[60px] font-semibold">Services</h1>
          <p className="text-2xl font-normal text-color-1">
            Our support team will get assistance from AI-powered suggestions,
            making it quicker than ever to handle support requests.
          </p>
        </div>
        <div className="pl-[160px] flex items-center">
          <div className=" w-[360px] h-[170px] mr-10 ease-in duration-300 hover:cursor-pointer hover:translate-y-[-6px]">
            <div className="px-6 py-10 flex items-center shadow-2xl rounded-md">
              <div>
                <img className="" src={icon1} alt="" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-xl">Branding Idendity</h3>
                <p className="text-color-1 ">
                  Our support team will get assistance from AI-powered.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[360px] h-[170px] ease-in duration-300 hover:cursor-pointer hover:translate-y-[-6px]">
            <div className="px-6 py-10 flex items-center shadow-2xl rounded-md">
              <div>
                <img className="" src={icon2} alt="" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-xl">Branding consult</h3>
                <p className="text-color-1 ">
                  Our support team will get assistance from AI-powered.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-[520px] flex items-center mt-10">
          <div className=" w-[360px] h-[170px] mr-10 ease-in duration-300 hover:cursor-pointer hover:translate-y-[-6px]">
            <div className="px-6 py-10 flex items-center shadow-2xl rounded-md">
              <div>
                <img className="" src={icon3} alt="" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-xl">web development</h3>
                <p className="text-color-1 ">
                  Our support team will get assistance from AI-powered.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[360px] h-[170px] ease-in duration-300 hover:cursor-pointer hover:translate-y-[-6px]">
            <div className="px-6 py-10 flex items-center shadow-2xl rounded-md">
              <div>
                <img className="" src={icon2} alt="" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-xl">market anlysis</h3>
                <p className="text-color-1 ">
                  Our support team will get assistance from AI-powered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
