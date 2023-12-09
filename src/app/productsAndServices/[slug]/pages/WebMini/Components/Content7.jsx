import Title from "../../../../../Components/Title";

import CartComment from "./CartComment";
function COntent7() {
  return (
    <div className="mt-10 pb-20">
      <Title value={"Đánh giá của Khách hàng "} />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-6">
        <CartComment />
        <CartComment />
        <CartComment />
      </div>
    </div>
  );
}

export default COntent7;
