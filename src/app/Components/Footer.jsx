/* eslint-disable @next/next/no-img-element */
import { faChevronRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="wrapperFooter bg-white py-[50px]">
      <div className=" lg:w-[1200px] lg:m-auto m-[15px]">
        <div>
          <Image
            className="lg:m-0 m-auto"
            src="/Images/Logo.png"
            alt=""
            width="231"
            height="60"
          />
        </div>
        <div className="font-normal mt-6 lg:flex lg:justify-between lg:gap-[10%] hidden">
          <div>
            <h1 className="text-[20px] leading-[20px]">
              CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUECONNECT
            </h1>

            <p className="text-[#0DC5AE] mt-3 text-[16px] leading font-normal leading-[28px]">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ml-5 text-black">
                dvkh.trueconnect@gmail.comcom
              </span>
            </p>
            <div className="text-[#0DC5AE]  mt-3 text-[16px] font-normal leading-[28px]  flex">
              <img
                alt=""
                className="inline text-[#0DC5AE]"
                src="/Images/icon/Location1.svg"
              />

              <span className="ml-5  text-black">
                80, 69b/22/45 Hoang Van Thai, Khuong Trung Thanh Xuan, Ha Noi
              </span>
            </div>
            <p className="text-[#0DC5AE] mt-3 text-[16px] leading font-normal leading-[28px]">
              Hotline/Zalo:
              <span className="ml-3 text-black">0888 136 622</span>
            </p>
            <p className=" mt-3 text-[16px] leading font-normal leading-[28px]">
              Số giấy chứng nhận đăng ký kinh doanh:
            </p>
            <p className=" mt-3 text-[16px] leading font-normal leading-[28px]">
              Ngày cấp:
            </p>
            <p className=" mt-3 text-[16px] leading font-normal leading-[28px]">
              Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội
            </p>
            <p className=" mt-7 text-[16px] leading font-normal leading-[28px]">
              © 2023 All Right Reserved True Connect
            </p>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between">
              <div>
                <h5 className="text-[13px] font-[600] leading-[24px] mb-5">
                  Tài liệu
                </h5>
                <Link
                  href={"/"}
                  className="text-[13px] font-normal leading-[24px] block mt-3"
                >
                  Tài liệu hướng dẫn
                </Link>
              </div>
              <div>
                <h5 className="text-[13px] font-[600] leading-[24px] mb-5">
                  TrueConnect
                </h5>
                <Link
                  href={"/"}
                  className="text-[13px] font-normal leading-[24px] block mt-3"
                >
                  Chính sách bảo mật
                </Link>
                <Link
                  href={"/"}
                  className="text-[13px] font-normal leading-[24px] block mt-3"
                >
                  Chính sách thanh toán và bán hàng
                </Link>
                <Link
                  href={"/"}
                  className="text-[13px] font-normal leading-[24px] block mt-3"
                >
                  Điều khoản và điều kiện sử dụng
                </Link>
              </div>
            </div>
            <div className="flex items-end flex-1">
              <img className="mx-[10px]" src="/Images/tiktok.png" alt="" />
              <img className="mx-[10px]" src="/Images/facebook.png" alt="" />
              <img className="mx-[10px]" src="/Images/youtube.png" alt="" />
              <div className="bg-[#919EAB14] rounded-[9px] lg:h-[50px] flex items-center justify-around">
                <input
                  className="lg:w-[80%] p-[5px] outline-none bg-[#919EAB14]"
                  placeholder="Email"
                  size={40}
                />
                <button className="lg:w-[45px] lg:h-[45px] p-3 bg-[#0DC5AE] rounded-[8px]">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-white"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="font-normal mt-6 lg:hidden flex lg:justify-between lg:gap-[10%]">
          <div>
            <h1 className=" text-center text-[20px] leading-[20px] font-normal">
              CTCP CÔNG NGHỆ TRUECONNECT
            </h1>
            <p className="text-[#0DC5AE] mt-3 text-[13px]  ml-10 leading font-normal leading-[28px]">
              Hotline/Zalo:
              <span className="ml-3 text-black">0888 136 622</span>
            </p>
            <p className="text-[#0DC5AE] mt-3 text-[13px] ml-10 leading font-normal leading-[28px]">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ml-5 text-black">
                dvkh.trueconnect@gmail.comcom
              </span>
            </p>
            <div className="text-[#0DC5AE]  mt-3  ml-10 text-[13px] font-normal leading-[28px]  flex">
              <img
                alt=""
                className="inline text-[#0DC5AE]"
                src="/Images/icon/Location1.svg"
              />

              <span className="ml-5  text-black">
                80, 69b/22/45 Hoang Van Thai, Khuong Trung Thanh Xuan, Ha Noi
              </span>
            </div>

            <div className="flex justify-center flex-1 my-5">
              <img
                className=" w-[34px] h-[34px] mx-[10px]"
                src="/Images/tiktok.png"
                alt=""
              />
              <img
                className="w-[34px] h-[34px] mx-[10px]"
                src="/Images/facebook.png"
                alt=""
              />
              <img
                className=" w-[34px] h-[34px] mx-[10px]"
                src="/Images/youtube.png"
                alt=""
              />
            </div>

            <div className="w-fit m-auto">
              <p className=" mt-3 text-[16px] leading font-normal leading-[28px]">
                Số giấy chứng nhận đăng ký kinh doanh:
              </p>
              <p className=" mt-3 text-[16px] leading font-normal leading-[28px]">
                Ngày cấp:
              </p>
              <p className=" mt-3 text-[16px] leading font-normal leading-[28px]">
                Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội
              </p>
            </div>
            <div className="bg-[#919EAB14] rounded-[9px] lg:h-[50px] h-[70px] flex items-center justify-around">
              <input
                className="w-full p-[5px] text-[25px] leading-5 outline-none bg-[#919EAB14]"
                placeholder="Email"
              />
              <button className="lg:w-[45px] lg:h-[45px] lg:p-3 bg-[#0DC5AE] rounded-[8px] w-[48px] h-[48px]">
                <FontAwesomeIcon icon={faChevronRight} className="text-white" />
              </button>
            </div>
            <p className=" mt-7 text-[13px] text-center leading font-normal leading-[28px]">
              © 2023 All Right Reserved True Connect
            </p>
            <div className="text-[10px] text-[#B4B4B4] text-center">
              <Link href={"/"}>Tài liệu hướng dẫn </Link>
              <Link className="ml-[10px]" href={"/"}>
                Chính sách bảo mật{" "}
              </Link>
              <p>
                <Link href={"/"}>Điều khoản và điều kiện sử dụng</Link>
              </p>
              <p>
                <Link href={"/"}>Chính sách thanh toán và bán hàng </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
