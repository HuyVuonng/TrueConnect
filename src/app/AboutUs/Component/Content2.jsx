"use client";
import { Lora } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Title from "../../Components/Title";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Content2() {
  const list = [
    {
      id: 1,
      title:
        "Sản phẩm: Danh thiếp điện tử TrueConnect; Website mini tích hợp gian hàng online",
    },
    {
      id: 2,
      title: "Giải pháp: Quản trị doanh nghiệp (HRM, ERP)",
    },
    {
      id: 3,
      title:
        "Dịch vụ: Dịch vụ phát triển website, dịch vụ Công nghệ thông tin cho thuê, dịch vụ quản trị, vận hành và tối ưu hệ thống (Managed Services), dịch vụ tư vấn chuyển đổi số",
    },
  ];
  const [activeTab, setActiveTab] = useState(3);
  return (
    <div className="lg:pb-5 pb-10">
      <Title value={"Giới thiệu"} />
      <div className="lg:flex hidden">
        <span className={lora.className}>
          <span className="lg:font-bold text-[128px] leading-none">T</span>
        </span>
        <span className="mt-[10px] text-[16px] font-normal leading-[30px] c">
          hành lập vào năm 2022, Công ty Cổ phần Giải pháp Công nghệ TrueConnect
          hoạt động với mong muốn thúc đẩy quá trình kinh doanh và vận hành của
          Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ Công nghệ thông
          tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân) tới quy mô doanh
          nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh nghiệp lớn, giúp
          Quý khách mở rộng mạng lưới kết nối và phát triển kinh doanh.
        </span>
      </div>
      <p className="mt-[10px] text-[16px] font-normal leading-[30px] text-[#212B36] lg:hidden">
        Thành lập vào năm 2022, Công ty Cổ phần Giải pháp Công nghệ TrueConnect
        hoạt động với mong muốn thúc đẩy quá trình kinh doanh và vận hành của
        Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ Công nghệ thông
        tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân) tới quy mô doanh
        nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh nghiệp lớn, giúp Quý
        khách mở rộng mạng lưới kết nối và phát triển kinh doanh.
      </p>
      <p className="mt-[10px] text-[16px] font-normal leading-[30px] text-[#212B36]">
        Chúng tôi hiểu được giá trị của việc có một hệ sinh thái phần mềm phong
        phú và đầy đủ với nhu cầu của Quý khách hàng. Đặc biệt với các cá nhân
        kinh doanh và doanh nghiệp nhỏ, tính dễ sử dụng và chi phí hợp lý cũng
        đóng vai trò quan trọng trong quá trình hoạt động.
      </p>
      <p className="mt-[10px] text-[16px] font-normal leading-[30px] text-[#212B36]">
        Thấu hiểu nhu cầu và các vấn đề mà khách hàng gặp phải, Công ty Cổ phần
        Giải pháp Công nghệ TrueConnect đã dành thời gian nghiên cứu và phát
        triển Hệ sinh thái TrueConnect gồm nhiều ứng dụng, phần mềm liên kết
        chặt chẽ với nhau, giúp Quý khách hàng có trải nghiệm tốt trong quá
        trình vận hành và phát triển kinh doanh.
      </p>
      <p className="mt-[10px] text-[16px] font-normal leading-[30px] text-[#212B36]">
        Hệ sinh thái TrueConnect có thể được sử dụng hoàn toàn trên điện thoại
        và bao gồm các sản phẩm, giải pháp và dịch vụ sau:
      </p>
      <div className="lg:flex lg:justify-between mt-8">
        <Image
          className="mt-5 lg:mt-0"
          src="/Images/AboutUS/imgcontent21.png"
          width={343}
          height={261}
          alt=""
        />
        <Image
          className="mt-5 lg:mt-0"
          src="/Images/AboutUS/imgcontent22.png"
          width={343}
          height={261}
          alt=""
        />
        <Image
          className="mt-5 lg:mt-0"
          src="/Images/AboutUS/imgcontent23.png"
          width={343}
          height={261}
          alt=""
        />
      </div>
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
      <p className="mt-10 text-4 font-normal leading-[30px] text-justify">
        Hệ sinh thái TrueConnect được phát triển bởi công ty phần mềm với hơn 30
        nhân sự công nghệ thông tin, trong đó đội ngũ sáng lập đã có kinh nghiệm
        nhiều năm trong lĩnh vực Công nghệ thông tin, có kinh nghiệm phát triển,
        triển khai và vận hành những dự án lớn hàng triệu người dùng.
      </p>
      <p className="mt-5 text-4 font-normal leading-[30px] text-justify lg:hidden">
        Chúng tôi đảm bảo luôn lắng nghe nhu cầu của khách hàng để có thể phát
        triển, thích ứng và đồng hành cùng sự phát triển của Quý khách hàng
        trong thời đại chuyển đổi số. .
      </p>
      <p className="mt-5 text-4 font-normal leading-[30px] text-justify lg:hidden">
        TrueConnect, đối tác đồng hành, kết nối và đáng tin cậy của Quý khách
        hàng
      </p>
    </div>
  );
}

export default Content2;
const WrapItem = styled.div`
  border-left-color: ${(props) =>
    props.$active === "true" ? "#FF5722" : "#DFDFDF"};
  div {
    background-color: ${(props) =>
      props.$active === "true" ? "#0DC5AE" : "transparent"};
    color: ${(props) => (props.$active === "true" ? "white" : "black")};
  }
`;
