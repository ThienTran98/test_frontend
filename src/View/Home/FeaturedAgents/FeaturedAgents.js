import React from "react";
import styles from "./FeaturedAgents.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../../assets/img/263756-P4T3RU-156 1.png";
import image2 from "../../../assets/img/579158-PLVYIG-856 1.png";
import image3 from "../../../assets/img/18710 1.png";

export default function FeaturedAgents() {
  return (
    <div className={`${styles["background__linear-gradient"]} mt-5`}>
      <div className="text-center pt-[100px]">
        <h1 className="font-semibold text-[60px]">Our Featured Agents</h1>
        <p className="text-lg font-normal text-color-1">
          Meet our amazing team members
        </p>
      </div>
      <div className="mt-10 px-[148px] flex justify-between mb-[197px] ">
        <div className="w-[362px] h-[435px] shadow-2xl p-[30px] rounded-xl  ease-in duration-300 hover:cursor-pointer hover:translate-y-[-6px]">
          <div className="flex items-center justify-between">
            <FontAwesomeIcon
              icon={faStar}
              className="hover:text-yellow-400 cursor-pointer"
            />
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
          <div className="text-center">
            <img
              className="rounded-full w-[120px] h-[120px] object-cover mx-auto"
              src={image1}
              alt=""
            />
            <h2 className="mt-2 text-[26px] font-medium">Alison Kiara</h2>
            <h4 className="mt-1 text-color-1 font-normal">Michigan, TX</h4>
          </div>
          <div className="mt-[50px] text-center">
            <h4 className="text-lg">989-653-2986</h4>
            <h5 className="mt-[14px]">
              <a className="text-color-2" href="">
                alisonkiara@hommy.com
              </a>
            </h5>
          </div>
        </div>
        <div className="w-[362px] h-[435px] shadow-2xl p-[30px] rounded-xl  mt-[60px] ease-in duration-300 hover:cursor-pointer hover:translate-y-[-6px]">
          <div className="flex items-center justify-between">
            <FontAwesomeIcon
              icon={faStar}
              className="hover:text-yellow-400 cursor-pointer"
            />
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
          <div className="text-center">
            <img
              className="rounded-full w-[120px] h-[120px] object-cover mx-auto"
              src={image2}
              alt=""
            />
            <h2 className="mt-2 text-[26px] font-medium">Dianne Sabin</h2>
            <h4 className="mt-1 text-color-1 font-normal">New Jeresy, TX</h4>
          </div>
          <div className="mt-[50px] text-center">
            <h4 className="text-lg">989-653-2550</h4>
            <h5 className="mt-[14px]">
              <a className="text-color-2" href="">
                hidianne@hommy.com
              </a>
            </h5>
          </div>
        </div>
        <div className="w-[362px] h-[435px] shadow-2xl p-[30px] rounded-xl mt-[100px] ease-in duration-300 hover:cursor-pointer hover:translate-y-[-6px]">
          <div className="flex items-center justify-between">
            <FontAwesomeIcon
              icon={faStar}
              className="hover:text-yellow-400 cursor-pointer"
            />
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
          <div className="text-center">
            <img
              className="rounded-full w-[120px] h-[120px] object-cover mx-auto"
              src={image3}
              alt=""
            />
            <h2 className="mt-2 text-[26px] font-medium">Shawn Ramirez</h2>
            <h4 className="mt-1 text-color-1 font-normal">Illinois, NZ</h4>
          </div>
          <div className="mt-[50px] text-center">
            <h4 className="text-lg">989-653-2986</h4>
            <h5 className="mt-[14px]">
              <a className="text-color-2" href="">
                iamrami@hommy.com
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
