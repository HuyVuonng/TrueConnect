import Image from "next/image";
import { Lora, Josefin_Sans } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const JosefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Content3() {
  return (
    <div className="w-full bg-[#F9F0EC] lg:p-11 pb-10">
      <div className="lg:w-[1200px] pt-4 lg:m-auto m-[15px] flex gap-16 lg:flex-row flex-col-reverse">
        <Image
          src="/Images/ProductsAndServices/imageVideo.png"
          width={589}
          height={393}
          alt=""
        />
        <div className="flex flex-col gap-9 self-center">
          <div className={lora.className}>
            <h4 className="font-[600] lg:text-[32px] text-[24px] leading-[41px] text-[#0DC5AE]">
              Giới thiệu về Webmini
            </h4>
          </div>
          <div className={JosefinSans.className}>
            <p className="font-[400] lg:text-[18px] text-[14px] leading-[23.4px] text-[#525560] text-justify">
              Website Mini là một trang web đơn trang, tập trung vàonội dung
              quan trọng nhất. Bạn có thể sử dụng nó để giớithiệu sản phẩm, dịch
              vụ hoặc sự kiện đặc biệt của mình.Với giao diện thân thiện và tốc
              độ tải trang nhanh,Website Mini tạo ra trải nghiệm tốt cho khách
              hàng
            </p>
            <button className="bg-[#0DC5AE] mt-9 text-white font-[700] text-[14px] leading-[20px] p-2 relative left-[50%] translate-x-[-50%] lg:left-0 lg:translate-x-0">
              Nâng cấp ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content3;
