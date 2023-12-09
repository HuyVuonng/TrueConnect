import WebMini from "./pages/WebMini/WebMini";
import { notFound } from "next/navigation";
function productsAndServicesChild({ params }) {
  switch (params.slug) {
    case "1":
      return <WebMini />;
    default:
      return notFound();
  }
}

export default productsAndServicesChild;
