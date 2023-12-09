import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Services from "./Components/Services";

function ProductsAndServices() {
  return (
    <main className=" bg-[#F9F0EC] ">
      <div className="lg:w-[1200px] pt-4 lg:m-auto mx-[15px] lg:pb-[100px]">
        <Header />
        <Services />
      </div>
      <Footer />
    </main>
  );
}

export default ProductsAndServices;
