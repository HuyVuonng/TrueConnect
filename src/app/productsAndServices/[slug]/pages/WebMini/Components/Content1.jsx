import Image from "next/image";
import Title from "../../../../../Components/Title";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Content1() {
  return (
    <div className="mt-10 pb-20">
      <Title value={"Giới thiệu"} />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 mt-11">
        <Image
          className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2"
          src="/Images/ProductsAndServices/imageContent11.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt=""
        />
        <div className="lg:w-[447px] justify-self-start row-start-1 row-end-2 lg:row-start-2 lg:row-end-3">
          <div className={lora.className}>
            <h2 className="font-[600] lg:text-[32px] text-[18px] leading-[41px]">
              Sản phẩm Website mini TrueConnect
            </h2>
          </div>
          <p className=" mt-3 font-normal lg:text-[16px] text-[14px] leading-[30px] text-justify">
            Dịch vụ phát triển website mini cung cấp cho khách hàng giải pháp
            đơn giản, tiện lợi để xây dựng trang web minicho doanh nghiệp hoặc
            cá nhân. Website mini thu hút sự chú ý của người truy cập tới một
            nội dung cụ thể, tránh dàn trải và tạo ấn tượng tốt nhất về sản phẩm
            của Quý khách hàng
          </p>
        </div>
        <div className="lg:w-[447px] justify-self-end">
          <div className={lora.className}>
            <h2 className="font-[600] lg:text-[32px] text-[18px] leading-[41px]">
              Sản phẩm Website mini TrueConnect
            </h2>
          </div>
          <p className=" mt-3 font-normal  lg:text-[16px] text-[14px] leading-[30px] text-justify">
            TrueConnect cho phét tích hợp gian hàng online trên website mini
            nhằm đơn giản hoá hoạt động thương mạicủa Quý khách hàng, đồng thời
            giúp người mua có thểnhanh chóng tiếp cận sản phẩm mong muốn và thực
            hiện việc mua hàng
          </p>
        </div>
        <Image
          src="/Images/ProductsAndServices/imageContent12.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt=""
        />
      </div>

      <div className="lg:flex justify-between mt-24 hidden">
        <div className="w-[343px] h-[261px] bg-[#D9D9D9] rounded-3xl"></div>
        <div className="w-[343px] h-[261px] bg-[#D9D9D9] rounded-3xl"></div>
        <div className="w-[343px] h-[261px] bg-[#D9D9D9] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default Content1;
