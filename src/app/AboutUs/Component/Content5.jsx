import { Lora } from "next/font/google";
import Image from "next/image";
import CardContent5 from "./CardContent5";
import Title from "../../Components/Title";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Content5() {
  return (
    <div className="py-10">
      <Title value={"GIÁ TRỊ CỐT LÕI"} />

      <div className="relative">
        <div className="mt-6 lg:flex">
          <div className="lg:flex justify-between">
            <div className="lg:w-[calc(100%_/_3)] ">
              <CardContent5
                title={"Tôn trọng (Respect)"}
                content={
                  "Tôn trọng bản thân, tôn trọng khách hàng, tôn trọng pháp luật"
                }
                right
                color={"#FDAB76"}
              />
              <CardContent5
                title={"Lắng nghe (Listen)"}
                content={
                  "Lắng nghe để thấu hiểu, lắng nghe để đổi thay, lắng nghe để phát triển"
                }
                right
                color={"#69F290"}
              />
              <CardContent5
                title={"Chia sẻ (Share)"}
                content={
                  "Chia sẻ để hỗ trợ khách hàng, chia sẻ để phát triển nội bộ, cùng hướng về mục tiêu chung"
                }
                right
                color={"#77F0ED"}
              />
            </div>

            <div className="lg:w-[calc(100%_/_3)] ">
              <CardContent5
                title={"Đồng hành (Company)"}
                content={
                  "Đồng hành và phát triển cùng sự phát triển của khách hàng, đối tác"
                }
                left
                color={"#77F0ED"}
              />
              <CardContent5
                title={"Sáng tạo (Creative)"}
                content={
                  "Chủ động và liên tục đổi mới để đáp ứng nhu cầu ngày càng đa dạng và sự phát triển của thị trường"
                }
                left
                color={"#69F290"}
              />
              <CardContent5
                title={"Nâng tầm (Elevate):"}
                content={
                  "Không ngừng học hỏi và phát triển để nâng cao tiêu chuẩn và chất lượng của sản phẩm, dịch vụ cho khách hàng"
                }
                left
                color={"#FDAB76"}
              />
            </div>
          </div>
        </div>
        <Image
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:block hidden"
          src="/Images/AboutUS/imgcontent51.png"
          width={343}
          height={261}
          alt=""
        />
      </div>
    </div>
  );
}

export default Content5;
