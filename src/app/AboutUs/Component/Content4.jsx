import { Lora } from "next/font/google";
import CartContent from "./CardContent";
import Title from "../../Components/Title";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Content4() {
  return (
    <div className="bg-[#F9F0EC] lg:p-11 pb-10">
      <div className="lg:w-[1200px] pt-4 lg:m-auto m-[15px]">
        <Title value={"NĂNG LỰC CỐT LÕI"} />

        <div className="lg:grid lg:grid-cols-3 lg:grid-rows-[auto_auto_0.6fr]  mt-10 gap-6">
          <div className=" col-start-1 col-end-2 row-start-1 row-end-3">
            <CartContent
              title={"1.Nền tảng"}
              content={
                "Đội ngũ của TrueConnect là sự kết hợp hài hoà của các nhân sự giàu kinh nghiệm, từng tham gia các dự án lớn trong lĩnh vực Công nghệ thông tin và các nhân sự trẻ giàu tính sáng tạo và có khả năng thích ứng cao. Đó là nền tảng giúp chúng tôi có thể phát triển ra các sản phẩm & dịch vụ chất lượng cao, đáp ứng phục vụ hàng triệu người dùng và nhanh chóng phù hợp với sự phát triển vũ bão của thị trường trong thời đại chuyển đổi số"
              }
            />
          </div>
          <div className=" col-start-2 col-end-3 row-start-1 row-end-3">
            <CartContent
              title={"2.Tham vọng"}
              content={
                "Chúng tôi có tham vọng trở thành người đứng đầu trong lĩnh vực công nghệ thông tin và các giải pháp công nghệ hỗ trợ quá trình thực hành kinh doanh. Đây cũng là động lực để chúng tôi tạo ra tiêu chuẩn khắt khe cho Hệ sinh thái TrueConnect – hoạt động mạnh mẽ, đầy đủ tính năng và cởi mở với sự thay đổi của xu hướng."
              }
              img={"imgcontent41.png"}
            />
          </div>
          <div className=" col-start-3 col-end-4 row-start-1 row-end-2">
            <CartContent
              title={"3.Thích nghi"}
              content={
                "TrueConnect chú trọng nắm bắt xu thế, nhu cầu của thị trường, và khả năng sử dụng nền tảng Công nghệ mới, đáp ứng được những nhu cầu phức tạp của người dùng. Hệ sinh thái TrueConnect được thiết kế để dễ dàng nâng cấp, tích hợp thêm các tính năng và các sản phẩm mới trong hệ sinh thái"
              }
            />
          </div>

          <div className=" col-start-3 col-end-4 row-start-2 row-end-4">
            <CartContent
              title={"4.Chất lượng dịch vụ"}
              content={
                "Sản phẩm của chúng tôi hướng tới nhu cầu, trải nghiệm và sự tiện ích của khách hàng khi cung cấp dịch vụ. TrueConnect không ngừng đổi mới và cải thiện chất lượng sản phẩm và dịch vụ, liên tục nâng cao các tiêu chuẩn và dịch vụ khi cung cấp cho khách hàng."
              }
              img={"imgcontent42.png"}
            />
          </div>
          <div className=" col-start-1 col-end-3 row-start-3 row-end-4">
            <CartContent
              title={"5. Tôn chỉ hành động:"}
              list={[
                {
                  lable: "Với khách hàng: ",
                  content:
                    "tối ưu chi phí, thúc đẩy áp dụng công nghệ thông tin, chuyển đổi số vào hoạt động kinh doanh của khách hàng, cải thiện tính bền vững của hoạt động kinh doanh phía khách hàng ",
                },
                {
                  lable: "Với nội bộ:",
                  content:
                    "Với nội bộ: Cùng đồng hành xây dựng sản phẩm, đồng thời trú trọng phát triển, nâng tầm bản thân, cùng chia sẻ lợi ích, khó khăn giữa doanh nghiệp và nhân sự",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content4;
