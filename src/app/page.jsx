/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Components/Header";
import Slider from "react-slick";
import {
  faArrowRight,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import TrueConnect from "./Components/TrueConnext";
import CardItem from "./Components/CardItem";
import HeSinhThai from "./Components/HeSinhThaiTrueConnect/HeSinhThai";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Lora } from "next/font/google";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Input from "./Components/Input";
import Footer from "./Components/Footer";
import { sliderSettings } from "../../sliderSeting";
import Search from "./Components/Search";
import ItemBlog from "./Components/ItemBlog";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Home() {
  return (
    <main>
      <div className="wrappe1 pt-4  bg-[#F9F0EC] ">
        <div className=" content1 lg:w-[1200px] lg:m-auto m-[15px]">
          <Header />
          <div className=" pb-3 lg:flex lg:items-center lg:gap-[6rem]">
            <div className="content1-block1 lg:w-[460px] w-fit ">
              <p className="text-[32px] text-center">
                <span className="text-[#0DC5AE]">True</span>
                <span className="text-[#FF0054] ">Connect</span>
              </p>
              <p className="text-[16px] font-normal text-[#637381] my-5">
                Nền tảng mở nhằm mục đích dễ dàng cho các đơn vị phát triển ứng
                dụng khác có thể tích hợp và đẩy sản phẩm lên nền tảng
                TrueConnect và có cơ hội tiếp cận tập khách hàng rộng mở của hệ
                thống.
              </p>
              <Search />
            </div>
            <div className="content1-block2">
              <Image
                src={"/Images/Banner1.png"}
                width="564"
                height="564"
                alt="Banner1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content2 lg:w-[1200px] lg:m-auto m-[15px] py-[100px]">
        <div className="lg:flex lg:justify-around">
          <div className="content2-block1 lg:w-[536px] ">
            <h2 className="lg:text-[32px] text-[24px] text-[#0DC5AE] font-[700]">
              Công ty Cổ phần Công nghệ <TrueConnect />
            </h2>
            <p className="font-normal my-5 leading-[30px] lg:text-[16px] text-[14px]">
              Chúng tôi hoạt động với mong muốn thúc đẩy quá trình kinh doanh và
              vận hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ
              Công nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân)
              tới quy mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho
              doanh nghiệp lớn, giúp Quý khách mở rộng mạng lưới kết nối và phát
              triển kinh doanh ...
            </p>
            <div className="flex lg:w-[389px] flex-wrap gap-8 justify-between">
              <div className="flex items-center lg:w-[45%] justify-between">
                <Image
                  src={"/Images/tantam.png"}
                  width={"46"}
                  alt=""
                  height={"46"}
                />
                <span className=" lg:text-[22px] text-[16px] font-normal ml-3">
                  Tận tâm
                </span>
              </div>
              <div className="flex items-center lg:w-[45%] justify-between">
                <Image
                  src={"/Images/langnghe.png"}
                  width={"46"}
                  height={"46"}
                  alt=""
                />
                <span className=" lg:text-[22px] text-[16px] font-normal ml-3">
                  Lắng nghe
                </span>
              </div>
              <div className="flex items-center lg:w-[45%] justify-between">
                <Image
                  src={"/Images/sangtao.png"}
                  alt=""
                  width={"46"}
                  height={"46"}
                />
                <span className=" lg:text-[22px] text-[16px] font-normal ml-3">
                  Sáng tạo
                </span>
              </div>
            </div>
            <Link
              href={"/"}
              className="lg:text-[16px] text-[14px] flex gap-x-3 text-[#FF0054] float-right items-center"
            >
              <span>Xem thêm</span>
              <FontAwesomeIcon className="w-[8px]" icon={faChevronRight} />
            </Link>
          </div>
          <div>
            <img src={"/Images/img1Content2.png"} alt="" />
            <div className="flex justify-between mt-[15px] gap-2">
              <img
                src={"/Images/img2Content2.png"}
                alt=""
                className=" w-[50%]"
              />
              <img
                src={"/Images/img3Content2.png"}
                alt=""
                className=" w-[50%]"
              />
            </div>
          </div>
        </div>
        <div className="pt-[100px] ">
          <h2 className="text-[20px] text-center font-[700] leading-[52px]">
            Tại sao nên lựa chọn chúng tôi
          </h2>
          <div className="lg:flex lg:justify-around">
            <CardItem
              srcImg={"/Images/illustration_benefits.png"}
              title={"Giá cả hợp lý"}
              content={
                "Giá thành hợp lý được cung cấp với từng mức giá, phù hợp cho mọi đối tượng."
              }
            />
            <CardItem
              srcImg={"/Images/Group.png"}
              title={"Chất lượng đảm bảo"}
              content={
                "Chất lượng các sản phẩm phù hợp với giá tiền, bắt mắt và phù hợp với xu hướng."
              }
            />
            <CardItem
              srcImg={"/Images/illustration_marketing_contact.png"}
              title={"Mới mẻ và tiện lợi"}
              content={"Nhiều tính năng mới lạ, tiện dụng với người sử dụng."}
            />
          </div>
        </div>
      </div>

      <HeSinhThai />

      <div className="wrapperContent4 bg-white lg:py-[100px]">
        <div className="content4 lg:w-[1200px] lg:m-auto m-[15px]">
          <div className="lg:flex lg:items-center">
            <div className="lg:w-[460px] lg:text-left text-center">
              <h2 className="lg:hidden text-[#919EAB] ">Blog</h2>
              <h2 className="lg:text-[32px] text-[24px]  text-[#0DC5AE] font-[700]">
                Bài viết mới nhất
              </h2>
              <span className="font-normal lg:text-[16px] text-[14px] lg:text-left leading-[28px] text-[#637381]">
                Nơi những khách hàng của TrueConnect cập nhật những tin tức mới
                nhất về thị trường công nghệ
              </span>
            </div>
            <div className="justify-end flex-1 lg:block hidden">
              <Link
                href={"/"}
                className="text-[16px] flex gap-x-3 text-[#FF0054] float-right items-center"
              >
                <span>Xem thêm</span>
                <FontAwesomeIcon className="w-[8px]" icon={faArrowRight} />
              </Link>
            </div>
          </div>
          <div className="lg:flex lg:gap-[30px] lg:mt-12 mt-8 hidden">
            <div className="lg:w-[560px] rounded-[16px] lg:h-[746px] bg-no-repeat bg-[url('/Images/ImageOverlay.png')] text-[#FFFFFF] relative">
              <div className="absolute bottom-0 p-[25px]">
                <span className="text-[12px] leading-[20px] font-normal opacity-[48%]">
                  24 May 2019{" "}
                  <FontAwesomeIcon icon={faCircle} className="w-[3px]" /> 8 mins
                </span>
                <h3 className="font-[700] text-[36px] leading-[54px]">
                  Event On A Budget: 7 Tips From The Great Depression
                </h3>
                <p className="text-[16px] leading-[28px] font-normal opacity-[48%]">
                  Aenean viverra rhoncus pede. Phasellus blandit leo ut odio.
                  Pellentesque commodo eros a enim. Phasellus consectetuer
                  vestibulum elit.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div>
                <div className="lg:w-[264px] lg:h-[364px] rounded-[16px]">
                  <img
                    className="rounded-[16px]"
                    src="/Images/IMG.png"
                    alt=""
                  />
                  <div>
                    <span className="text-[12px] leading-[20px] font-normal opacity-[48%]">
                      24 May 2019{" "}
                      <FontAwesomeIcon icon={faCircle} className="w-[3px]" /> 8
                      mins
                    </span>
                    <h3 className="font-[600] text-[15px] leading-[28px]">
                      Apply These 7 Secret Techniques To Improve Event
                    </h3>
                  </div>
                </div>

                <div className="lg:w-[264px] lg:h-[298px] rounded-[16px]">
                  <img
                    className="rounded-[16px]"
                    src="/Images/IMG2.png"
                    alt=""
                  />
                  <div>
                    <span className="text-[12px] leading-[20px] font-normal opacity-[48%]">
                      24 May 2019{" "}
                      <FontAwesomeIcon icon={faCircle} className="w-[3px]" /> 8
                      mins
                    </span>
                    <h3 className="font-[600] text-[15px] leading-[28px]">
                      Knowing These 7 Secrets Will Make Your Event Look Amazing
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="lg:w-[264px] lg:h-[298px] rounded-[16px]">
                  <img
                    className="rounded-[16px]"
                    src="/Images/ImageRatio.png"
                    alt=""
                  />
                  <div>
                    <span className="text-[12px] leading-[20px] font-normal opacity-[48%]">
                      24 May 2019{" "}
                      <FontAwesomeIcon icon={faCircle} className="w-[3px]" /> 8
                      mins
                    </span>
                    <h3 className="font-[600] text-[15px] leading-[28px]">
                      Event Doesn't Have To Be Hard. Read These 7 Tips
                    </h3>
                  </div>
                </div>

                <div className="lg:w-[264px] lg:h-[364px] rounded-[16px]">
                  <img
                    className="rounded-[16px]"
                    src="/Images/IMG4.png"
                    alt=""
                  />
                  <div>
                    <span className="text-[12px] leading-[20px] font-normal opacity-[48%]">
                      24 May 2019{" "}
                      <FontAwesomeIcon icon={faCircle} className="w-[3px]" /> 8
                      mins
                    </span>
                    <h3 className="font-[600] text-[15px] leading-[28px]">
                      Don't Waste Time! 7 Facts Until You Reach Your Event
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <ItemBlog
              imgName={"img5.png"}
              title="Apply These 7 Secret Techniques To Improve Event"
            />
            <ItemBlog
              imgName={"IMG.png"}
              title="Apply These 7 Secret Techniques To Improve Event"
            />
            <ItemBlog
              imgName={"IMG2.png"}
              title="Knowing These 7 Secrets Will Make Your Event"
            />
            <ItemBlog
              imgName={"IMG4.png"}
              title="Event Doesn't Have To Be Hard. Read These 7 Tips"
            />
            <ItemBlog
              imgName={"ImageRatio.png"}
              title="Don't Waste Time! 7 Facts Until You Reach Your Event"
            />
          </div>
          <div className="justify-end flex-1 lg:hidden mt-4 ">
            <Link
              href={"/"}
              className="text-[16px] flex gap-x-3 text-[#FF0054] float-right items-center"
            >
              <span>Xem thêm</span>
              <FontAwesomeIcon className="w-[8px]" icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-[1200px] lg:m-auto m-[15px] py-[100px]">
        <h1 className="font-[700] lg:text-[40px]  text-[24px] leading-[51.2px] text-[#0DC5AE] text-center">
          Đối tác của chúng tôi?
        </h1>
        <WrapperSlider className="cursor-pointer lg:my-[30px]">
          <Slider {...sliderSettings} className="flex items-center">
            <img src="/Images/partners/1.png" alt="" />
            <img src="/Images/partners/2.png" alt="" />
            <img src="/Images/partners/3.png" alt="" />
            <img src="/Images/partners/4.png" alt="" />
            <img src="/Images/partners/5.png" alt="" />
            <img src="/Images/partners/6.png" alt="" />
            <img src="/Images/partners/7.png" alt="" />
            <img src="/Images/partners/8.png" alt="" />
          </Slider>
        </WrapperSlider>
      </div>

      <div className="lg:relative bg-no-repeat bg-[url('/Images/bgContact.png')]  w-full bg-cover lg:bg-local bg-right">
        <div className="lg:w-[1200px] lg:m-auto m-[15px]  ">
          <div className="lg:flex lg:justify-between lg:p-[120px]">
            <div className=" lg:flex-1 lg:relative">
              <div className={lora.className}>
                <h1 className="font-[700] lg:text-[45px] pt-[20px] lg:text-startleading-[61.44px] text-[#FA541C] lg:text-[#0DC5AE] text-[24px] lg:text-left text-center">
                  Liên Hệ
                </h1>
              </div>
              <div className="items lg:absolute lg:top-[50%] lg:translate-y-[-50%]">
                <p className="text-white text-[16px] font-normal leading-[28px] mb-5 lg:w-[395px]">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ml-5 underline lg:no-underline">
                    dvkh.trueconnect@gmail.comcom
                  </span>
                </p>
                <div className="text-white text-[16px] font-normal leading-[28px] lg:w-[395px] flex">
                  <img
                    className="inline"
                    alt=""
                    src="/Images/icon/Location.svg"
                  />

                  <span className="ml-5">
                    80, 69b/22/45 Hoang Van Thai, Khuong Trung Thanh Xuan, Ha
                    Noi
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Input placeholder={"Họ tên"} />
              <Input placeholder={"Email của bạn"} />
              <Input placeholder={"Sô điện thoại"} />
              <Input placeholder={"Ghi chú "} />

              <div className="flex justify-center lg:justify-start pb-6">
                <button className="bg-[#0DC5AE] text-white p-3  mt-4 rounded-[8px]">
                  Gửi thông tin
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-8 bottom-[-5%] lg:block hidden">
            <Link href={"/"}>
              <Image width="60" height="60" alt="" src="/Images/Whatsapp.png" />
            </Link>
            <Link href={"/"}>
              <Image
                className="my-[20px]"
                width="60"
                height="60"
                alt=""
                src="/Images/mess.png"
              />
            </Link>
            <Link href={"/"}>
              <Image width="60" height="60" alt="" src="/Images/zalo.png" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
const WrapperSlider = styled.div`
  .slick-track {
    display: flex;
    align-items: center;

    .slick-slide + .slick-slide {
      margin: 0 15px;
    }
  }
  .slick-arrow {
    display: none !important;
  }
`;
