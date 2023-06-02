import React from "react";
import Slider from "react-slick";
import "./Customer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../../assets/img/Image.png";

export default function Customer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-[150px]">
      <div className="text-center">
        <h2 className="text-[60px] font-bold"> What Our Customer Say </h2>
        <p className="text-lg font-normal text-color-1 mt-6">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks.
        </p>
      </div>
      <div className="px-[216px] mt-[68px]">
        <Slider className="shadow-2xl rounded-lg customer__item" {...settings}>
          <div className="px-20 text-center ">
            <img
              src={image}
              className="w-[106px] h-[106px] rounded-full object-cover mx-auto mt-[54px]"
              alt=""
            />
            <h1 className="mt-4 mb-2 font-semibold text-[30px]">
              Stephan Louis
            </h1>
            <p className="text-xl font-medium text-color-1 mb-6">Developer</p>
            <p className="mb-[86px]">
              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.”
            </p>
          </div>
          <div className="px-20 text-center ">
            <img
              src={image}
              className="w-[106px] h-[106px] rounded-full object-cover mx-auto mt-[54px]"
              alt=""
            />
            <h1 className="mt-4 mb-2 font-semibold text-[30px]">
              Stephan Louis
            </h1>
            <p className="text-xl font-medium text-color-1 mb-6">Developer</p>
            <p className="mb-[86px]">
              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.”
            </p>
          </div>
          <div className="px-20 text-center ">
            <img
              src={image}
              className="w-[106px] h-[106px] rounded-full object-cover mx-auto mt-[54px]"
              alt=""
            />
            <h1 className="mt-4 mb-2 font-semibold text-[30px]">
              Stephan Louis
            </h1>
            <p className="text-xl font-medium text-color-1 mb-6">Developer</p>
            <p className="mb-[86px]">
              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.”
            </p>
          </div>
          <div className="px-20 text-center ">
            <img
              src={image}
              className="w-[106px] h-[106px] rounded-full object-cover mx-auto mt-[54px]"
              alt=""
            />
            <h1 className="mt-4 mb-2 font-semibold text-[30px]">
              Stephan Louis
            </h1>
            <p className="text-xl font-medium text-color-1 mb-6">Developer</p>
            <p className="mb-[86px]">
              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.”
            </p>
          </div>
          <div className="px-20 text-center ">
            <img
              src={image}
              className="w-[106px] h-[106px] rounded-full object-cover mx-auto mt-[54px]"
              alt=""
            />
            <h1 className="mt-4 mb-2 font-semibold text-[30px]">
              Stephan Louis
            </h1>
            <p className="text-xl font-medium text-color-1 mb-6">Developer</p>
            <p className="mb-[86px]">
              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.”
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
