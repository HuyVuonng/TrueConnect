import CartContent from "./CardContent";
import Title from "../../../../../Components/Title";

function Content2() {
  return (
    <div>
      <Title value={"Tính năng sản phẩm"} />
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:col-start-2 lg:col-end-3">
          <CartContent
            title={"Xây dựng website bán hàng trực tuyến"}
            content={`Website mini bao gồm thông tin sản phẩm, bài đăng, tích hợp các chức năng dành cho bán hàng trực tuyến.Thao tác dễ dàng trên điện thoại giúp Quý khách hàng có thể tạo showcase trực quan, nhanh chóng.
    \nWebsite Mini là một trang web đơn trang, tập trung vào nội dung quan trọng nhất. Bạn có thể sử dụng nó để giới thiệu sản phẩm, dịch vụ hoặc sự kiện đặc biệt của mình.`}
            left
          />
        </div>
        <div className="lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
          <CartContent
            title={"Khả năng tùy chỉnh "}
            content={`Quý khách hàng cũng có thể tùy chỉnh thông tin logo, banner và tên công ty để phù hợp với thương hiệu của mình. Quý khách hàng cũng có thể đăng tải một số lượng bài viết hoặc sản phẩm theo nhu cầu của mình.`}
            right
          />
        </div>
        <div className="lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3">
          <CartContent
            title={"Phân loại sản phẩm theo nhóm"}
            content={`Quý khách hàng có thể phân loại thông tin. Các nhóm sản phẩm cũng có thể thêm, sửa, xóa, đổi vị trí một cách dễ dàng.`}
            left
          />
        </div>
        <div className="lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5">
          <CartContent
            title={"Cập nhật thông tin trạng thái sản phẩm "}
            content={`Quý khách có thể cập nhật trạng thái như còn hàng, hết hàng hay ẩn sản phẩm khỏi danh mục bán hàng. Quý khách có thể theo dõi trạng thái sản phẩm trong danh mục quản lý của mình.`}
            right
          />
        </div>
      </div>
    </div>
  );
}

export default Content2;
