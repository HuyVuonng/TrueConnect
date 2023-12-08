import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Content1() {
  return (
    <div className="mt-10 pb-20">
      <div className={lora.className}>
        <div className="lg:inline-block flex items-center flex-col">
          <h1 className="font-[700] text-[#0DC5AE] text-[32px] leading-[51.2px]">
            Về chúng tôi
          </h1>
          <div className="w-[48%] border-[#FF0054] border-[2px]"></div>
        </div>
      </div>
      <div className="flex justify-between mt-5 flex-col lg:flex-row">
        <div className="lg:w-[50%]">
          <div className={lora.className}>
            <h3 className="lg:text-[24px] text-[18px] font-[600] text-center lg:text-start leading-[40px]">
              Kết sức mạnh, Nối thành công
            </h3>
          </div>
        </div>
        <div className="lg:w-[50%] font-normal text-[14px] leading-[28px] text-[#637381] flex lg:justify-between flex-col lg:flex-row">
          <span className="inline-block lg:w-[242px]">
            Nền tảng hệ thống tốt, nâng cấp thường xuyên, linh hoạt; cầu thị
          </span>
          <span className="inline-block lg:w-[242px]">
            Donec vitae sapien ut libero venenatis faucibus. Vestibulum
            fringilla pede sit amet augue. Vivamus euismod mauris.
          </span>
        </div>
      </div>
      <div className=" mt-11 bg-no-repeat bg-[url('/../Images/AboutUs/img1.png')] rounded-[8px] w-full  h-[648px] bg-cover flex justify-end">
        <div className="lg:w-[550px] w-full h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,1))] flex justify-center items-center">
          <div className="flex  flex-col w-[285px] lg:w-fit">
            <div>
              <h2 className="font-bold lg:text-[32px] text-[24px] leading-[48px] text-[#FFFFFF]">
                Hệ sinh thái công nghệ
              </h2>
              <span className="font-[600] text-[12px] leading-[32px] text-[#FFFFFF]">
                Kết sức mạnh - Nối thành công
              </span>
            </div>
            <div className="lg:w-[416px] flex flex-col gap-10">
              <div className="flex justify-between">
                <div className="lg:w-[50%] ">
                  <p className="text-[#FA541C] lg:text-[40px] text-[32px] font-bold leading-[64px] lg:text-start text-center">
                    5000+
                  </p>
                  <p className="text-[#919EAB] text-[14px] font-normal leading-[26px]">
                    Người dùng
                  </p>
                </div>
                <div className="lg:w-[50%] ">
                  <p className="text-[#FA541C] lg:text-[40px] text-[32px] font-bold leading-[64px] lg:text-start text-center">
                    50+
                  </p>
                  <p className="text-[#919EAB] text-[14px] font-normal leading-[26px]">
                    Thông điệp truyền tải
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="lg:w-[50%] ">
                  <p className="text-[#FA541C] lg:text-[40px] text-[32px] font-bold leading-[64px] lg:text-start text-center">
                    20+
                  </p>
                  <p className="text-[#919EAB] text-[14px] font-normal leading-[26px]">
                    Đối tác công nghệ
                  </p>
                </div>
                <div className="lg:w-[50%] ">
                  <p className="text-[#FA541C] lg:text-[40px] text-[32px] font-bold leading-[64px] lg:text-start text-center">
                    8+
                  </p>
                  <p className="text-[#919EAB] text-[14px] font-normal leading-[26px]">
                    Ứng dụng cho hệ sinh thái
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content1;
