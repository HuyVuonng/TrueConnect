"use client";
import styled from "styled-components";
import CardFounder from "./CardFounder";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Content6() {
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,

    // autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          speed: 1000,
          autoplaySpeed: 6000,
          // autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          speed: 1000,
          autoplaySpeed: 6000,
          // autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 1000,
          autoplaySpeed: 6000,
          dots: true,
          // autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="bg-no-repeat bg-[url('/../Images/AboutUs/BackgroundContent6.png')]  w-full bg-cover lg:p-11 pb-10">
      <div className="lg:w-[1200px] pt-10 lg:m-auto m-[15px] lg:flex gap-6  items-center">
        <div className="lg:w-[368px] self-start">
          <h1 className="font-bold lg:text-[40px] text-[24px] text-center lg:text-start leading-[51.2px] text-white">
            Đội ngũ sáng lập
          </h1>
          <p className="font-normal lg:text-[16px] text-[14px] leading-[28px] text-white">
            Với hàng chục năm làm trong nghề, đội ngũ sáng lập công ty có kinh
            nghiệm trong ngành và tận tâm đem đến những dịch vụ giải pháp đột
            phá và hiệu quả cho khách hàng.
          </p>
        </div>
        <WrapperSlider className="lg:w-[calc(1200px_-_368px)] cursor-pointer mt-4 lg:mt-0">
          <Slider {...sliderSettings} className="flex items-center">
            <CardFounder
              name={"Vũ Trường Giang"}
              des={"Founder"}
              img={"founder.png"}
            />
            <CardFounder
              name={"Lê Thu Hằng"}
              des={"Co - Founder"}
              img={"coFounder.png"}
            />
            <CardFounder
              name={"Đồng Văn Hồng"}
              des={"Co - Founder"}
              img={"coFounder1.png"}
            />
          </Slider>
        </WrapperSlider>
      </div>
    </div>
  );
}

export default Content6;
const WrapperSlider = styled.div`
  .slick-track {
    display: flex;
    align-items: center;

    .slick-slide {
      margin: 0 15px;
    }
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-dots {
    li {
      button: before {
        color: #fa541c;
      }
    }
  }
`;
