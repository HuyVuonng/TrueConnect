"use client";
import { Lora } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Content3() {
  const list = [
    {
      id: 1,
      title:
        "Đơn giản hoá và thống nhất trải nghiệm ứng dụng Công nghệ Thông tin vào mọi lĩnh vực trong kinh doanh và cuộc sống",
    },
    {
      id: 2,
      title:
        "Hỗ trợ thúc đẩy chuyển đổi số cho các cá nhân kinh doanh và các doanh nghiệp vừa và nhỏ (SME)",
    },
    {
      id: 3,
      title:
        "Phổ biến áp dụng Công nghệ thông tin vào công việc kinh doanh và quản trị doanh nghiệp",
    },
  ];
  const [activeTab, setActiveTab] = useState(2);
  return (
    <div className="pb-20">
      <div className="flex justify-between mb-6 lg:flex-row flex-col">
        <div className="lg:self-end">
          <div className={lora.className}>
            <div className="lg:inline-block flex items-center flex-col">
              <h1 className="font-[700] text-[#0DC5AE] lg:text-[32px] text-[24px] leading-[51.2px]">
                TẦM NHÌN VÀ SỨ MỆNH
              </h1>
              <div className="w-[48%] border-[#FF0054] border-[2px]"></div>
            </div>
          </div>
        </div>
        <Image
          className="mt-5 lg:mt-0 translate-y-[20%]"
          src="/../Images/AboutUs/imgcontent31.png"
          width={358}
          height={269}
          alt=""
        />
      </div>
      <div className="flex mt-14 items-end">
        <Image
          className="mt-5 lg:mt-0"
          src="/../Images/AboutUs/muiten.png"
          width={51}
          height={42}
          alt=""
        />
        <div className={lora.className}>
          <span className="font-[600] text-[32px] ml-3 leading-[40px] text-[#FF0054]">
            SỨ MỆNH
          </span>
        </div>
      </div>
      <p className="text-[16px] font-normal mt-5 leading-[30px] text-justify">
        TrueConnect không ngừng sáng tạo và phát triển để đem lại giá trị cho
        Quý khách hàng, Quý đối tác và xã hội bao gồm:
      </p>
      <div className=" lg:mt-[100px] mt-10">
        {list?.map((item) => (
          <WrapItem
            key={item.id}
            className="flex lg:justify-end  lg:h-[90px] border-l-2"
            $active={item.id === activeTab ? "true" : "false"}
          >
            <div
              className="lg:w-[311px]  lg:flex flex-1 items-center lg:ml-9 ml-6 text-[14px] lg:text-[20px] p-4  lg:pl-[30px] cursor-pointer font-[600] leading-[30px]"
              onClick={() => setActiveTab(item.id)}
            >
              <span>{item.title}</span>
            </div>
          </WrapItem>
        ))}
        <div className="inline-block rotate-[-90deg] translate-x-[-50%] translate-y-[50%]">
          <span className="text-[14px] font-[500] leading-[28px]">
            0{activeTab}
          </span>
          <span className="text-[12px] text-[#9A9A9A] font-[400] leading-[28px]">
            /0{list.length}
          </span>
        </div>
      </div>

      <div className={lora.className}>
        <div className="flex mt-20 items-end">
          <Image
            className="mt-5 lg:mt-0"
            src="/../Images/AboutUs/muiten.png"
            width={51}
            height={42}
            alt=""
          />
          <span className="font-[600] text-[32px] ml-3 leading-[40px] text-[#FF0054]">
            TẦM NHÌN
          </span>
        </div>
      </div>
      <p className="text-[16px] mt-6 font-normal leading-[30px] text-justify">
        Trở thành Đối tác đồng hành hàng đầu/top 1 Việt Nam về hệ sinh thái công
        nghệ và các giải pháp kinh doanh toàn diện, đơn giản, thống nhất dành
        cho cá nhân, tổ chức và doanh nghiệp thực hiện hoạt động kinh doanh.
      </p>
    </div>
  );
}

export default Content3;
const WrapItem = styled.div`
  border-left-color: ${(props) =>
    props.$active === "true" ? "#FF5722" : "#DFDFDF"};
  div {
    background-color: ${(props) =>
      props.$active === "true" ? "#0DC5AE" : "transparent"};
    color: ${(props) => (props.$active === "true" ? "white" : "black")};
  }
`;
