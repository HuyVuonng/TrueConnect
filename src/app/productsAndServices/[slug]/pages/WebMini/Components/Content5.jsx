import Image from "next/image";
import Title from "../../../../../Components/Title";
import FAQCard from "./FAQCard";

function Content5() {
  const listFAQ = [
    {
      id: 1,
      title: "Webmini là gì?",
      content:
        "Giống 1 website thu nhỏ, với các chức năng cần có tương tự như các trang website hiện có trên thị trường. Webmini cung cấp các tác vụ và giải pháp giúp người sử dụng có thể tự tạo trang web cho riêng mình, với các thao tác bằng tay, đơn giản và được thực hiện ngay trên chính thiết bị di động của mình. Việc này nhằm đơn giản hóa hoạt động thương mại của khách hàng, đồng thời giúp người mua có thể nhanh chóng tiếp cận mong muốn và thực hiện việc mua hàng dễ dàng hơn qua online.",
      open: true,
    },
    {
      id: 2,
      title: "Chia sẻ Webmini có bị mất dữ liệu không?",
      content:
        "Giống 1 website thu nhỏ, với các chức năng cần có tương tự như các trang website hiện có trên thị trường. Webmini cung cấp các tác vụ và giải pháp giúp người sử dụng có thể tự tạo trang web cho riêng mình, với các thao tác bằng tay, đơn giản và được thực hiện ngay trên chính thiết bị di động của mình. Việc này nhằm đơn giản hóa hoạt động thương mại của khách hàng, đồng thời giúp người mua có thể nhanh chóng tiếp cận mong muốn và thực hiện việc mua hàng dễ dàng hơn qua online.",
      open: false,
    },
    {
      id: 3,
      title: "Khi đã tạo webmini, tôi có được chỉnh sửa không?",
      content:
        "Giống 1 website thu nhỏ, với các chức năng cần có tương tự như các trang website hiện có trên thị trường. Webmini cung cấp các tác vụ và giải pháp giúp người sử dụng có thể tự tạo trang web cho riêng mình, với các thao tác bằng tay, đơn giản và được thực hiện ngay trên chính thiết bị di động của mình. Việc này nhằm đơn giản hóa hoạt động thương mại của khách hàng, đồng thời giúp người mua có thể nhanh chóng tiếp cận mong muốn và thực hiện việc mua hàng dễ dàng hơn qua online.",
      open: false,
    },
    {
      id: 4,
      title: "Website mini có gì khác so với website thông thường?",
      content:
        "Giống 1 website thu nhỏ, với các chức năng cần có tương tự như các trang website hiện có trên thị trường. Webmini cung cấp các tác vụ và giải pháp giúp người sử dụng có thể tự tạo trang web cho riêng mình, với các thao tác bằng tay, đơn giản và được thực hiện ngay trên chính thiết bị di động của mình. Việc này nhằm đơn giản hóa hoạt động thương mại của khách hàng, đồng thời giúp người mua có thể nhanh chóng tiếp cận mong muốn và thực hiện việc mua hàng dễ dàng hơn qua online.",
      open: false,
    },
    {
      id: 5,
      title: "Có thể đổi gói webmini khi đã mua gói trước đó rồi không?",
      content:
        "Giống 1 website thu nhỏ, với các chức năng cần có tương tự như các trang website hiện có trên thị trường. Webmini cung cấp các tác vụ và giải pháp giúp người sử dụng có thể tự tạo trang web cho riêng mình, với các thao tác bằng tay, đơn giản và được thực hiện ngay trên chính thiết bị di động của mình. Việc này nhằm đơn giản hóa hoạt động thương mại của khách hàng, đồng thời giúp người mua có thể nhanh chóng tiếp cận mong muốn và thực hiện việc mua hàng dễ dàng hơn qua online.",
      open: false,
    },
  ];

  return (
    <div className="mt-10 pb-20">
      <div className="lg:inline-block flex items-center flex-col">
        <span className="font-[600] text-[12px] leading-[20px] text-[#919EAB] ">
          FAQS
        </span>
      </div>
      <Title value={"Giải đáp thắc mắc"} noUnderline />
      <div className="lg:flex justify-between">
        <div className="lg:w-[50%]">
          {listFAQ?.map((item) => (
            <FAQCard
              key={item.id}
              title={item.title}
              content={item.content}
              open={item.open}
            />
          ))}
        </div>
        <div className="lg:w-[50%]">
          <Image
            className=" lg:float-right lg:overflow-auto"
            src="/Images/ProductsAndServices/faq.png"
            width={466}
            height={466}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Content5;
