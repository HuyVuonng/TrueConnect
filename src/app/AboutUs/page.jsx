import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Content1 from "./Component/Content1";
import Content2 from "./Component/Content2";
import Content3 from "./Component/Content3";
import Content4 from "./Component/Content4";
import Content5 from "./Component/Content5";
import Content6 from "./Component/Content6";

function AboutUs() {
  return (
    <main>
      <div className="lg:w-[1200px] pt-4 lg:m-auto m-[15px]">
        <Header />
        <Content1 />
        <Content2 />
        <Content3 />
      </div>
      <Content4 />
      <div className="lg:w-[1200px] pt-4 lg:m-auto m-[15px]">
        <Content5 />
      </div>
      <Content6 />
      <Footer />
    </main>
  );
}

export default AboutUs;
