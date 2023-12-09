import Title from "../../../../../Components/Title";
import ServiceCard from "./ServiceCard";
function Content6() {
  const listServices = [
    {
      id: 1,
      title: "Webmini 1",
      price: "1.000.000",
      des: [
        { id: 1, service: "1 Website" },
        { id: 2, service: "1 Danh thiếp điện tử" },
        { id: 3, service: "Phân loại sản phẩm theo 2 nhóm" },
      ],
    },
    {
      id: 2,
      title: "Webmini 2",
      price: "2.000.000",
      des: [
        { id: 1, service: "Auto update mode" },
        { id: 2, service: "Online operator 24/7" },
        { id: 3, service: "International posting" },
        { id: 4, service: "Unique newsletters" },
      ],
    },
    {
      id: 3,
      title: "Webmini 3",
      price: "5.000.000",
      des: [
        { id: 1, service: "Auto update mode" },
        { id: 2, service: "Online operator 24/7" },
        { id: 3, service: "International posting" },
        { id: 4, service: "Unique newsletters" },
        { id: 5, service: "20 Design templates" },
      ],
    },
  ];
  return (
    <div className="w-full bg-[#F9F0EC] lg:p-11 pb-10">
      <div className="lg:w-[1200px] pt-4 lg:m-auto m-[15px]">
        <div className="lg:w-[23%]">
          <div className="lg:inline-block flex items-center flex-col">
            <span className="font-[600] text-[12px] leading-[20px] text-[#919EAB] ">
              Pricing
            </span>
          </div>
          <Title value={"Bảng giá dịch vụ"} noUnderline />
          <span className="font-[600] text-[12px] leading-[20px] text-[#919EAB] inline-block text-center lg:text-start">
            Choose the perfect plan for your needs. Always flexible to grow
          </span>
        </div>
        <div className="flex flex-wrap lg:justify-between justify-center items-center">
          {listServices?.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              price={item.price}
              des={item.des}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content6;
