/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import TrueConnect from "../TrueConnext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function HeSinhThai() {
  const list = [
    {
      id: 1,
      title: "Danh thiếp điện tử",
    },
    {
      id: 2,
      title: "Website mini",
    },
    {
      id: 3,
      title: "Web doanh nghiệp",
    },
    {
      id: 4,
      title: "Dịch vụ tư vấn Chuyển đổi số",
    },
    {
      id: 5,
      title: "Phòng CNTT thuê ngoài ",
    },
    {
      id: 6,
      title: "Ứng dụng cho doanh nghiệp SME",
    },
  ];
  const [activeTab, setActiveTab] = useState(3);
  return (
    <div className="wrapperContent3 bg-[#F9F0ED] py-10">
      <div className="content3 lg:w-[1200px] lg:m-auto m-[15px]">
        <h2 className="text-[32px] text-[#0DC5AE] font-[700]">
          Hệ sinh thái <TrueConnect />
        </h2>

        <div className="lg:flex lg:justify-around">
          <div className="lg:w-[350px] lg:mt-[100px]">
            {list?.map((item) => (
              <WrapItem
                key={item.id}
                className="flex lg:justify-end  lg:h-[50px] border-l-2"
                $active={item.id === activeTab ? "true" : "false"}
              >
                <div
                  className="lg:w-[311px] lg:flex flex-1 items-center lg:ml-9 ml-6 text-[14px] p-4  lg:pl-[30px] cursor-pointer font-[600] leading-[30px]"
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
          <div className="lg:translate-y-[-10%]  relative">
            <Link
              href={"/"}
              className="text-[16px] flex gap-x-3 text-[#FF0054] right-0 top-[10%] absolute items-center cu"
            >
              <span>Xem thêm</span>
              <FontAwesomeIcon className="w-[8px]" icon={faChevronRight} />
            </Link>
            <img src="/Images/PhotoRoom.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeSinhThai;

const WrapItem = styled.div`
  border-left-color: ${(props) =>
    props.$active === "true" ? "#FF5722" : "#DFDFDF"};
  div {
    background-color: ${(props) =>
      props.$active === "true" ? "#FF5722" : "transparent"};
    color: ${(props) => (props.$active === "true" ? "white" : "black")};
  }
`;
