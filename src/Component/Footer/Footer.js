import React from "react";
import logo from "../../assets/img/Logo.png";

export default function Footer() {
  return (
    <div className="pt-[175px] bg-teal-600 text-white">
      <div>
        <div className="px-[370px] text-[60px]  font-bold text-center">
          <h1> People who are ready took these courses!</h1>
        </div>
        <div className="text-center">
          <button className="px-10 py-[22px] bg-white rounded-2xl mt-14 mb-[130px] text-black font-medium hover:text-white hover:bg-red-500 hover:opacity-80">
            Schedule Appointment
          </button>
        </div>
        <div className="px-[206px] grid grid-cols-3">
          <div className="col-span-1">
            <ul className="w-[168px]">
              <li>
                <img src={logo} alt="" />
              </li>
              <li class="text-[12px] md:text-sm lg:text-base mt-[45px]  hover:opacity-80 ">
                <a href="">
                  Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 col-span-2 pb-[132px]">
            <ul className="text-[12px] md:text-sm lg:text-base">
              <li className="text-sm md:text-base lg:text-xl font-medium mb-9">
                <a href="">Links</a>
              </li>
              <li className="mb-[26px] hover:opacity-80">
                <a href="">Overons</a>
              </li>
              <li className="mb-[26px] hover:opacity-80">
                <a href="">Social Media</a>
              </li>
              <li className="mb-[26px] hover:opacity-80">
                <a href="">Counters</a>
              </li>
              <li className=" hover:opacity-80">
                <a href="">Contact</a>
              </li>
            </ul>
            <ul className="text-[12px] md:text-sm lg:text-base">
              <li className="text-sm md:text-base lg:text-xl font-medium mb-9">
                <a href="">Company</a>
              </li>
              <li className="mb-[26px] hover:opacity-80">
                <a href="">Terms & Conditions</a>
              </li>
              <li className="mb-[26px] hover:opacity-80">
                <a href="">Privacy Policy</a>
              </li>
              <li className=" hover:opacity-80">
                <a href="">Contact</a>
              </li>
            </ul>
            <ul className="text-[12px] md:text-sm lg:text-base">
              <li className="text-sm md:text-base lg:text-xl font-medium mb-9">
                <a href="">Get in touch</a>
              </li>
              <li className="mb-[26px] hover:opacity-80">
                <a href="">Crechterwoord K12 182 DK Alknjkcb</a>
              </li>
              <li className="mb-[26px] hover:opacity-80">
                <a href="">085-132567</a>
              </li>
              <li className=" hover:opacity-80">
                <a href="">info@lobar.net</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center hover:opacity-75 text-[12px] md:text-base lg:text-base">
          <h3 className="pb-[27px]">© 2021 ar-shakir. All rights reserved</h3>
        </div>
      </div>
    </div>
  );
}
