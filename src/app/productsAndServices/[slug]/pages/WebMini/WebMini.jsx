import Image from "next/image";
import Footer from "../../../../Components/Footer";
import Header from "../../../../Components/Header";
import Content1 from "./Components/Content1";
import Content2 from "./Components/Content2";
import Content3 from "./Components/Content3";
import Content4 from "./Components/Content4";
import Content5 from "./Components/Content5";
import Content6 from "./Components/Content6";
import Content7 from "./Components/Content7";
import Content8 from "./Components/Content8";

function WebMini() {
  return (
    <main>
      <div className="lg:w-[1200px] pt-4 lg:m-auto mx-[15px] lg:pb-[20px]">
        <Header />
      </div>
      <Image
        src={"/Images/ProductsAndServices/Whyus.png"}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="Why us"
      />
      <div className="lg:w-[1200px] pt-4 lg:m-auto mx-[15px] lg:pb-[20px]">
        <Content1 />
        <Content2 />
      </div>
      <Content3 />
      <div className="lg:w-[1200px] pt-4 lg:m-auto mx-[15px] lg:pb-[20px]">
        <Content4 />
        <Content5 />
      </div>
      <Content6 />
      <div className="lg:w-[1200px] pt-4 lg:m-auto mx-[15px] lg:pb-[20px]">
        <Content7 />
        <Content8 />
      </div>
      <Footer />
    </main>
  );
}

export default WebMini;
