import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../../../../Components/Title";
import { Raleway } from "next/font/google";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Content8() {
  return (
    <div className="mt-10 pb-20">
      <Title value={"Liên hệ ngay với chúng tôi"} />
      <div className="lg:flex mt-10 gap-6">
        <div className="lg:w-[60%] bg-[#0DC5AE] p-10 flex flex-col gap-4">
          <div className={raleway.className}>
            <div className="rounded-lg bg-white p-3">
              <input
                className="w-full leading-[30px] text-[16px] font-normal  outline-none "
                placeholder="Họ và tên"
              />
            </div>
          </div>
          <div className={raleway.className}>
            <div className="rounded-lg bg-white p-3">
              <input
                className="w-full leading-[30px] text-[16px] font-normal  outline-none "
                placeholder="Email"
              />
            </div>
          </div>
          <div className={raleway.className}>
            <div className="rounded-lg bg-white p-3">
              <input
                className="w-full leading-[30px] text-[16px] font-normal  outline-none "
                placeholder="Số điện thoại"
              />
            </div>
          </div>
          <div className={raleway.className}>
            <div className="rounded-lg bg-white p-3 h-[160px]">
              <textarea
                className="w-full h-full leading-[30px] text-[16px] font-normal  outline-none resize-none"
                placeholder="Lời nhắn"
              />
            </div>
          </div>
          <button className="font-normal text-[16px] w-fit p-2 rounded-[5px] leading-[30px] text-white bg-[#FF0054] inline-block">
            Gửi ngay
          </button>
        </div>
        <div className=" mt-10 lg:w-[40%] flex flex-col gap-5">
          <div className="flex gap-3">
            <div className="w-[72px] h-[72px] bg-[#F7F7F7] rounded-[10px] flex justify-center items-center">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className=" w-[32px] h-[32px] inline-block rotate-45 text-[#FF0054]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className={raleway.className}>
                <p className="font-bold lg:text-[20px] text-[16px] leading-[20px] text-[#FF0054]">
                  Hotline
                </p>
              </div>
              <p className="font-normal lg:text-[16px] text-[14px] leading-[30px] mt-3">
                0888 136 622
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-[72px] h-[72px] bg-[#F7F7F7] rounded-[10px] flex justify-center items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className=" w-[32px] h-[32px]  text-[#FF0054]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className={raleway.className}>
                <p className="font-bold lg:text-[20px] text-[16px] leading-[20px] text-[#FF0054]">
                  Gửi Email
                </p>
              </div>
              <p className="font-normal lg:text-[16px] text-[14px] leading-[30px] mt-3">
                dvkh.trueconnect@gmail.com
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-[72px] h-[72px] bg-[#F7F7F7] rounded-[10px] flex justify-center items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className=" w-[32px] h-[32px]  text-[#FF0054]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className={raleway.className}>
                <p className="font-bold lg:text-[20px] text-[16px] leading-[20px] text-[#FF0054]">
                  Địa chỉ của chúng tôi
                </p>
              </div>
              <p className="font-normal lg:text-[16px] text-[14px] leading-[30px] mt-3">
                80, 22/45/69B Hoàng Văn Thái
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col gap-5">
            <div className={raleway.className}>
              <p className="font-bold lg:text-[24px] text-[20px] leading-[25px] text-center text-[#0E1F51]">
                Follow chúng tôi
              </p>
            </div>
            <div className="flex gap-6 justify-center">
              <Link href={"/"}>
                <div className="w-[62px] h-[62px] bg-[#FF0054] flex justify-center items-center rounded-[10px]">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className=" w-[22px] h-[22px]  text-white"
                  />
                </div>
              </Link>
              <Link href={"/"}>
                <div className="w-[62px] h-[62px] bg-[#FF0054] flex justify-center items-center rounded-[10px]">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className=" w-[22px] h-[22px]  text-white"
                  />
                </div>
              </Link>
              <Link href={"/"}>
                <div className="w-[62px] h-[62px] bg-[#FF0054] flex justify-center items-center rounded-[10px]">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className=" w-[22px] h-[22px]  text-white"
                  />
                </div>
              </Link>
              <Link href={"/"}>
                <div className="w-[62px] h-[62px] bg-[#FF0054] flex justify-center items-center rounded-[10px]">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className=" w-[22px] h-[22px]  text-white"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content8;
