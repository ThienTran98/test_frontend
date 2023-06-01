import React from "react";
import styles from "./Banner.module.css";
import Button from "../../../Component/Button/Button";
import image1 from "../../../assets/img/Ellipse 511.png";
import image2 from "../../../assets/img/Ellipse 596.png";

export default function Banner() {
  return (
    <div className={`${styles["banner__img"]} h-[1000px]`}>
      <div className="grid grid-cols-2 ">
        <div className="pl-[120px] pt-[260px]">
          <h2 className="text-[60px] font-bold">
            Find & Hire Expert Freelancers
          </h2>
          <p className="text-[18px]">
            Work with the best freelance talent from around the world on our
            secure flexible and cost-effective platform.
          </p>
          <div className="flex items-center">
            <Button
              value="Contact us"
              backgroundColor="bg-color-2"
              color="text-white"
            />
            <Button value="Learn more" color="text-color-2" />
          </div>
        </div>
        <div className="pl-2 pt-[240px] ">
          <div className=" bg-white w-[140px] rounded relative shadow-2xl">
            <h3 className="text-center pt-[22px] pb-[10px] font-medium">
              Amanda M. is hired!
            </h3>
            <div className="px-3 pb-3 text-center">
              <div className="bg-[#F2F4F9] rounded">
                <h3 className="text-color-1">Your Earned</h3>
                <p className="text-color-2 font-bold">$3,000</p>
              </div>
            </div>
            <img
              className="absolute top-[-5%] left-[-10%] w-8 h-8 shadow rounded-full z-[0] animate-bounce"
              src={image1}
              alt=""
            />
            <img
              className="absolute top-[-22%] right-[-20%] "
              src={image2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
