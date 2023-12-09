import ItemServices from "./ItemServices";
function Services() {
  const servicesList = [
    {
      title: "Website Mini",
      des: "Tạo website đơn giản tích hợp gian hàng online",
      img: "web.png",
      id: 1,
    },
    {
      title: "Danh thiếp điện tử",
      des: "Xây dựng thương hiệu cá nhân trên mọi nền tảng",
      img: "img2.png",
      id: 2,
    },
    {
      title: "Dịch vụ Phát triển website",
      des: "Xây dựng và nhập liệu website phù hợp cho doanh nghiệp",
      img: "img3.png",
      id: 3,
    },
    {
      title: "Dịch vụ Công nghệ thông tin cho thuê",
      des: "Phát triển phần mềm CNTT phục vụ cho Doanh nghiệp",
      img: "img4.png",
      id: 4,
    },
    {
      title: "Dịch vụ Quản trị, vận hành và tối ưu hệ thống (Managed Services)",
      des: "",
      img: "img5.png",
      id: 5,
    },
    {
      title: "Dịch vụ Tư vấn chuyển đổi số",
      des: "Tư vấn tận dụng Công nghệ để tối ưu hóa hoạt động doanh nghiệp",
      img: "img6.png",
      id: 6,
    },
  ];

  return (
    <div className="lg:w-[90%]  my-16 rounded-3xl m-auto bg-white  ">
      <div className="grid lg:grid-cols-3 grid-cols-1 p-10 gap-8 gap-y-16">
        {servicesList?.map((service) => (
          <ItemServices
            key={service.id}
            title={service.title}
            des={service.des}
            img={service.img}
            href={service.id.toString()}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
