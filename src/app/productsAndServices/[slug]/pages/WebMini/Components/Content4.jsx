import Title from "../../../../../Components/Title";
import { Lora } from "next/font/google";
import DiffirentCart from "./DiffirentCart";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Content4() {
  return (
    <div className="mt-10 pb-20">
      <Title value={"Điểm khác biệt của TrueConnect"} />
      <div className={lora.className}>
        <div className="grid grid-cols-[2fr_0.5fr_0.5fr] gap-2 mt-12">
          <span className="font-[600] lg:text-[24px] text-[12px] leading-[30.72px] text-center col-start-2 col-end-3">
            Sản phẩm khác
          </span>
          <span className="font-[600] lg:text-[24px] text-[12px] leading-[30.72px] text-center col-start-3 col-end-4">
            TrueConnect
          </span>
        </div>
      </div>
      <DiffirentCart
        title={"Xây dựng website bán hàng trực tuyến"}
        other={"no"}
        TrueConnect={"yes"}
      />
      <DiffirentCart
        title={"Phân loại thông tin/sản phẩm theo danh mục"}
        other={"no"}
        TrueConnect={"yes"}
      />
      <DiffirentCart
        title={"Đăng tải bài viết/sản phẩm"}
        other={"no"}
        TrueConnect={"yes"}
      />
      <DiffirentCart
        title={"Tạo Landing page ngay trên chiếc điện thoại của mình"}
        other={"no"}
        TrueConnect={"yes"}
      />
      <DiffirentCart
        title={"Cập nhật thông tin trạng thái sản phẩm"}
        other={"no"}
        TrueConnect={"yes"}
      />
      <DiffirentCart
        title={"Quản lý bài đăng/ Quản lý đơn hàng"}
        other={"no"}
        TrueConnect={"yes"}
      />
      <DiffirentCart
        title={"Hỗ trợ xây dựng mạng lưới khách hàng,mạng lưới cộng đồng"}
        other={"no"}
        TrueConnect={"yes"}
      />
    </div>
  );
}

export default Content4;
