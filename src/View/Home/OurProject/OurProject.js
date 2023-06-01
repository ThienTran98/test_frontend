import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../../assets/img/Rectangle 3742.png";
import image2 from "../../../assets/img/Rectangle 3744.png";
import image3 from "../../../assets/img/Rectangle 3743.png";
import image4 from "../../../assets/img/Rectangle 3745.png";

export default function OurProject() {
  return (
    <div className="pt-[200px]">
      <div className="px-[370px] text-center">
        <h1 className="text-[60px] font-bold">Our Projects</h1>
        <p className="text-lg font-light mt-[30px] mb-12">
          We have been providing great flooring solutions service.
        </p>
        <div>
          <button className="min-w-[120px] py-[10px] rounded-full bg-color-2 text-white hover:opacity-80 mr-6">
            All
          </button>
          <button className="min-w-[120px] py-[10px] rounded-full bg-[#F1F1F1]  text-[#ACACAC] hover:opacity-80 mr-6">
            Websites
          </button>
          <button className="min-w-[120px] py-[10px] rounded-full bg-[#F1F1F1] text-[#ACACAC] hover:opacity-80 mr-6">
            Social Media
          </button>
          <button className="min-w-[120px] py-[10px] rounded-full  bg-[#F1F1F1] text-[#ACACAC] hover:opacity-80 mr-6">
            UI/UX
          </button>
          <button className="min-w-[120px] py-[10px] rounded-full bg-[#F1F1F1]  text-[#ACACAC] hover:opacity-80">
            Market
          </button>
        </div>
      </div>
      <div className="px-[95px] mt-[140px]">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="mr-3 shadow-2xl">
            <img src={image1} alt="" />
          </div>
          <div className="mr-3 shadow-2xl">
            <img src={image2} alt="" />
          </div>
          <div className="mr-3 shadow-2xl">
            <img src={image3} alt="" />
          </div>
          <div className=" shadow-2xl">
            <img src={image4} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
